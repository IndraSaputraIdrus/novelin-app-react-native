import { colors } from "@/constants";
import truncate from "@/lib/truncate";
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
      <TouchableOpacity className="w-1/2 px-2">
        <View className="h-60">
          <Image
            className="h-full w-full rounded-md"
            source={{
              uri: cover_img,
            }}
          />
        </View>
        <Text
          style={{ color: colors.primaryColor }}
          className="text-lg mt-1 text-center truncate"
        >
          {truncate(title, 16)}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default Card;
