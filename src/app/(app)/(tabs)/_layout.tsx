import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

export default function TabLayout() {
  const theme = useTheme();

  // const segments = useSegments();
  const path = usePathname();

  const hide = path.includes("/provider");

  return (
    <>
      <StatusBar backgroundColor={theme.colors.shape_dark} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colors.text,

          tabBarStyle: {
            display: hide ? "none" : "flex",
          },
        }}
        initialRouteName="(main)"
      >
        <Tabs.Screen
          name="(main)"
          options={{
            title: "Principal",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={28} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="(userProfile)"
          options={{
            title: "Perfil",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user-alt" size={28} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  );
}
