import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "../constants";
import { Text } from "react-native";

const AppLayout = () => {
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
                color: colors.secondaryColor,
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
          headerTitleAlign: "center",
          headerTintColor: colors.primaryColor,
          title: "Loading...",
        }}
      ></Stack>
    </>
  );
};

export default AppLayout;
