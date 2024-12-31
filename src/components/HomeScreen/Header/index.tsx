import AppAvatar from "@components/AppAvatar";
import AppSpacer from "@components/AppSpacer";
import AppText from "@components/AppText";
import SearchInput from "@components/SearchInput";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useAuth } from "@hooks/AuthContext";
import { useState } from "react";
import { useTheme } from "styled-components";
import { Container, TextContainer, TopContainer } from "./styles";

export default function Header() {
  const { session, user } = useAuth();
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(false);

  async function doSearch(searchedText: string) {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  }

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
      <AppSpacer verticalSpace="lg" />
      <AppSpacer verticalSpace="lg" />
      <SearchInput onSearch={doSearch} isLoading={isLoading} />
    </Container>
  );
}
