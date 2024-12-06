import AppButton from "@components/AppButton";
import AppContainer from "@components/AppContainer";
import AppInput from "@components/AppInput";
import AppLogo from "@components/AppLogo";
import AppPasswordInput from "@components/AppPasswordInput";
import AppSpacer from "@components/AppSpacer";
import AppText from "@components/AppText";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { View } from "react-native";

export default function Login() {
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
        <AppInput placeholder="email@server.com" />
        <AppPasswordInput placeholder="senha" />
        <AppButton title="Entrar" variant="solid" />
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
            try {
              await GoogleSignin.hasPlayServices();
              const userInfo = await GoogleSignin.signIn();
              console.log(userInfo);
              if (userInfo!.data!.idToken) {
                // const { data, error } = await supabase.auth.signInWithIdToken({
                //   provider: 'google',
                //   token: userInfo.data.idToken,
                // })
                //console.log(error, data)
              } else {
                throw new Error("no ID token present!");
              }
            } catch (error: any) {
              if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
              } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
              } else if (
                error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
              ) {
                // play services not available or outdated
              } else {
                // some other error happened
              }
            }
            console.log("google");
          }}
        />
        {/* <AppButton
          leftIcon={<FontAwesome5 name="facebook-f" size={24} color="black" />}
          variant="solid"
          outline
        /> */}
        <AppButton
          leftIcon={<FontAwesome5 name="apple" size={24} color="black" />}
          variant="solid"
          outline
        />
      </View>
    </AppContainer>
  );
}
