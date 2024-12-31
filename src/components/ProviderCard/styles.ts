import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
`

export const ProviderImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 16px;
`

export const TextContainer = styled.View`
  margin-left: 16px;
  padding-top: 4px;
`