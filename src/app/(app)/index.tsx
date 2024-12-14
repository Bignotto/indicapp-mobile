import AppButton from "@components/AppButton";
import AppContainer from "@components/AppContainer";
import AppText from "@components/AppText";
import { useAuth } from "@hooks/AuthContext";

export default function Index() {
  const { session, signOut } = useAuth();

  return (
    <AppContainer>
      <AppText>{session?.user.email}</AppText>
      <AppButton title="Sair" variant="solid" onPress={signOut} />
    </AppContainer>
  );
}
