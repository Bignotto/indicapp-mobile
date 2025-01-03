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
  name: string;
  description: string;
  score: number;
  reviewCount: number;
  city: string;
};

export default function ProviderCard({
  image = "https://iwfgwdpywrhvaxxwrdyp.supabase.co/storage/v1/object/public/profiles/fallback-profile-image_1.jpg",
  providerId,
  name,
  description,
  score,
  reviewCount,
  city,
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
            {name}
          </AppText>
          <AppText size="sm">{description}</AppText>
          <AppSpacer verticalSpace="lg" />
          <AppStarsScore
            score={score}
            reviewCount={reviewCount}
            size="sm"
            format="numbers"
          />
        </TextContainer>
      </Container>
    </ButtonContainer>
  );
}
