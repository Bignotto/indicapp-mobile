import AppAvatar from "@components/AppComponents/AppAvatar";
import AppButton from "@components/AppComponents/AppButton";
import AppInput from "@components/AppComponents/AppInput";
import AppSpacer from "@components/AppComponents/AppSpacer";
import AppText from "@components/AppComponents/AppText";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useAuth } from "@hooks/AuthContext";
import api from "@services/api";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

export default function UserProfile() {
  const { session, signOut, user } = useAuth();
  const theme = useTheme();
  const router = useRouter();

  const [name, setName] = useState(user?.name);

  async function handleUpdateProfile() {
    //NEXT: implement update user info in auth context
    const response = await api
      .put(`/users/${user?.id}`, {
        name: name?.trim(),
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });

    if (response.status === 200) {
      router.replace("/");
    }
  }

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
        </View>
        <View
          style={{
            marginTop: 28,
            paddingHorizontal: 56,
          }}
        >
          <AppInput
            label="Nome"
            value={name}
            placeholder="Seu nome"
            onChangeText={setName}
          />
          <AppInput
            label="E-Mail"
            value={user!.email}
            placeholder="email@server.com"
            editable={false}
          />
          <AppInput label="Cidade" value={user?.city} placeholder="Cidade" />
        </View>
        <View
          style={{
            marginTop: 16,
            paddingHorizontal: 16,
          }}
        >
          <AppButton
            title="Salvar"
            variant="solid"
            onPress={handleUpdateProfile}
          />
        </View>

        <View
          style={{
            marginTop: 16,
            marginHorizontal: 16,
            borderRadius: 16,
            backgroundColor: theme.colors.shape,
          }}
        >
          <View
            style={{
              marginTop: 16,
              paddingHorizontal: 16,
            }}
          >
            <AppText>
              Para que você possa anunciar seus serviços é preciso que você
              confirme o seu número de telefone.
            </AppText>
          </View>
          <View
            style={{
              marginTop: 16,
              paddingHorizontal: 56,
            }}
          >
            <AppInput
              label="Telefone"
              value={user?.phone}
              placeholder="(XX) 9XXXX-XXXX"
              color={theme.colors.shape_light}
            />
          </View>
          <AppButton title="Confirmar telefone" variant="solid" outline />
        </View>
        <View
          style={{
            marginTop: 28,
            paddingHorizontal: 16,
            gap: 16,
          }}
        >
          <AppButton title="Alterar senha" variant="solid" outline />
          <AppButton
            title="Sair"
            variant="negative"
            outline
            onPress={signOut}
          />

          <AppSpacer verticalSpace="lg" />
        </View>
      </ScrollView>
    </>
  );
}
