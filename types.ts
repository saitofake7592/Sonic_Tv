export interface Video {
  id: string;
  title: string;
  description: string;
  url: string; // Direct link to MP4 file, youtube watch link, youtube embed, or base64 data url
  thumbnailUrl?: string; // Optional custom thumbnail or automatically extracted/rendered placeholder
  date: string; // User-customizable date (YYYY-MM-DD format or arbitrary string)
  time: string; // User-customizable time (HH:MM format or arbitrary string)
  views: number; // View counter
  duration: string; // e.g. "05:12"
  category: string; // e.g. "Sports", "Entertainment", "News", "Drama", "Other"
  isGalleryBlob?: boolean; // True if uploaded from mobile phone/PC gallery
  galleryFileId?: string; // Unique lookup ID in IndexedDB
  cloudStoredUrl?: string; // Directly streamable anonymous public cloud link (tmpfiles, uguu, etc)
}

export type ActiveTab = 'view' | 'upload';
