import { useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import { colors } from "../constants";
import { useSettingStore } from "../stores/setting-store";
import { paragraphLineHeight } from "@/lib/paragraphLineHeight";

type Props = {
  content: string;
};

const Content = ({ content }: Props) => {
  const { width } = useWindowDimensions();
  const html = `<div style="color: ${colors.primaryColor}">${content}</div>`;
  const [paragraphSize, titleSize] = useSettingStore((state) => [
    state.paragraphSize,
    state.titleSize,
  ]);
  return (
    <RenderHTML
      contentWidth={width}
      tagsStyles={{
        h1: {
          fontSize: titleSize,
        },
        p: {
          fontSize: paragraphSize,
          lineHeight: paragraphLineHeight(paragraphSize),
        },
      }}
      source={{
        html,
      }}
    />
  );
};

export default Content;
