import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "../constants";
import { Text } from "react-native";

const Layout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerRight: () => (
            <Link
              href="/modal"
              asChild
              style={{
                color: colors.accent,
                backgroundColor: colors.muted,
                height: 20,
                width: 20,
                textAlign: "center",
                borderRadius: 20,
              }}
            >
              <Text>!</Text>
            </Link>
          ),
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
