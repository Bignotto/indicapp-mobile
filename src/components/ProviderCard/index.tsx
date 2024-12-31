import AppSpacer from "@components/AppSpacer";
import AppStarsScore from "@components/AppStarsScore";
import AppText from "@components/AppText";
import { Container, ProviderImage, TextContainer } from "./styles";

export default function ProviderCard() {
  return (
    <Container>
      <ProviderImage
        source={{
          uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
      />
      <TextContainer>
        <AppText bold size="md">
          Dunha da Silva
        </AppText>
        <AppText size="sm">Jardineiro</AppText>
        <AppSpacer verticalSpace="lg" />
        <AppStarsScore score={45} reviewCount={10} size="sm" format="numbers" />
      </TextContainer>
    </Container>
  );
}
