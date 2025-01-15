import { Stack } from "expo-router";

export default function Results() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // contentStyle: {
        //   backgroundColor: "#fff",
        // },
      }}
    >
      <Stack.Screen name="[searchTerms]" />
    </Stack>
  );
}
