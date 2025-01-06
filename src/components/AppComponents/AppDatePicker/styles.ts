import { ReactNode } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface WrapperProps {
  error?: string;
}

interface ButtonProps extends RectButtonProps {
  color?: string;
  children: ReactNode;
  size?: "lg" | "md" | "sm";
}

export const Container = styled.View`
`;

export const Wrapper = styled.View<WrapperProps>`
  border-radius: 14px;
  border-color: ${({ theme, error }) =>
    error ? theme.colors.negative : theme.colors.border};
  border-width: 1px;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputComponent = styled.TextInput`
padding-top: 12px;
padding-bottom: 12px;
padding-left: 12px;
font-family: ${({ theme }) => theme.fonts.regular};
font-size: ${RFValue(16)}px;
flex: 1;
`;

export const ButtonContainer = styled(RectButton) <ButtonProps>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 14px;
  margin: 4px;
  padding-left: 8px;
  padding-right: 8px;
`;