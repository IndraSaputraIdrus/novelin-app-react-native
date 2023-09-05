import { Stack } from "expo-router";

const Header = ({ title }: { title: string }) => {
  return (
    <Stack.Screen
      options={{
        title,
      }}
    />
  );
};

export default Header;
