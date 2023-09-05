export type Novel = {
  id: number;
  title: string;
  slug: string;
  cover_img: string;
};

export type NovelList = Novel & {
  chapters: { chapter_number: number }[];
};

export type NovelContent = Novel & {
  content: string;
};

export type CardType = {
  cover_img: string;
  slug: string;
  title: string;
};
