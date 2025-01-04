import AppSpacer from "@components/AppSpacer";
import AppStarsScore from "@components/AppStarsScore";
import AppText from "@components/AppText";
import truncatePreserveWord from "@utils/helpers/truncateText";
import { RectButtonProps } from "react-native-gesture-handler";
import {
  ButtonContainer,
  Container,
  ReviewerImage,
  TextContainer,
} from "./styles";

type ReviewCardProps = RectButtonProps & {
  image?: string;
  reviewerId: string;
  name: string;
  title: string;
  score: number;
  reviewCount: number;
};

export default function ReviewCard({
  image = "https://iwfgwdpywrhvaxxwrdyp.supabase.co/storage/v1/object/public/profiles/fallback-profile-image_1.jpg",
  reviewerId,
  name,
  title,
  score,
  reviewCount,
  ...rest
}: ReviewCardProps) {
  return (
    <ButtonContainer {...rest}>
      <Container>
        <ReviewerImage
          source={{
            uri: image,
          }}
        />
        <TextContainer>
          <AppText bold size="md">
            {name}
          </AppText>
          <AppText size="sm">{truncatePreserveWord(title, 25)}</AppText>
          <AppSpacer verticalSpace="lg" />
          <AppStarsScore
            score={score}
            reviewCount={reviewCount}
            size="sm"
            format="stars"
          />
        </TextContainer>
      </Container>
    </ButtonContainer>
  );
}
