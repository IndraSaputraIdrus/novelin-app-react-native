import tw from "@/lib/twrnc";
import { Image, View } from "react-native";

const CoverImg = ({ uri }: { uri: string }) => {
  return (
    <View style={tw`self-center w-40 h-56 mb-3 rounded-md overflow-hidden`}>
      <Image
        style={tw`w-full h-full`}
        source={{
          uri,
        }}
      />
    </View>
  );
};

export default CoverImg;
