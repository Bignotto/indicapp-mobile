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
  color?: string;
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
  color,
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
    case "solid":
      buttonColor = theme.colors.text;
      break;

    default:
      buttonColor = theme.colors.primary;
      break;
  }

  if (color) buttonColor = color;

  const textColor = outline
    ? buttonColor
    : variant === "transparent"
    ? theme.colors.text
    : theme.colors.white;

  return (
    <ButtonContainer
      enabled={enabled}
      color={buttonColor}
      outline={outline}
      {...rest}
    >
      {leftIcon && (
        <View style={{ marginLeft: 8, paddingHorizontal: 20 }}>{leftIcon}</View>
      )}
      {title ? (
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
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            marginLeft: leftIcon ? 0 : 8,
            marginRight: rightIcon ? 0 : 8,
            marginTop: leftIcon || rightIcon ? 2 : 0,
          }}
        >
          {isLoading ? <ActivityIndicator /> : title}
        </View>
      )}
      {rightIcon && (
        <View style={{ marginRight: 8, paddingHorizontal: 20 }}>
          {rightIcon}
        </View>
      )}
    </ButtonContainer>
  );
}
