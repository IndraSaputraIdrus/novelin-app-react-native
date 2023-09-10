import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Stack, router } from "expo-router";
import { colors } from "@/constants";
import { useSettingStore } from "@/stores/setting-store";
import { useState } from "react";
import { useHistoryStore } from "@/stores/history-store";
import tw from "@/lib/twrnc";
import { convertFontSize } from "@/lib/convertFontSize";

function SettingButton({
  onPress,
  title,
}: {
  onPress: () => void;
  title: string;
}) {
  return (
    <TouchableOpacity
      style={tw`bg-primary px-5 py-2 rounded`}
      onPress={onPress}
    >
      <Text style={tw`text-secondary text-center font-bold text-xl`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default function Modal() {
  const [localSize, setLocalSize] = useState({
    titleFontSize: 24,
    paragraphFontSize: 16,
  });

  const avaliableFontSize = [14, 16, 18, 20, 24];
  const avaliableFontSizeTitle = [20, 24, 30, 36, 48];

  const paragraphSize = convertFontSize(localSize.paragraphFontSize);
  const titleSize = convertFontSize(localSize.titleFontSize);

  const setFont = useSettingStore((state) => state.setFont);
  const removeHistory = useHistoryStore((state) => state.removeHistory);

  const removeHistoryFromState = () => {
    removeHistory();
    router.back();
  };

  const increase = () => {
    const currentIndex = avaliableFontSize.indexOf(localSize.paragraphFontSize);
    const newIndex = (currentIndex + 1) % avaliableFontSize.length;
    setLocalSize({
      paragraphFontSize: avaliableFontSize[newIndex],
      titleFontSize: avaliableFontSizeTitle[newIndex],
    });
  };
  const decrease = () => {
    const currentIndex = avaliableFontSize.indexOf(localSize.paragraphFontSize);
    const newIndex =
      (currentIndex - 1 + avaliableFontSize.length) % avaliableFontSize.length;
    setLocalSize({
      paragraphFontSize: avaliableFontSize[newIndex],
      titleFontSize: avaliableFontSizeTitle[newIndex],
    });
  };

  const submit = () => {
    setFont({
      paragraphSize: localSize.paragraphFontSize,
      titleSize: localSize.titleFontSize,
    });
    router.back();
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
      <View style={tw`flex-1 p-3 bg-secondary`}>
        <View style={tw`flex-1 mt-5`}>
          <Text style={tw`${titleSize} text-primary`}>Title</Text>
          <Text style={tw`${paragraphSize} text-primary mt-2`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            aperiam praesentium consectetur sequi? Commodi, id illum temporibus
            esse voluptatibus quasi iusto doloremque corrupti quas a quae
            perferendis, exercitationem eos sed.
          </Text>
        </View>
        <View style={tw`gap-2`}>
          <View
            style={tw`w-full flex-row items-center gap-5 justify-between gap-2`}
          >
            <SettingButton title="-" onPress={decrease} />
            <Text style={{ color: colors.primaryColor }}>
              Size: {localSize.paragraphFontSize}
            </Text>
            <SettingButton title="+" onPress={increase} />
          </View>
          <SettingButton title="Submit" onPress={submit} />
          <SettingButton
            title="Remove history"
            onPress={removeHistoryFromState}
          />
        </View>
      </View>
    </>
  );
}
