import AppText from "@components/AppText";
import { useAuth } from "@hooks/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  const { session, isLoading, user } = useAuth();

  if (isLoading) {
    return <AppText>Carregando...</AppText>;
  }

  if (!session) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );

  // return (
  //   <Stack>
  //     <Stack.Screen name="index" options={{ headerShown: false }} />
  //     <Stack.Screen name="createProfile" options={{ headerShown: false }} />
  //   </Stack>
  // );
}
