export type MediaVideo = {
  title: string;
  platform: "YouTube" | "YouTube Shorts";
  embedUrl: string;
  link: string;
};

export type MediaPhoto = {
  title: string;
  image: string;
  category: string;
  source: string;
};

export const mediaVideos: MediaVideo[] = [
  {
    title: "Campaign Storytelling Example",
    platform: "YouTube",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Brand Content Reel Example",
    platform: "YouTube",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Ad Creative Concept Example",
    platform: "YouTube",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const sequencedMediaPhotos: MediaPhoto[] = Array.from({ length: 29 }, (_, index) => {
  const number = index + 31;
  return {
    title: `Campaign Gallery ${number}`,
    image: `/images/media/images/${number}-367x267.jpg`,
    category: "Campaign",
    source: "Phison Digitals",
  };
});

export const mediaPhotos: MediaPhoto[] = [
  ...sequencedMediaPhotos,
  {
    title: "Campaign Gallery 628",
    image: "/images/media/images/628-536x354.jpg",
    category: "Campaign",
    source: "Phison Digitals",
  },
];
