import AppAvatar from "@components/AppComponents/AppAvatar";
import AppButton from "@components/AppComponents/AppButton";
import AppText from "@components/AppComponents/AppText";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useAuth } from "@hooks/AuthContext";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

export default function UserProfile() {
  const { session, signOut, user } = useAuth();
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      <View
        style={{
          paddingTop: 16,
          paddingHorizontal: 16,
          height: 150,
          flexDirection: "column",
          backgroundColor: theme.colors.shape_dark,
        }}
      >
        <RectButton
          onPress={() => router.back()}
          style={{
            width: 32,
            borderRadius: 16,
            paddingLeft: 6,
          }}
        >
          <FontAwesome5
            name="angle-left"
            size={32}
            color={theme.colors.white}
          />
        </RectButton>
        <AppText align="center" size="lg" bold color={theme.colors.white}>
          Perfil
        </AppText>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: -40,
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.background,
            padding: 20,
            width: "90%",
            borderRadius: 16,
            flexDirection: "row",
          }}
        >
          <AppAvatar imagePath={user!.avatar_url} size={64} />
          <View>
            <AppText bold size="lg">
              {user!.name}
            </AppText>
            <AppText color={theme.colors.text_gray}>{user!.email}</AppText>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 24,
          paddingHorizontal: 16,
          gap: 16,
        }}
      >
        <AppButton title="Editar perfil" variant="transparent" />
        <AppButton title="Confirmar telefone" variant="transparent" />
        <AppButton title="Alterar senha" variant="transparent" />
        <AppButton title="Sair" variant="solid" onPress={signOut} />
      </View>
    </>
  );
  //NEXT: like this
  //https://www.behance.net/gallery/212277963/Profile-mobile-Screen?tracking_source=search_projects|profile+screen&l=1
}
