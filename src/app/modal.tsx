import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Stack, router } from "expo-router";
import { colors } from "../constants";
import { useSettingStore } from "../stores/setting-store";
import { useState } from "react";
import { useHistoryStore } from "../stores/history-store";
export default function Modal() {
  const [localSize, setLocalSize] = useState({
    fontSize: 16,
    lineHeight: 24,
  });

  const avaliableFontSize = [14, 16, 18, 20, 24];
  const avaliableLineHeight = [20, 24, 28, 28, 32];

  const setFont = useSettingStore((state) => state.setFont);
  const removeHistory = useHistoryStore((state) => state.removeHistory);

  const removeHistoryFromState = () => {
    removeHistory();
    router.back();
  };

  const increase = () => {
    const currentIndex = avaliableFontSize.indexOf(localSize.fontSize);
    const newIndex = (currentIndex + 1) % avaliableFontSize.length;
    setLocalSize({
      fontSize: avaliableFontSize[newIndex],
      lineHeight: avaliableLineHeight[newIndex],
    });
  };
  const decrease = () => {
    const currentIndex = avaliableFontSize.indexOf(localSize.fontSize);
    const newIndex =
      (currentIndex - 1 + avaliableFontSize.length) % avaliableFontSize.length;
    setLocalSize({
      fontSize: avaliableFontSize[newIndex],
      lineHeight: avaliableLineHeight[newIndex],
    });
  };

  const submit = () => {
    setFont(localSize);
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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          padding: 10,
          justifyContent: "center",
          backgroundColor: colors.secondaryColor,
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: localSize.fontSize + 10,
              fontWeight: "bold",
              color: colors.primaryColor,
              alignSelf: "flex-start",
            }}
          >
            Title
          </Text>
          <Text
            style={{
              fontSize: localSize.fontSize,
              color: colors.primaryColor,
              alignSelf: "flex-start",
              lineHeight: localSize.lineHeight,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            aperiam praesentium consectetur sequi? Commodi, id illum temporibus
            esse voluptatibus quasi iusto doloremque corrupti quas a quae
            perferendis, exercitationem eos sed.
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          <TouchableOpacity style={styles.button} onPress={decrease}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={{ color: colors.primaryColor }}>
            Size: {localSize.fontSize}
          </Text>
          <TouchableOpacity style={styles.button} onPress={increase}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.submit} onPress={submit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submit}
          onPress={removeHistoryFromState}
        >
          <Text style={styles.buttonText}>Remove history</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryColor,
    flex: 1,
    paddingVertical: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: colors.secondaryColor,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  submit: {
    backgroundColor: colors.primaryColor,
    width: "100%",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 3,
  },
});
