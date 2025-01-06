import { rgba } from "polished";
import { ReactNode } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import styled from "styled-components/native";

interface ButtonProps extends RectButtonProps {
  color: string;
  children: ReactNode;
  size?: "lg" | "md" | "sm";
  outline: boolean;
  enabled?: boolean;
}

export const ButtonContainer = styled(RectButton) <ButtonProps>`

  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: ${({ theme, size = "md" }) =>
    size === "lg" ? 64 : size === "md" ? 54 : 46}px;

  
border-radius: 14px;
  border: 1px solid
    ${({ theme, outline, color, enabled }) => outline ? rgba(color, 0.2) : !enabled ? theme.colors.text_disabled : color === theme.colors.white ? theme.colors.text_disabled : color};
  padding: 2px; 
  background-color: ${({ theme, outline, color, enabled }) =>
    outline ? rgba(color, 0.2) : enabled ? color : theme.colors.text_disabled};
`;