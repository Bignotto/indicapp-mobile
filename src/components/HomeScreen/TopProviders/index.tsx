import AppText from "@components/AppText";
import ProviderCard from "@components/ProviderCard";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
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
            return (
              <ProviderCard
                key={i}
                providerId={i.toString()}
                image="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                onPress={() => router.push("/(app)/(tabs)/(main)/provider")}
              />
            );
          })}
        </ScrollView>
      </Container>
    </>
  );
}
