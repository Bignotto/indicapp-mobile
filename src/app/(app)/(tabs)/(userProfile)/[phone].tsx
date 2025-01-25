import AppButton from "@components/AppComponents/AppButton";
import AppContainer from "@components/AppComponents/AppContainer";
import AppInput from "@components/AppComponents/AppInput";
import AppSpacer from "@components/AppComponents/AppSpacer";
import AppText from "@components/AppComponents/AppText";
import { useAuth } from "@hooks/AuthContext";
import { usePhone } from "@hooks/PhoneHook";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";

export default function PhoneVerification() {
  const { phone } = useLocalSearchParams();
  const router = useRouter();

  const theme = useTheme();

  const { updateUserPhone } = useAuth();
  const { verifyToken } = usePhone();

  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleVerifyToken() {
    if (!token) {
      setError("Código não pode estar em branco");
      return;
    }
    if (token.length !== 6) {
      setError("Código inválido");
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      await verifyToken(phone.toString(), token);
      await updateUserPhone(phone.toString());
      router.replace("/");
    } catch (error) {
      setError("Código inválido");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AppContainer>
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
            marginTop: 32,
            marginBottom: 32,
            paddingHorizontal: 16,
          }}
        >
          <AppText>
            Enviamos uma mensagem SMS para o número {phone} com um código de 6
            dígitos. Digite o código abaixo para confirmar seu número de
            telefone.
          </AppText>
        </View>
        <View
          style={{
            marginTop: 32,
            marginBottom: 32,
            paddingHorizontal: 56,
          }}
        >
          <AppInput
            label="Código de verificação"
            value={token}
            onChangeText={setToken}
            color={theme.colors.shape_light}
            keyboardType="phone-pad"
            error={error}
          />
          <AppSpacer verticalSpace="sm" />
        </View>
        <AppButton
          title="Confirmar telefone"
          variant="solid"
          outline
          isLoading={isLoading}
          onPress={handleVerifyToken}
        />
      </View>
    </AppContainer>
  );
}
