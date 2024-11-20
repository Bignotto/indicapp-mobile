import { View, ViewProps } from "react-native";
import styled from "styled-components/native";

export interface AppContainerProps extends ViewProps {
  children: React.ReactNode;
  direction?: "row" | "column";
  justify?: "space-between" | "space-around" | "space-evenly";
}
export const Container = styled(View) <AppContainerProps>`
  flex-direction: ${({ direction = "column" }) => direction};
  justify-content: ${({ justify = "space-evenly" }) => justify};
  gap: 8px;
`;