import AppText from "@components/AppText";
import ProviderCard from "@components/ProviderCard";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "./styles";

export default function TopProviders() {
  return (
    <>
      <Container>
        <AppText size="md" bold>
          Top Prestadores
        </AppText>
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
