import AppText from "@components/AppComponents/AppText";
import ProviderCard from "@components/ProviderCard";
import Entypo from "@expo/vector-icons/Entypo";
import users from "@utils/fakeData/users";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Container, TextContainer } from "./styles";

export default function TopProviders() {
  const theme = useTheme();

  const router = useRouter();

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
          {users.map((user) => {
            return (
              <ProviderCard
                onPress={() =>
                  router.push(`/(app)/(tabs)/(main)/provider/${user.id}`)
                }
                key={user.id}
                providerId={user.id.toString()}
                // image="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                image={user.image}
                name={user.name}
                description={user.profession}
                score={user.score * user.reviewCount}
                reviewCount={user.reviewCount}
                city="Rio Claro"
              />
            );
          })}
        </ScrollView>
      </Container>
    </>
  );
}
