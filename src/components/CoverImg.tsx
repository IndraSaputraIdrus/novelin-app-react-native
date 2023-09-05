import { Image, View } from "react-native";

const CoverImg = ({ uri }: { uri: string }) => {
  return (
    <View className="self-center w-40 h-56 mb-3 rounded-md overflow-hidden">
      <Image
        className="w-full h-full"
        source={{
          uri,
        }}
      />
    </View>
  );
};

export default CoverImg;
