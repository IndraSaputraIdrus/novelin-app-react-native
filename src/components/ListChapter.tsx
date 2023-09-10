import tw from "@/lib/twrnc";
import { Link } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

type Props = {
  data: { chapter_number: number }[];
  search: string;
  slug: string;
};

const ListChapter = ({ data, search, slug }: Props) => {
  return (
    <View style={tw`mt-1`}>
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
            <TouchableOpacity style={tw`bg-gray-700/50 my-1 rounded-md`}>
              <Text style={tw`text-center py-2 text-primary`}>
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
