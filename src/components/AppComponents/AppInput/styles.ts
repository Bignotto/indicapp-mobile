import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface WrapperProps {
  error?: string;
  color?: string;
}

export const Container = styled.View`
width: 100%;
`;

export const Wrapper = styled.View<WrapperProps>`
  border-radius: 14px;
  border-color: ${({ theme, error }) =>
    error ? theme.colors.negative : theme.colors.border};
  border-width: 1px;
  background-color: ${({ theme, color }) => color};
`;

export const InputComponent = styled.TextInput`
padding: 12px;

font-family: ${({ theme }) => theme.fonts.regular};
font-size: ${RFValue(16)}px;

`;
