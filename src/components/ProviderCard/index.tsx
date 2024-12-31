import AppSpacer from "@components/AppSpacer";
import AppStarsScore from "@components/AppStarsScore";
import AppText from "@components/AppText";
import {
  ButtonContainer,
  Container,
  ProviderImage,
  TextContainer,
} from "./styles";

interface ProviderCardProps {
  image?: string;
  providerId: string;
}

export default function ProviderCard({
  image = "https://iwfgwdpywrhvaxxwrdyp.supabase.co/storage/v1/object/public/profiles/fallback-profile-image_1.jpg",
  providerId,
}: ProviderCardProps) {
  return (
    <ButtonContainer
      onPress={() => {
        console.log(`should navigate to provider profile ${providerId}`);
      }}
    >
      <Container>
        <ProviderImage
          source={{
            uri: image,
          }}
        />
        <TextContainer>
          <AppText bold size="md">
            Dunha da Silva
          </AppText>
          <AppText size="sm">Jardineiro</AppText>
          <AppSpacer verticalSpace="lg" />
          <AppStarsScore
            score={45}
            reviewCount={10}
            size="sm"
            format="numbers"
          />
        </TextContainer>
      </Container>
    </ButtonContainer>
  );
}
