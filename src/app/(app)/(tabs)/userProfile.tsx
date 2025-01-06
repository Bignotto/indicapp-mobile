import AppButton from "@components/AppComponents/AppButton";
import AppContainer from "@components/AppComponents/AppContainer";
import AppInput from "@components/AppComponents/AppInput";
import AppSpacer from "@components/AppComponents/AppSpacer";
import AppText from "@components/AppComponents/AppText";
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
