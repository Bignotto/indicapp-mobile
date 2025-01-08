import { Stack } from "expo-router";

export default function Main() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="provider" />
      <Stack.Screen name="results" />
    </Stack>
  );
}
