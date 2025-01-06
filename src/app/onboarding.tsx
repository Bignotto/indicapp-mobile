import AppButton from "@components/AppComponents/AppButton";
import AppLogo from "@components/AppComponents/AppLogo";
import AppText from "@components/AppComponents/AppText";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function Onboarding() {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "#fff",
        paddingHorizontal: 12,
      }}
    >
      <StatusBar style="inverted" />
      {/* <Image
        source={require("../../assets/images/welcome_logo.png")}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      /> */}
      <View
        style={{
          height: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppLogo size="lg" />
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <AppText size="xlg" bold>
          Bem vindo!
        </AppText>
        <AppText style={{ textAlign: "center" }}>
          Vamos conectar você com os melhores prestadores de serviço da sua
          região!
        </AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginTop: 64,
          }}
        >
          <AppButton title="Entrar" onPress={() => router.push("/login")} />
          <AppButton
            title="Registrar"
            outline
            onPress={() => router.push("/register")}
          />
        </View>
      </View>
    </View>
  );
}
