import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";

type SettingStore = {
  titleSize: number;
  paragraphSize: number;
  setFont: ({
    paragraphSize,
    titleSize,
  }: {
    paragraphSize: number;
    titleSize: number;
  }) => void;
};

const initialState = {
  paragraphSize: 16,
  titleSize: 20,
};

export const useSettingStore = createWithEqualityFn<SettingStore>()(
  persist(
    (set) => ({
      ...initialState,
      setFont: ({ paragraphSize, titleSize }) =>
        set(() => ({ paragraphSize, titleSize })),
    }),
    {
      name: "settings",
      storage: createJSONStorage(() => AsyncStorage),
    }
  ),
  shallow
);
