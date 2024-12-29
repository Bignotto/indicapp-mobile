import AppAvatar from "@components/AppAvatar";
import AppText from "@components/AppText";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useAuth } from "@hooks/AuthContext";
import { useTheme } from "styled-components";
import { Container, TextContainer, TopContainer } from "./styles";

export default function Header() {
  const { session, user } = useAuth();
  const theme = useTheme();

  return (
    <Container>
      <TopContainer>
        <AppAvatar size={54} imagePath={`${user?.avatar_url}`} />
        <TextContainer>
          <AppText color={theme.colors.white}>Olá 👋</AppText>
          <AppText color={theme.colors.white} size="lg" bold>
            {user?.name}
          </AppText>
        </TextContainer>
        <FontAwesome5 name="bell" size={24} color={theme.colors.white} />
      </TopContainer>
    </Container>
  );
}
