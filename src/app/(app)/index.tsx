import AppButton from "@components/AppButton";
import AppContainer from "@components/AppContainer";
import AppText from "@components/AppText";
import { useAuth } from "@hooks/AuthContext";
import { router } from "expo-router";

export default function Index() {
  const { session, signOut, user } = useAuth();

  return (
    <AppContainer>
      <AppText>{session?.user.email}</AppText>
      {user && (
        <>
          <AppText>
            {user.name} - {user.email}
          </AppText>
          <AppText>{JSON.stringify(user, null, 2)}</AppText>
        </>
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
