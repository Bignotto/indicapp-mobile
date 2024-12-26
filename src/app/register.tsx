import AppButton from "@components/AppButton";
import AppContainer from "@components/AppContainer";
import AppInput from "@components/AppInput";
import AppLogo from "@components/AppLogo";
import AppPasswordInput from "@components/AppPasswordInput";
import AppSpacer from "@components/AppSpacer";
import AppText from "@components/AppText";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@hooks/AuthContext";
import { EmailInUseError } from "@utils/errors/EmailInUse";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Alert, View } from "react-native";
import * as yup from "yup";

const formValidation = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Senhas não conferem")
    .required(),
});

export default function Register() {
  const { signUp } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidation),
  });

  async function onSubmit({ email, password, passwordConfirmation }: any) {
    try {
      await signUp(email, password);
      router.replace("/");
    } catch (error) {
      if (error instanceof EmailInUseError) {
        Alert.alert("Erro ao cadastrar usuário", "E-mail já cadastrado.");
        return;
      }
    }
  }

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
        Crie sua conta
      </AppText>
      <AppContainer padding={8}>
        <AppText style={{ textAlign: "center" }}>
          Crie sua conta para se conectar com os melhores prestadores de serviço
          da região!
        </AppText>
      </AppContainer>
      <View style={{ gap: 8, marginVertical: 32, width: "80%" }}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <AppInput
              placeholder="email@server.com"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <AppPasswordInput
              placeholder="senha"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="passwordConfirmation"
          render={({ field: { onChange, onBlur, value } }) => (
            <AppPasswordInput
              placeholder="confirme sua senha"
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={errors.passwordConfirmation?.message}
            />
          )}
        />
        <AppButton
          title="Registrar"
          variant="solid"
          onPress={() => handleSubmit(onSubmit)()}
        />
        <AppText
          size="sm"
          bold
          style={{ textAlign: "center", marginVertical: 16 }}
        >
          Já tenho uma conta {""}
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
        />
        <AppButton
          leftIcon={<FontAwesome5 name="apple" size={24} color="black" />}
          variant="solid"
          outline
        />
      </View>
    </AppContainer>
  );
}
