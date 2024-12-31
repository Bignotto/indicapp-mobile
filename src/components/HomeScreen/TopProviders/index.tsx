import AppText from "@components/AppText";
import ProviderCard from "@components/ProviderCard";
import Entypo from "@expo/vector-icons/Entypo";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Container, TextContainer } from "./styles";

export default function TopProviders() {
  const theme = useTheme();
  return (
    <>
      <Container>
        <TextContainer>
          <AppText size="md" bold style={{ width: "50%" }}>
            Top Prestadores
          </AppText>
          <AppText
            size="sm"
            color={theme.colors.text_gray}
            style={{ textAlign: "right" }}
          >
            <Entypo name="location-pin" size={16} color="black" /> Rio Claro
          </AppText>
        </TextContainer>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 16,
            gap: 16,
          }}
          style={{
            flex: 1,
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => {
            return <ProviderCard key={i} />;
          })}
        </ScrollView>
      </Container>
    </>
  );
}
