import { Pressable, Text, View } from "react-native";
import { Stack } from "expo-router";
import { colors } from "../constants";
import { useSettingStore } from "../stores/setting-store";
export default function Modal() {
  const [fontSize, lineHeight, avaliableFontSize, setFont] = useSettingStore(
    (state) => [
      state.fontSize,
      state.lineHeight,
      state.avaliableFontSize,
      state.setFont,
    ]
  );

  const increase = () => {
    const currentIndex = avaliableFontSize.indexOf(fontSize);
    const newIndex = (currentIndex + 1) % avaliableFontSize.length;
    setFont(newIndex);
  };
  const decrease = () => {
    const currentIndex = avaliableFontSize.indexOf(fontSize);
    const newIndex =
      (currentIndex - 1 + avaliableFontSize.length) % avaliableFontSize.length;
    setFont(newIndex);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          padding: 10,
          justifyContent: "center",
          backgroundColor: colors.secondaryColor,
        }}
      >
        <Text
          style={{
            fontSize: fontSize + 10,
            color: colors.primaryColor,
            alignSelf: "flex-start",
          }}
        >
          Title
        </Text>
        <Text
          style={{
            fontSize,
            color: colors.primaryColor,
            alignSelf: "flex-start",
            lineHeight,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam
          praesentium consectetur sequi? Commodi, id illum temporibus esse
          voluptatibus quasi iusto doloremque corrupti quas a quae perferendis,
          exercitationem eos sed.
        </Text>
        <View
          style={{ marginTop: 15, flexDirection: "row", alignItems: "center" }}
        >
          <Pressable onPress={decrease}>
            {({ pressed }) => (
              <View
                style={{
                  backgroundColor: pressed ? colors.muted : colors.primaryColor,
                  flexShrink: 1,
                  width: 100,
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{ color: colors.secondaryColor, textAlign: "center" }}
                >
                  Perkecil
                </Text>
              </View>
            )}
          </Pressable>
          <Text style={{ color: colors.primaryColor, marginHorizontal: 15 }}>
            size: {fontSize}
          </Text>
          <Pressable onPress={increase}>
            {({ pressed }) => (
              <View
                style={{
                  backgroundColor: pressed ? colors.muted : colors.primaryColor,
                  flexShrink: 1,
                  width: 100,
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{ color: colors.secondaryColor, textAlign: "center" }}
                >
                  Perbesar
                </Text>
              </View>
            )}
          </Pressable>
        </View>
      </View>
    </>
  );
}
