import { Link } from "expo-router";
import { Text, Image, StyleSheet, Pressable } from "react-native";
import { colors } from "../constants";

type Props = {
  cover_img: string;
  slug: string;
  title: string;
};

const Card = ({ cover_img, slug, title }: Props) => {
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
      <Pressable style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: cover_img,
          }}
        />
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </Link>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  image: {
    objectFit: "cover",
    width: "100%",
    height: 260,
  },

  text: {
    color: colors.primaryColor,
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18,
  },
});
