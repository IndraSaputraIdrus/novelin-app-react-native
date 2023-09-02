import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";

type SettingStore = {
  fontSize: number;
  lineHeight: number;
  avaliableFontSize: number[];
  avaliableLineHeight: number[];
  setFont: (newSize: number) => void;
};

export const useSettingStore = createWithEqualityFn<SettingStore>(
  (set) => ({
    fontSize: 16,
    lineHeight: 24,
    avaliableFontSize: [14, 16, 18, 20, 24],
    avaliableLineHeight: [20, 24, 28, 28, 32],
    setFont: (newSize: number) =>
      set((state) => ({
        fontSize: state.avaliableFontSize[newSize],
        lineHeight: state.avaliableLineHeight[newSize],
      })),
  }),
  shallow
);
