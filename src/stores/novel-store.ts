import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

type NovelStore = {
  slug: string;
  title: string;
  chapters: { chapter_number: number }[];
};

type Actions = {
  setNovel: ({ slug, title, chapters }: NovelStore) => void;
};

export const useNovelStore = createWithEqualityFn<NovelStore & Actions>()(
  (set) => ({
    slug: null,
    title: null,
    chapters: [],
    setNovel: ({ slug, title, chapters }) => set({ slug, title, chapters }),
  }),
  shallow
);
