export type PublicGalleryImage = {
  src: string;
  filename: string;
  unoptimized: boolean;
  category?: string;
  relPath?: string;
  mediaType?: "image" | "video";
};

export function videoCaption(video: PublicGalleryImage): string {
  const title = video.filename.replace(/\.[^.]+$/, "").trim();
  return video.category ? `${title} · ${video.category}` : title;
}
