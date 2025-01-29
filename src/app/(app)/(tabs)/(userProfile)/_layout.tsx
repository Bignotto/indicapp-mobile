import { PhoneProvider } from "@hooks/PhoneHook";
import { Stack } from "expo-router";

export default function UserProfile() {
  return (
    <PhoneProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="[phone]" />
      </Stack>
    </PhoneProvider>
  );
}
