import AppText from "@components/AppText";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInputProps, View } from "react-native";
import { useTheme } from "styled-components";
import { ButtonContainer, Container, InputComponent, Wrapper } from "./styles";

interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string | undefined;
}

export default function AppPasswordInput({
  label,
  error,
  ...rest
}: AppInputProps) {
  const theme = useTheme();

  const [PasswordVisible, setPasswordVisible] = useState(false);

  return (
    <Container>
      {label && (
        <View style={{ marginBottom: 4 }}>
          <AppText>{label}:</AppText>
        </View>
      )}
      <Wrapper error={error}>
        <InputComponent
          secureTextEntry={!PasswordVisible}
          keyboardType="ascii-capable"
          autoCapitalize="none"
          {...rest}
        />
        <ButtonContainer onPress={() => setPasswordVisible(!PasswordVisible)}>
          {PasswordVisible ? (
            <Ionicons
              name="eye-off-outline"
              size={24}
              color={theme.colors.text_gray}
            />
          ) : (
            <Ionicons
              name="eye-outline"
              size={24}
              color={theme.colors.text_gray}
            />
          )}
        </ButtonContainer>
      </Wrapper>
      {error ? (
        <AppText size="xsm" color={theme.colors.negative}>
          {error}
        </AppText>
      ) : (
        <AppText size="xsm"> </AppText>
      )}
    </Container>
  );
}
