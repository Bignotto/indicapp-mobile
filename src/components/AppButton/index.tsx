import { ReactNode } from "react";
import { ActivityIndicator, View } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import AppText from "../AppText";
import { ButtonContainer } from "./styles";

type AppButtonProps = RectButtonProps & {
  title?: string;
  variant?: "positive" | "solid" | "negative" | "transparent";
  isLoading?: boolean;
  size?: "lg" | "md" | "sm";
  outline?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export default function AppButton({
  title,
  variant = "solid",
  isLoading = false,
  size = "md",
  enabled = true,
  outline = false,
  leftIcon,
  rightIcon,
  ...rest
}: AppButtonProps) {
  const theme = useTheme();

  // const buttonColor =
  //   variant === "positive"
  //     ? theme.colors.positive
  //     : variant === "negative"
  //     ? theme.colors.negative
  //     : theme.colors.primary;

  let buttonColor = theme.colors.primary;
  switch (variant) {
    case "positive":
      buttonColor = theme.colors.positive;
      break;

    case "negative":
      buttonColor = theme.colors.negative;
      break;
    case "transparent":
      buttonColor = theme.colors.white;
      break;

    default:
      buttonColor = theme.colors.primary;
      break;
  }

  const textColor = outline
    ? buttonColor
    : variant === "transparent"
    ? theme.colors.text
    : theme.colors.white;

  return (
    // <ButtonWrapper outline={outline} color={buttonColor} enabled={enabled}>
    <ButtonContainer
      enabled={enabled}
      color={buttonColor}
      outline={outline}
      {...rest}
    >
      {leftIcon && <View style={{ marginLeft: 8 }}>{leftIcon}</View>}
      {title && (
        <AppText
          bold
          color={textColor}
          size={size}
          style={{
            marginLeft: leftIcon ? 0 : 8,
            marginRight: rightIcon ? 0 : 8,
            marginTop: leftIcon || rightIcon ? 2 : 0,
          }}
        >
          {isLoading ? <ActivityIndicator /> : title}
        </AppText>
      )}
      {rightIcon && <View style={{ marginRight: 8 }}>{rightIcon}</View>}
    </ButtonContainer>
    // </ButtonWrapper>
  );
}
