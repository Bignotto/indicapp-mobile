import { Stack } from "expo-router";

export default function Provider() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="[providerId]" />
    </Stack>
  );
}
