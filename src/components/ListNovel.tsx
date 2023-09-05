import { CardType } from "typings";
import Card from "./Card";
import { FlatList } from "react-native";

type Props = {
  data: CardType[];
};

const ListNovel = ({ data }: Props) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Card {...item} />}
      contentContainerStyle={{
        alignItems: "stretch",
      }}
      numColumns={2}
      keyExtractor={(item: { id: number } & CardType) => item.id.toString()}
    />
  );
};

export default ListNovel;
