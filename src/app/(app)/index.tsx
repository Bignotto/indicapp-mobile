import AppButton from "@components/AppButton";
import AppContainer from "@components/AppContainer";
import AppText from "@components/AppText";
import { useAuth } from "@hooks/AuthContext";
import { router } from "expo-router";

export default function Index() {
  const { session, signOut, user } = useAuth();

  if (!user) {
    router.replace("/createProfile");
  }

  return (
    <AppContainer>
      <AppText>{session?.user.email}</AppText>
      {user && (
        <AppText>
          {user.name} - {user.email}
        </AppText>
      )}
      <AppButton title="Sair" variant="solid" onPress={signOut} />
      <AppButton
        title="Profile"
        variant="solid"
        onPress={() => {
          router.push("/createProfile");
        }}
      />
    </AppContainer>
  );
}
