import { useAuth } from "@hooks/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  const { session } = useAuth();

  if (!session) {
    return <Redirect href="/" />;
  }

  return <Stack />;
}
