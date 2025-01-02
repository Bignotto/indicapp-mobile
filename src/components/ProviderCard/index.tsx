import AppSpacer from "@components/AppSpacer";
import AppStarsScore from "@components/AppStarsScore";
import AppText from "@components/AppText";
import { RectButtonProps } from "react-native-gesture-handler";
import {
  ButtonContainer,
  Container,
  ProviderImage,
  TextContainer,
} from "./styles";

type ProviderCardProps = RectButtonProps & {
  image?: string;
  providerId: string;
};

export default function ProviderCard({
  image = "https://iwfgwdpywrhvaxxwrdyp.supabase.co/storage/v1/object/public/profiles/fallback-profile-image_1.jpg",
  providerId,
  ...rest
}: ProviderCardProps) {
  return (
    <ButtonContainer {...rest}>
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
