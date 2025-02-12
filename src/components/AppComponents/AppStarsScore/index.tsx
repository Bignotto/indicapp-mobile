import AppText from "@components/AppComponents/AppText";
import { IconSizes } from "@components/tokens";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styled-components";
import { StarsContainer } from "./styles";

interface StarsScoreProps {
  scoreTotal?: number;
  reviewCount?: number;
  size?: "xlg" | "lg" | "md" | "sm" | "xsm";
  format?: "stars" | "numbers";
}

export default function AppStarsScore({
  scoreTotal = 1,
  reviewCount = 1,
  size = "md",
  format = "stars",
}: StarsScoreProps) {
  const theme = useTheme();

  const stars =
    Math.floor(scoreTotal / reviewCount) > 0
      ? Math.floor(scoreTotal / reviewCount)
      : 0;
  const starCount = stars > 0 ? Array(stars).fill(true) : [];

  const halfStar = scoreTotal % reviewCount >= 0.5 ? true : false;

  const emptyStars =
    starCount.length === 0 && !halfStar
      ? Array(5).fill(true)
      : Array(halfStar ? 4 - stars : 5 - stars).fill(true);

  if (format === "stars")
    return (
      <StarsContainer>
        {starCount.map((s, i) => (
          <FontAwesome
            name="star"
            size={IconSizes[size]}
            color="gold"
            key={i}
          />
        ))}
        {halfStar && (
          <FontAwesome
            name="star-half-empty"
            size={IconSizes[size]}
            color="gold"
          />
        )}
        {emptyStars.map((s, i) => (
          <FontAwesome
            name="star-o"
            size={IconSizes[size]}
            color="gold"
            key={i}
          />
        ))}
      </StarsContainer>
    );

  return (
    <StarsContainer
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <FontAwesome name="star" size={IconSizes[size] + 4} color="gold" />
      <AppText bold size={size} color={theme.colors.text_dark}>
        {(scoreTotal / reviewCount).toFixed(1)}
        <AppText size={"xsm"} color={theme.colors.text_gray}>
          {" "}
          / {reviewCount} avaliações{" "}
        </AppText>
      </AppText>
    </StarsContainer>
  );
}
