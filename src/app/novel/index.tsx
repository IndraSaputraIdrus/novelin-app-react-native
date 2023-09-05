import { SafeAreaView } from "react-native";
import useFetchNovel from "@/hooks/useFetchNovel";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import Header from "@/components/Header";
import { colors } from "@/constants";
import ListNovel from "@/components/ListNovel";
import { Stack } from "expo-router";

export default function Novel() {
  const { data, isLoading, error } = useFetchNovel({
    method: "GET",
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  if (!data) return <Error message="Chapter not exist" />;

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.secondaryColor }}
      className="flex-1 px-2 py-5"
    >
      <Stack.Screen options={{ headerTitleAlign: "left" }} />
      <Header title={"List novel"} />
      <ListNovel data={data} />
    </SafeAreaView>
  );
}
