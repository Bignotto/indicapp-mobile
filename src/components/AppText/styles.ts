import { ReactNode } from "react";
import { Text, TextProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TextSizes } from "../tokens";


export interface AppTextStyleProps extends TextProps {
  children: ReactNode;
  bold?: boolean;
  size?: "xlg" | "lg" | "md" | "sm" | "xsm";
  color?: string;
}

export const TextContainer = styled(Text) <AppTextStyleProps>`
  font-family: ${({ theme, bold }) =>
    bold ? theme.fonts.bold : theme.fonts.regular};
  font-size: ${({ theme, size = "md" }) => RFValue(TextSizes[size])}px;
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
`;