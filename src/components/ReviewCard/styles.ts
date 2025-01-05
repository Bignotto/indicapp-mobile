import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  padding: 16px;
`

export const ReviewerImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 16px;
`

export const TextContainer = styled.View`
margin-bottom: 16px;

`
export const ReviewerContainer = styled.View`
flex-direction: row;
gap: 8px;
align-items: center;
`

export const ButtonContainer = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  width: 350px;
`