import { View, Text } from "react-native";
import tw from "@/lib/twrnc";

const Loading = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-secondary`}>
      <Text style={tw`text-primary font-bold`}>Loading...</Text>
    </View>
  );
};

export default Loading;
