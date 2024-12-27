import AppButton from "@components/AppButton";
import AppContainer from "@components/AppContainer";
import AppInput from "@components/AppInput";
import AppSpacer from "@components/AppSpacer";
import AppText from "@components/AppText";
import { useAuth } from "@hooks/AuthContext";

export default function UserProfile() {
  const { session, signOut, user } = useAuth();

  return (
    <AppContainer>
      <AppText>Bem vindo!</AppText>
      <AppSpacer />
      <AppText>Vamos nos conhecer?</AppText>
      <AppInput placeholder="Nome" />
      <AppButton title="Sair" variant="solid" onPress={signOut} />
    </AppContainer>
  );
}
