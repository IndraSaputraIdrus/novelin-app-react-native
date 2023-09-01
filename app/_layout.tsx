import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "../constants";

const Layout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.secondaryColor,
          },
          headerTintColor: colors.primaryColor,
          title: "Loading...",
        }}
      />
    </>
  );
};

export default Layout;
