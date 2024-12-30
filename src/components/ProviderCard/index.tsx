import AppText from "@components/AppText";
import { Image } from "react-native";
import { Container } from "./styles";

export default function ProviderCard() {
  return (
    <Container>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
        }}
      />
      <AppText bold size="md">
        Nome do prestador
      </AppText>
      <AppText size="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </AppText>
    </Container>
  );
}
