import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { colors } from "@/constants";

import Loading from "@/components/Loading";
import Error from "@/components/Error";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Content from "@/components/Content";

import useFetchContent from "@/hooks/useFetchContent";
import { useHistoryStore } from "@/stores/history-store";

type TypeButtonWrapper = {
  onNext: () => void;
  onPrev: () => void;
};
const ButtonWrapper = ({ onPrev, onNext }: TypeButtonWrapper) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "flex-end",
        gap: 10,
        paddingVertical: 15,
      }}
    >
      <Button text="Prev" onPress={onPrev} />
      <Button text="Next" onPress={onNext} />
    </View>
  );
};

const NovelChapter = () => {
  const params = useLocalSearchParams();
  const chapter = Number(params.chapter);
  const slug = params.slug.toString();

  const setHistory = useHistoryStore((state) => state.setHistory);

  const title = `Chapter ${chapter}`;

  const { data, error, isLoading } = useFetchContent({
    body: {
      chapter,
      slug,
    },
  });

  useEffect(() => {
    setHistory({
      chapter,
      title: slug,
      link: `/novel/${slug}/${chapter}`,
    });
  }, []);

  if (isLoading) return <Loading />;
  if (error || !data) return <Error />;

  const handleNext = () => {
    router.replace(`/novel/${slug}/${chapter + 1}`);
  };
  const handlePrev = () => {
    router.replace(`/novel/${slug}/${chapter - 1}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={title} />
      <ScrollView style={{ padding: 10, paddingBottom: 20 }}>
        <ButtonWrapper onNext={handleNext} onPrev={handlePrev} />
        <Content content={data[0].content} />
        <ButtonWrapper onNext={handleNext} onPrev={handlePrev} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NovelChapter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
  },
});
