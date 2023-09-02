import { useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import { colors } from "../constants";
import { useSettingStore } from "../stores/setting-store";

type Props = {
  content: string;
};

const Content = ({ content }: Props) => {
  const { width } = useWindowDimensions();
  const html = `<div style="color: ${colors.primaryColor}">${content}</div>`;
  const [fontSize, lineHeight] = useSettingStore((state) => [
    state.fontSize,
    state.lineHeight,
  ]);
  return (
    <RenderHTML
      contentWidth={width}
      tagsStyles={{
        h1: {
          fontSize: fontSize + 10,
          lineHeight,
        },
        p: {
          fontSize,
          lineHeight,
        },
      }}
      source={{
        html,
      }}
    />
  );
};

export default Content;
