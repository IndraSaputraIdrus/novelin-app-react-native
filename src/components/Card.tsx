import { colors } from "@/constants";
import truncate from "@/lib/truncate";
import tw from "@/lib/twrnc";
import { Link } from "expo-router";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { CardType } from "typings";

const Card = ({ cover_img, slug, title }: CardType) => {
  return (
    <Link
      asChild
      href={{
        pathname: "/novel/[slug]",
        params: {
          slug,
          title,
        },
      }}
    >
      <TouchableOpacity style={tw`w-1/2 px-2`}>
        <View style={tw`h-60`}>
          <Image
            style={tw`h-full w-full rounded`}
            source={{
              uri: cover_img,
            }}
          />
        </View>
        <Text style={tw`text-lg mt-1 text-center text-primary`}>
          {truncate(title, 16)}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default Card;
