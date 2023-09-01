import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import useFetch from "../../../hooks/useFetch";
import RenderHTML from "react-native-render-html";
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";
import Button from "../../../components/Button";
import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { colors } from "../../../constants";

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
  const { width } = useWindowDimensions();

  const [currentChapter, setCurrentChapter] = useState(chapter);
  const title = `Chapter ${currentChapter}`;

  const { data, isLoading, error, refetch } = useFetch({
    endpoint: "api/novel",
    method: "POST",
    body: {
      chapter: currentChapter,
      slug,
    },
  });

  useEffect(() => {
    refetch();
  }, [currentChapter]);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  if (!data) return <Error message="Chapter not exist" />;

  const html = `<div style="color: ${colors.primaryColor}">${data[0].content}</div>`;

  const handleNext = () => {
    setCurrentChapter((prev) => prev + 1);
  };
  const handlePrev = () => {
    setCurrentChapter((prev) => prev - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={title} />
      <ScrollView style={{ padding: 10, paddingBottom: 20 }}>
        <ButtonWrapper onNext={handleNext} onPrev={handlePrev} />
        <RenderHTML
          contentWidth={width}
          source={{
            html,
          }}
        />
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
