import { Link } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

type Props = {
  data: { chapter_number: number }[];
  search: string;
  slug: string;
};

const ListChapter = ({ data, search, slug }: Props) => {
  return (
    <View className="mt-1">
      <FlatList
        data={data.filter((item) =>
          item.chapter_number.toString().includes(search)
        )}
        renderItem={({ item }) => (
          <Link
            asChild
            href={{
              pathname: `/novel/[slug]/[chapter]`,
              params: {
                slug,
                chapter: item.chapter_number,
              },
            }}
          >
            <TouchableOpacity className="bg-gray-700/50 text-orange-900 my-1 rounded-md">
              <Text className="text-center py-2">
                Chapter - {item.chapter_number}
              </Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
};

export default ListChapter;
