import { Text, SafeAreaView, TextInput } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { useState } from "react";

import Loading from "@/components/Loading";
import Header from "@/components/Header";

import { colors } from "@/constants";
import useFetchNovel from "@/hooks/useFetchNovel";
import { useHistoryStore } from "@/stores/history-store";
import CoverImg from "@/components/CoverImg";
import ListChapter from "@/components/ListChapter";
import tw from "@/lib/twrnc";

const NovelSlug = () => {
  const params = useLocalSearchParams();
  const slug = params.slug.toString();
  const title = params.title.toString();
  const [search, setSearch] = useState<string>("");

  const [history] = useHistoryStore((state) => [
    state.history.filter((novel) => novel.title === slug),
  ]);

  const { data, isLoading } = useFetchNovel({
    body: {
      slug,
      viewAll: true,
    },
    method: "POST",
  });

  const handleChangeText = (value: string) => {
    setSearch(value);
  };

  if (isLoading || !data || data.length < 1) return <Loading />;

  return (
    <SafeAreaView style={tw`flex-1 px-2 bg-secondary`}>
      <Header title={title} />
      <CoverImg uri={data[0].cover_img} />
      <Text style={tw`text-primary text-center text-xl font-bold mb-3`}>
        {title}
      </Text>
      <TextInput
        style={tw`bg-muted px-3 py-1 rounded`}
        placeholder="Search chapter"
        keyboardType="numeric"
        onChangeText={handleChangeText}
        placeholderTextColor={colors.primaryColor}
      />
      {history[0] ? (
        <Link
          style={tw`text-sm text-orange-700 text-center my-3`}
          href={{
            pathname: history[0].link,
            params: {
              slug: history[0].title,
              chapter: history[0].chapter,
            },
          }}
        >
          Latest read {history[0].chapter}
        </Link>
      ) : null}
      <ListChapter data={data[0].chapters} search={search} slug={slug} />
    </SafeAreaView>
  );
};

export default NovelSlug;
