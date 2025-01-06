import AppButton from "@components/AppComponents/AppButton";
import { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "./styles";

export default function TypesReel() {
  let types = [
    "Marcenaria",
    "Elétrica",
    "Diarista",
    "Hidráulica",
    "Pintura",
    "Jardinagem",
    "Pedreiro",
    "Serralheria",
    "Gesso",
    "Ar Condicionado",
    "Dedetização",
    "Chaveiro",
    "Vidraceiro",
    "Decoração",
  ];

  useEffect(() => {
    console.log(types);
  }, []);

  return (
    <Container>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 16,
          gap: 16,
        }}
      >
        {types.map((type) => {
          return <AppButton key={type} title={type} outline={true} size="sm" />;
        })}
      </ScrollView>
    </Container>
  );
}
