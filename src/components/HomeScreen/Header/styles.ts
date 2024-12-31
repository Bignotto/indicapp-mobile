import styled from "styled-components/native";

export const Container = styled.View`
  height: 220px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape_dark};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
`
export const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
`
export const TextContainer = styled.View`
  flex-direction: column;
  flex: 1;
  padding-left: 8px;
`
