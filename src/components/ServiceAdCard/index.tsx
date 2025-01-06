import AppSpacer from "@components/AppComponents/AppSpacer";
import AppStarsScore from "@components/AppComponents/AppStarsScore";
import AppText from "@components/AppComponents/AppText";
import { RectButtonProps } from "react-native-gesture-handler";
import { ButtonContainer, Container, TextContainer } from "./styles";

type ServiceAdCardProps = RectButtonProps & {
  image?: string;
  providerId: string;
  name: string;
  description: string;
  score: number;
  reviewCount: number;
  city: string;
};

export default function ServiceAdCard({
  image = "https://iwfgwdpywrhvaxxwrdyp.supabase.co/storage/v1/object/public/profiles/fallback-profile-image_1.jpg",
  providerId,
  name,
  description,
  score,
  reviewCount,
  city,
  ...rest
}: ServiceAdCardProps) {
  return (
    <ButtonContainer {...rest}>
      <Container>
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
