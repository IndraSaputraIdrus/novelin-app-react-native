import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import Header from "../../components/Header";
import { colors } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { useHistoryStore } from "../../stores/history-store";

const NovelSlug = () => {
  const params = useLocalSearchParams();
  const slug = params.slug.toString();
  const title = params.title.toString();
  const [search, setSearch] = useState<string>("");

  const [history] = useHistoryStore((state) => [
    state.history.filter((novel) => novel.title === slug),
  ]);

  const { data, isLoading, error } = useFetch({
    method: "POST",
    endpoint: "api/novel",
    body: {
      slug,
      viewAll: true,
    },
  });

  const handleChangeText = (value: string) => {
    setSearch(value);
  };

  if (isLoading) return <Loading />;
  if (error || !data || !data[0].chapters) return <Error />;

  return (
    <SafeAreaView style={styles.container}>
      <Header title={title} />
      <Image
        style={styles.image}
        source={{
          uri: data[0].cover_img,
        }}
      />
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder="Search chapter"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleChangeText}
        placeholderTextColor={colors.muted}
      />
      {history[0] ? (
        <Link
          href={{
            pathname: history[0].link,
            params: {
              slug: history[0].title,
              chapter: history[0].chapter,
            },
          }}
          style={{
            textAlign: "center",
            color: colors.muted,
            marginBottom: 5,
            textDecorationLine: "underline",
          }}
        >
          Latest read {history[0].chapter}
        </Link>
      ) : null}
      <FlatList
        style={styles.chapter}
        data={data[0].chapters.filter((item) =>
          item.chapter_number.toString().includes(search)
        )}
        renderItem={({ item }) => (
          <Link
            asChild
            href={{
              pathname: `/novel/chapter/${item.chapter_number}`,
              params: {
                slug,
                chapter: item.chapter_number,
              },
            }}
          >
            <TouchableOpacity>
              <Text style={styles.link}>Chapter - {item.chapter_number}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </SafeAreaView>
  );
};

export default NovelSlug;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryColor,
    flex: 1,
    padding: 10,
  },

  image: {
    alignSelf: "center",
    width: 130,
    height: 200,
    marginVertical: 10,
  },

  title: {
    alignSelf: "center",
    fontSize: 18,
    marginBottom: 10,
    color: colors.primaryColor,
  },

  chapter: {
    alignSelf: "stretch",
  },

  link: {
    paddingVertical: 5,
    textAlign: "center",
    color: colors.primaryColor,
  },

  input: {
    backgroundColor: colors.accent,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
    color: colors.primaryColor,
  },
});
