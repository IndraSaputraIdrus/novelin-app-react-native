import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Header from "../../components/Header";
import { colors } from "../../constants";

export default function Novel() {
  const { data, isLoading, error } = useFetch({
    endpoint: "api/novel",
    method: "GET",
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  if (!data) return <Error message="Chapter not exist" />;

  return (
    <SafeAreaView style={styles.container}>
      <Header title={"List novel"} />
      <FlatList
        style={styles.imageContainer}
        data={data}
        renderItem={({ item }) => <Card {...item} />}
        contentContainerStyle={{
          alignItems: "stretch",
        }}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
    justifyContent: "center",
  },
  imageContainer: {
    padding: 10,
    marginHorizontal: -10,
  },
});
