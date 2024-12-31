import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <>
      <StatusBar style="inverted" />
      <Tabs screenOptions={{ tabBarActiveTintColor: theme.colors.text }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Principal",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={28} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="userProfile"
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
