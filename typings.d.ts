export type Novel = {
  id: number;
  title: string;
  slug: string;
  cover_img: string;
  chapters?: { chapter_number: string }[];
  content?: string;
};
