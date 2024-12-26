import AppButton from "@components/AppButton";
import AppContainer from "@components/AppContainer";
import AppInput from "@components/AppInput";
import AppLogo from "@components/AppLogo";
import AppPasswordInput from "@components/AppPasswordInput";
import AppSpacer from "@components/AppSpacer";
import AppText from "@components/AppText";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useAuth } from "@hooks/AuthContext";
import { InvalidCredentialsError } from "@utils/errors/InvalidCredentials";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";

export default function Login() {
  const { googleSignIn, signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      await signIn(email.trim().toLowerCase(), password);
      router.replace("/");
    } catch (error) {
      if (error instanceof InvalidCredentialsError)
        return Alert.alert("E-Mail e senha não conferem.");
    }
  }

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
        Login
      </AppText>
      <AppText>Que bom que você voltou!</AppText>
      <View style={{ gap: 8, marginVertical: 32, width: "80%" }}>
        <AppInput
          placeholder="email@server.com"
          value={email}
          onChangeText={setEmail}
        />
        <AppPasswordInput
          placeholder="senha"
          value={password}
          onChangeText={setPassword}
        />
        <AppButton title="Entrar" variant="solid" onPress={handleLogin} />
        <AppText
          size="sm"
          bold
          style={{ textAlign: "center", marginVertical: 16 }}
        >
          Esqueci minha senha {""}
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
          onPress={async () => {
            await googleSignIn();
            router.replace("/");
          }}
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
