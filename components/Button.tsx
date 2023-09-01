import { Text, TouchableOpacity } from "react-native";
import { colors } from "../constants";

type Props = {
  text: string;
  onPress: () => void;
};

const Button = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.primaryColor,
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}
      onPress={onPress}
    >
      <Text style={{ color: colors.secondaryColor }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
