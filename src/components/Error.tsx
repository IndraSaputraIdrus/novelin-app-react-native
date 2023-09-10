import { View, Text } from "react-native";
import { colors } from "../constants";
import tw from "@/lib/twrnc";

type Props = {
  message?: string;
};

const Error = ({ message }: Props) => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-secondary px-3 py-1`}>
      <Text style={tw`bg-primary font-bold`}>
        {message ? message : "404 Not Found"}
      </Text>
    </View>
  );
};

export default Error;
