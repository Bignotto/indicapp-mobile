import { LogoSizes } from "@components/tokens";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useTheme } from "styled-components/native";
import { Container, IconsContainer, LogoText } from "./styles";

interface AppLogoProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export default function AppLogo({ size = "md", color }: AppLogoProps) {
  const theme = useTheme();
  return (
    <Container
      style={{
        flexDirection: size === "lg" ? "column" : "row",
      }}
    >
      <IconsContainer>
        <FontAwesome5
          name="tools"
          size={LogoSizes[size]}
          color={color ?? theme.colors.text}
        />
        <FontAwesome5
          name="check-circle"
          size={LogoSizes[size]}
          color={color ?? theme.colors.text}
        />
      </IconsContainer>
      <LogoText size={size} color={color ?? theme.colors.text_gray}>
        IndicApp
      </LogoText>
    </Container>
  );
}
