import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  padding: 16px;
  gap: 16px;

`

export const ProviderImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 16px;
`

export const TextContainer = styled.View`
`

export const ButtonContainer = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  margin-bottom: 16px;
` 