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
      }}
      onPress={onPress}
      className="px-5 py-1.5 rounded-md"
    >
      <Text style={{ color: colors.secondaryColor }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
