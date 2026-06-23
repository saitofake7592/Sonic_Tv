import { Video } from '../types';

export const DEFAULT_VIDEOS: Video[] = [
  {
    id: 'sonic-default-1',
    title: 'স্পোর্টস ক্রিকেট হাইলাইটস - গর্জিয়াস বাউন্ডারি ও উইকেট ট্রফি',
    description: 'সনিক টিভি স্পেশাল ক্রিকেট টুর্নামেন্টের সেরা কিছু আক্রমণাত্মক ও রোমাঞ্চকর বাউন্ডারি এবং উইকেট নেওয়ার ক্লাসিক ভিডিও ক্লিপ।',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1540747737956-378724044453?auto=format&fit=crop&q=80&w=600',
    date: '2026-06-22',
    time: '20:15',
    views: 1240,
    duration: '00:15',
    category: 'Sports',
  },
  {
    id: 'sonic-default-2',
    title: 'সনিক এক্সপ্লোরেশন - অফুরন্ত প্রকৃতির রূপ ও নদীমাতৃক বাংলাদেশ',
    description: 'সবুজ বাংলার বুকে নদী, মেঘমালাই আর প্রকৃতির অসাধারণ চিত্রপট নিয়ে তৈরি একটি রিফ্রেশিং ভিডিও। চোখের শান্তি এবং নান্দনিকতা একসাথে।',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=600',
    date: '2026-06-21',
    time: '14:30',
    views: 890,
    duration: '09:56',
    category: 'Entertainment',
  },
  {
    id: 'sonic-default-3',
    title: 'এন্টারটেইনমেন্ট ফান ও ফ্যামিলি কার্টুন সিরিজ',
    description: 'ছোট বড় সবার উপভোগযোগ্য একটি হাসির এনিমেশন কার্টুন পর্ব যা আপনার মন ভালো করে দেবে তাৎক্ষণিক। সনিক টিভির অন্যতম জনপ্রিয় কন্টেন্ট।',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600',
    date: '2026-06-20',
    time: '18:50',
    views: 2450,
    duration: '08:48',
    category: 'Entertainment',
  },
  {
    id: 'sonic-default-4',
    title: 'অত্যাধুনিক সাইন্স ফিকশন ভিএফএক্স ও রোবোটিক্স টেকনোলজি',
    description: 'ফিউচার টেকনোলজি, দুর্দান্ত ভিজ্যুয়াল ইফেক্টস এবং রোবোটিকস ইনোভেশন নিয়ে নির্মিত সায়েন্স ফিকশন থ্রিলার কন্টেন্ট।',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600',
    date: '2026-06-19',
    time: '11:20',
    views: 1533,
    duration: '12:14',
    category: 'News',
  }
];

export const AVAILABLE_CATEGORIES = [
  'Sports',
  'Entertainment',
  'News',
  'Drama',
  'Other'
];

export const CATEGORY_LABELS: Record<string, string> = {
  All: 'সব ক্যাটাগরি',
  Sports: 'স্পোর্টস (খেলাধুলা)',
  Entertainment: 'বিনোদন',
  News: 'খবর ও তথ্য',
  Drama: 'নাটক ও শর্ট ফিল্ম',
  Other: 'অন্যান্য কন্টেন্ট'
};
