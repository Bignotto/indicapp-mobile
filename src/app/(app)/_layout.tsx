import AppText from "@components/AppText";
import { useAuth } from "@hooks/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  const { session, isLoading } = useAuth();

  console.log(JSON.stringify(session, null, 2));

  if (isLoading) {
    return <AppText>Carregando...</AppText>;
  }

  if (!session) {
    return <Redirect href="/" />;
  }

  return <Stack />;
}
