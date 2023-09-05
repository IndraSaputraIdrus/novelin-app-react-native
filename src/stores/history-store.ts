import { shallow } from "zustand/shallow";
import { persist, createJSONStorage } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";
import AsyncStorage from "@react-native-async-storage/async-storage";

type HistoryStore = {
  history: {
    title: string | null;
    chapter: number | null;
    link: string | null;
  }[];
  setHistory: ({
    chapter,
    link,
    title,
  }: {
    chapter: number;
    link: string;
    title: string;
  }) => void;
  removeHistory: () => void;
};

export const useHistoryStore = createWithEqualityFn<HistoryStore>()(
  persist(
    (set) => ({
      history: [],
      setHistory: ({ chapter, link, title }) => {
        set((state) => ({
          history: [
            ...state.history.filter((novel) => novel.title !== title),
            { chapter, link, title },
          ],
        }));
      },
      removeHistory: () => set({ history: [] }),
    }),
    {
      name: "history",
      storage: createJSONStorage(() => AsyncStorage),
    }
  ),
  shallow
);
