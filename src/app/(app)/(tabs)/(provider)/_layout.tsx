import { Stack } from "expo-router";
import { useTheme } from "styled-components";

export default function ProviderLayout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="createServiceAd" />
      <Stack.Screen name="index" />
    </Stack>
  );
}
