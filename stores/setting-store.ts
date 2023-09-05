import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";

type SettingStore = {
  fontSize: number;
  lineHeight: number;
  setFont: ({
    fontSize,
    lineHeight,
  }: {
    fontSize: number;
    lineHeight: number;
  }) => void;
};

const initialState = {
  fontSize: 16,
  lineHeight: 24,
};

export const useSettingStore = createWithEqualityFn<SettingStore>()(
  persist(
    (set) => ({
      ...initialState,
      setFont: ({ fontSize, lineHeight }) =>
        set(() => ({ fontSize, lineHeight })),
    }),
    {
      name: "settings",
      storage: createJSONStorage(() => AsyncStorage),
    }
  ),
  shallow
);
