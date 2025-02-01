import AppAvatar from "@components/AppComponents/AppAvatar";
import AppButton from "@components/AppComponents/AppButton";
import AppInput from "@components/AppComponents/AppInput";
import AppSpacer from "@components/AppComponents/AppSpacer";
import AppText from "@components/AppComponents/AppText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useAuth } from "@hooks/AuthContext";
import { usePhone } from "@hooks/PhoneHook";
import { useUpload } from "@hooks/UploadContext";
import keepOnlyNumbers from "@utils/helpers/keepOnlyNumbers";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

export default function UserProfile() {
  const { signOut, user, updateUserName, updateUserAvatar } = useAuth();
  const { verifyPhoneNumber } = usePhone();
  const { uploadAvatarImage } = useUpload();
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
    if (phone === user!.phone) return;

    if (!phone) {
      setPhoneError("Telefone não pode estar em branco.");
      return;
    }

    const trimmedPhone = keepOnlyNumbers(phone);

    if (trimmedPhone.length !== 11) {
      setPhoneError("Telefone inválido");
      return;
    }

    try {
      setIsLoading(true);
      await verifyPhoneNumber(trimmedPhone);

      router.navigate(`/(app)/(tabs)/(userProfile)/${trimmedPhone}`);
    } catch (error) {
      console.log({ error });
      return;
    } finally {
      setIsLoading(false);
    }
  }

  async function handleImageSelect() {
    const selectedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      aspect: [1, 1],
      quality: 1,
    });

    console.log({ selectedImage });
    if (selectedImage.canceled) return;

    try {
      const response = await uploadAvatarImage({
        name: `${user?.id}`,
        path: selectedImage.assets[0].uri,
      });

      await updateUserAvatar(
        `https://iwfgwdpywrhvaxxwrdyp.supabase.co/storage/v1/object/public/avatars//${user?.id}.jpeg`
      );
    } catch (error) {
      console.log({ error });
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
          <RectButton
            onPress={handleImageSelect}
            style={{
              position: "absolute",
              padding: 8,
              bottom: 0,
              right: 130,
              backgroundColor: theme.colors.shape_light,
              borderRadius: 24,
            }}
          >
            <FontAwesome
              name="pencil-square-o"
              size={24}
              color={theme.colors.text_dark}
            />
          </RectButton>
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
            isLoading={isLoading}
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
