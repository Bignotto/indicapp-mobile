import AppText from "@components/AppComponents/AppText";
import { TextInputProps, View } from "react-native";
import { useTheme } from "styled-components";
import { Container, InputComponent, Wrapper } from "./styles";

interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string | undefined;
}

export default function AppInput({ label, error, ...rest }: AppInputProps) {
  const theme = useTheme();

  return (
    <Container>
      {label && (
        <View style={{ marginBottom: 4 }}>
          <AppText>{label}:</AppText>
        </View>
      )}
      <Wrapper error={error}>
        <InputComponent {...rest} />
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
