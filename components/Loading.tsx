import { View, Text } from "react-native";
import { colors } from "../constants";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.secondaryColor,
      }}
    >
      <Text style={{ color: colors.primaryColor }}>Loading...</Text>
    </View>
  );
};

export default Loading;
