import AppButton from "@components/AppButton";
import AppLogo from "@components/AppLogo";
import AppText from "@components/AppText";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 12,
      }}
    >
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
        <AppText>
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
          <AppButton title="Entrar" />
          <AppButton title="Registrar" outline />
        </View>
      </View>
    </View>
  );
}
