import { Text, TouchableOpacity } from "react-native";
import { colors } from "../constants";
import tw from "@/lib/twrnc";

type Props = {
  text: string;
  onPress: () => void;
};

const Button = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`px-5 py-1.5 rounded bg-primary`}
    >
      <Text style={tw`text-secondary font-semibold`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
