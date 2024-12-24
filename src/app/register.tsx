import AppButton from "@components/AppButton";
import AppContainer from "@components/AppContainer";
import AppInput from "@components/AppInput";
import AppLogo from "@components/AppLogo";
import AppPasswordInput from "@components/AppPasswordInput";
import AppSpacer from "@components/AppSpacer";
import AppText from "@components/AppText";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { View } from "react-native";

export default function Register() {
  return (
    <AppContainer
      direction="column"
      justify="space-evenly"
      padding={8}
      style={{
        marginTop: 24,
      }}
    >
      <AppLogo size="sm" />
      <AppText size="xlg" bold style={{ marginTop: 64 }}>
        Crie sua conta
      </AppText>
      <AppContainer padding={8}>
        <AppText style={{ textAlign: "center" }}>
          Crie sua conta para se conectar com os melhores prestadores de serviço
          da região!
        </AppText>
      </AppContainer>
      <View style={{ gap: 8, marginVertical: 32, width: "80%" }}>
        <AppInput placeholder="email@server.com" />
        <AppPasswordInput placeholder="senha" />
        <AppPasswordInput
          placeholder="confirme sua senha"
          error="As senhas não conferem"
        />
        <AppButton title="Registrar" variant="solid" />
        <AppText
          size="sm"
          bold
          style={{ textAlign: "center", marginVertical: 16 }}
        >
          Já tenho uma conta {""}
          <FontAwesome5 name="arrow-right" size={12} color="black" />
        </AppText>
      </View>
      <AppSpacer verticalSpace="lg" />
      <AppText>Ou entre com:</AppText>
      <View style={{ flexDirection: "row", gap: 16 }}>
        <AppButton
          leftIcon={<FontAwesome5 name="google" size={24} color="black" />}
          variant="solid"
          outline
        />
        <AppButton
          leftIcon={<FontAwesome5 name="apple" size={24} color="black" />}
          variant="solid"
          outline
        />
      </View>
    </AppContainer>
  );
}
