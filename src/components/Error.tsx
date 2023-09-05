import { View, Text } from "react-native";
import { colors } from "../constants";

type Props = {
  message?: string;
};

const Error = ({ message }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.secondaryColor,
      }}
    >
      <Text style={{ color: colors.primaryColor }}>
        {message ? message : "404 Not Found"}
      </Text>
    </View>
  );
};

export default Error;
