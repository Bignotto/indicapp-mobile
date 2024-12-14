import AppText from "@components/AppText";
import { useAuth } from "@hooks/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  const { session, isLoading } = useAuth();

  if (isLoading) {
    return <AppText>Carregando...</AppText>;
  }

  if (!session) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
