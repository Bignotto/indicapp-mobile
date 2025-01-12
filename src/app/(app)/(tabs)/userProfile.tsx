import AppAvatar from "@components/AppComponents/AppAvatar";
import AppButton from "@components/AppComponents/AppButton";
import AppInput from "@components/AppComponents/AppInput";
import AppSpacer from "@components/AppComponents/AppSpacer";
import AppText from "@components/AppComponents/AppText";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useAuth } from "@hooks/AuthContext";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
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
          height: 124,
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
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 32,
            paddingHorizontal: 56,
          }}
        >
          <AppAvatar imagePath={user!.avatar_url ?? undefined} size={172} />
          <AppSpacer verticalSpace="lg" />
          <AppSpacer verticalSpace="lg" />
          <AppSpacer verticalSpace="lg" />
          <AppInput label="Nome" value={user!.name} placeholder="Seu nome" />
          <AppInput
            label="E-Mail"
            value={user!.email}
            placeholder="email@server.com"
            editable={false}
          />
          <AppInput label="Cidade" value={user?.city} placeholder="Cidade" />
          <AppInput
            label="Telefone"
            value={user?.phone}
            placeholder="(XX) 9XXXX-XXXX"
          />
        </View>
        {/* <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: -40,
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.white,
            padding: 20,
            width: "90%",
            borderRadius: 16,
            flexDirection: "row",
          }}
        >
          <AppAvatar imagePath={user!.avatar_url ?? undefined} size={64} />
          <View>
            <AppText bold size="lg">
              {user!.name}
            </AppText>
            <AppText color={theme.colors.text_gray}>{user!.email}</AppText>
          </View>
        </View>
      </View> */}
        <View
          style={{
            marginTop: 24,
            paddingHorizontal: 16,
            gap: 16,
          }}
        >
          <AppButton title="Salvar" variant="solid" />
          <AppButton title="Confirmar telefone" variant="solid" outline />
          <AppButton title="Alterar senha" variant="solid" outline />
          <AppButton
            title="Sair"
            variant="negative"
            outline
            onPress={signOut}
          />
        </View>
        <AppSpacer verticalSpace="lg" />
      </ScrollView>
    </>
  );
  //NEXT: like this
  //https://www.behance.net/gallery/212277963/Profile-mobile-Screen?tracking_source=search_projects|profile+screen&l=1
}
