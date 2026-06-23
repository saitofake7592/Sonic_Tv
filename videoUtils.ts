import { Video } from '../types';

/**
 * Parses a video URL to detect if it is a YouTube URL or a direct MP4 link.
 * Returns the appropriate type and an embeddable format.
 */
export function getEmbedUrl(url: string): { type: 'youtube' | 'direct' | 'unknown'; embedUrl: string } {
  if (!url) return { type: 'unknown', embedUrl: '' };

  // Detect YouTube formats (youtube.com/watch?v=..., youtu.be/..., youtube.com/embed/...)
  const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(ytRegex);

  if (match && match[1]) {
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`
    };
  }

  // Treat as direct video stream URL
  return {
    type: 'direct',
    embedUrl: url
  };
}

/**
 * Encodes a video object into a Unicode-safe Base64 URL parameter.
 * Handles Bengali text and symbols beautifully.
 */
export function generateShareUrl(video: Video): string {
  try {
    let targetUrl = video.cloudStoredUrl || video.url || '';
    
    // Check if the URL is a massive gallery/Base64 URL, or starts with "data:" key
    if (!video.cloudStoredUrl && (video.isGalleryBlob || targetUrl.startsWith('data:') || targetUrl.length > 2000)) {
      // Substitute with a high-quality category specific public video stream URL as fallback
      const categoryMap: Record<string, string> = {
        Sports: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        Entertainment: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        News: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        Drama: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutback.mp4'
      };
      targetUrl = categoryMap[video.category] || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    }

    const videoData = JSON.stringify({
      id: video.id,
      title: video.title,
      description: video.description,
      url: targetUrl,
      thumbnailUrl: video.thumbnailUrl,
      date: video.date,
      time: video.time,
      views: video.views,
      duration: video.duration,
      category: video.category
    });

    // Unicode block encoding to resolve binary btoa errors on Bengali text
    const utf8SafeBase64 = btoa(
      encodeURIComponent(videoData).replace(/%([0-9A-F]{2})/g, (_, p1) => {
        return String.fromCharCode(parseInt(p1, 16));
      })
    );

    return `${window.location.origin}${window.location.pathname}?v=${utf8SafeBase64}`;
  } catch (e) {
    console.error('Error generating sharing link:', e);
    return window.location.href;
  }
}

/**
 * Decodes video data encoded as URL query parameter back into a Video object.
 */
export function parseSharedVideo(queryString: string): Video | null {
  try {
    const params = new URLSearchParams(queryString);
    const vParam = params.get('v') || params.get('video');
    if (!vParam) return null;

    // Unicode safe Base64 decode
    const decodedJson = decodeURIComponent(
      atob(vParam)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    const parsed = JSON.parse(decodedJson);
    if (parsed && parsed.title && parsed.url) {
      return parsed as Video;
    }
  } catch (e) {
    console.error('Error parsing shared video query payload:', e);
  }
  return null;
}

/**
 * Generates interactive simulated duration for user items (e.g. "04:30") if they leave it empty.
 */
export function generateRandomDuration(): string {
  const mins = Math.floor(Math.random() * 8) + 2; // 2 to 9 mins
  const secs = Math.floor(Math.random() * 59);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
