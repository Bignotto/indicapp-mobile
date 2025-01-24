import AppAvatar from "@components/AppComponents/AppAvatar";
import AppButton from "@components/AppComponents/AppButton";
import AppInput from "@components/AppComponents/AppInput";
import AppSpacer from "@components/AppComponents/AppSpacer";
import AppText from "@components/AppComponents/AppText";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useAuth } from "@hooks/AuthContext";
import keepOnlyNumbers from "@utils/helpers/keepOnlyNumbers";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

export default function UserProfile() {
  const { session, signOut, user, updateUserName } = useAuth();
  const theme = useTheme();
  const router = useRouter();

  const [name, setName] = useState(user?.name);
  const [phone, setPhone] = useState(user?.phone);
  const [phoneError, setPhoneError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleUpdateProfile() {
    if (!name) return;
    if (name === user?.name) return;
    if (name && name?.length < 3) return;
    try {
      await updateUserName(name);
      router.replace("/");
    } catch (error) {
      console.log({ error });
    }
  }

  async function handlePhoneVerify() {
    //NEXT: validate phone number string before navigate to verification string
    //NEXT: create new hook to handle phone verification?
    //NEXT: don't implement supabase in here!!

    if (!phone) {
      setPhoneError("Telefone não pode estar em branco.");
      return;
    }

    const trimmedPhone = keepOnlyNumbers(phone);

    if (trimmedPhone.length < 11) {
      setPhoneError("Telefone inválido");
      return;
    }
    router.navigate("/(app)/(tabs)/(userProfile)/phoneVerification");
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
              value={phone}
              onChangeText={setPhone}
              placeholder="(XX) 9XXXX-XXXX"
              color={theme.colors.shape_light}
              keyboardType="phone-pad"
              error={phoneError}
            />
            <AppSpacer verticalSpace="sm" />
          </View>
          <AppButton
            title="Confirmar telefone"
            variant="solid"
            outline
            onPress={handlePhoneVerify}
          />
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
