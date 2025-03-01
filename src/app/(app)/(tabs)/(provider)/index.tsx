import AppButton from "@components/AppComponents/AppButton";
import AppContainer from "@components/AppComponents/AppContainer";
import AppSpacer from "@components/AppComponents/AppSpacer";
import AppStarsScore from "@components/AppComponents/AppStarsScore";
import IconKpi from "@components/IconKpi";
import { ServicesList } from "@components/ScreenComponents/ProviderScreen/ServicesList";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useAuth } from "@hooks/AuthContext";
import { Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

export default function Provider() {
  const theme = useTheme();
  const { user } = useAuth();
  return (
    <ScrollView>
      <AppSpacer verticalSpace="lg" />
      <Image
        source={{
          uri: user?.avatar_url,
        }}
        style={{
          width: 250,
          height: 250,
          alignSelf: "center",
          resizeMode: "cover",
          borderRadius: 16,
        }}
      />
      <AppContainer>
        <AppStarsScore
          format="numbers"
          scoreTotal={48}
          reviewCount={10}
          size="lg"
        />
        <View
          style={{
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 32,
            paddingHorizontal: 32,
          }}
        >
          <IconKpi
            value={64}
            icon={
              <FontAwesome5
                name="users"
                size={32}
                color={theme.colors.text_dark}
              />
            }
            label="Clientes"
          />
          <IconKpi
            value={28}
            icon={
              <AntDesign
                name="like1"
                size={32}
                color={theme.colors.text_dark}
              />
            }
            label="Indicações"
          />
        </View>
      </AppContainer>
      <View
        style={{
          paddingHorizontal: 64,
          marginTop: 32,
        }}
      >
        <AppButton title="Novo serviço" size="sm" variant="solid" outline />
      </View>
      <ServicesList />
    </ScrollView>
  );
}
