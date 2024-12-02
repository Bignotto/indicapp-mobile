import { LogoSizes } from "@components/tokens";
import { Text, TextProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface LogoTextProps extends TextProps {
  size: "sm" | "md" | "lg";
  color?: string;
}

export const Container = styled.View`
  align-items: center;
  gap: 8px;
`;

export const IconsContainer = styled.View`
flex-direction: row;
gap: 8px;
align-items: center;
`

export const LogoText = styled(Text) <LogoTextProps>`
font-size: ${({ theme, size }) => RFValue((LogoSizes[size]) * 0.75)}px;
font-family: ${({ theme }) => theme.fonts.black};
color: ${({ theme, color }) => (color ? color : theme.colors.primary)};

`;