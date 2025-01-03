import AppStarsScore from "@components/AppStarsScore";
import AppText from "@components/AppText";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";

interface ProviderProps {
  name: string;
  description: string;
  image: string;
  score: number;
  reviewCount: number;
  city: string;
}

export default function Provider() {
  const { providerId } = useLocalSearchParams();
  const [provider, setProvider] = useState<ProviderProps>({
    name: "",
    description: "",
    image: "",
    score: 0,
    reviewCount: 0,
    city: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProvider({
      name: "John Doe",
      description: "Jardineiro",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      score: 45,
      reviewCount: 10,
      city: "Rio Claro",
    });
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <AppText>Loading...</AppText>;
  }

  return (
    <View>
      <AppText>{provider.name}</AppText>
      <Image
        source={{
          uri: provider.image,
        }}
        style={{
          width: "80%",
          height: 350,
          alignSelf: "center",
          resizeMode: "cover",
          borderRadius: 14,
        }}
      />
      <AppText>{provider.description}</AppText>
      <AppStarsScore
        reviewCount={provider.reviewCount}
        score={provider.score}
        format="numbers"
      />
    </View>
  );
}
