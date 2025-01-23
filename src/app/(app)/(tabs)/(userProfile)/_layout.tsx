import { Stack } from "expo-router";

export default function UserProfile() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="phoneVerification" />
    </Stack>
  );
}
