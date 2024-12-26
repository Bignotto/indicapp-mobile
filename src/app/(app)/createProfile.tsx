import AppButton from "@components/AppButton";
import AppContainer from "@components/AppContainer";
import AppInput from "@components/AppInput";
import AppSpacer from "@components/AppSpacer";
import AppText from "@components/AppText";
import { useAuth } from "@hooks/AuthContext";
import { useNavigation } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const { session, signOut, user } = useAuth();

  const navigation = useNavigation();

  //NEXT: fix this
  /**
   * create user automatically without the need to complete the profile
   */

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      console.log(e.data.action.type);
      if (e.data.action.type !== "GO_BACK") {
        navigation.dispatch(e.data.action);
      }
    });
  }, []);

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
