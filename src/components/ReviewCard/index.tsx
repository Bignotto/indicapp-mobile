import AppAvatar from "@components/AppAvatar";
import AppSpacer from "@components/AppSpacer";
import AppStarsScore from "@components/AppStarsScore";
import AppText from "@components/AppText";
import truncatePreserveWord from "@utils/helpers/truncateText";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import {
  ButtonContainer,
  Container,
  ReviewerContainer,
  TextContainer,
} from "./styles";

type ReviewCardProps = RectButtonProps & {
  image?: string;
  reviewerId: string;
  name: string;
  title: string;
  text: string;
  score: number;
  reviewCount: number;
};

export default function ReviewCard({
  image = "https://iwfgwdpywrhvaxxwrdyp.supabase.co/storage/v1/object/public/profiles/fallback-profile-image_1.jpg",
  reviewerId,
  name,
  title,
  text,
  score,
  reviewCount,
  ...rest
}: ReviewCardProps) {
  const theme = useTheme();
  return (
    <ButtonContainer {...rest}>
      <Container>
        <TextContainer>
          <AppText bold size="md">
            {truncatePreserveWord(title, 25)}
          </AppText>
          <AppSpacer verticalSpace="xsm" />
          <AppStarsScore
            score={score}
            reviewCount={reviewCount}
            size="sm"
            format="stars"
          />
          <AppSpacer verticalSpace="xsm" />
          <AppText size="sm">{truncatePreserveWord(text, 105)}</AppText>
        </TextContainer>
        <ReviewerContainer>
          <AppAvatar imagePath={image} size={28} />
          <AppText size="sm" color={theme.colors.text} bold>
            {name}{" "}
          </AppText>
        </ReviewerContainer>
      </Container>
    </ButtonContainer>
  );
}
