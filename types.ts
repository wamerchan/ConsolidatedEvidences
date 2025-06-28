
export interface TextContent {
  type: 'text';
  content: string;
}

export interface ImageContent {
  type: 'image';
  src: string;
  alt: string;
}

export interface YoutubeContent {
  type: 'youtube';
  videoId: string;
  caption?: string;
}

export type ContentBlock = TextContent | ImageContent | YoutubeContent;

export interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  snippet: string;
  content: ContentBlock[];
}
