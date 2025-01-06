import AppText from "@components/AppComponents/AppText";
import ReviewCard from "@components/ReviewCard";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import reviews from "@utils/fakeData/reviews";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

export default function ReviewsList() {
  const theme = useTheme();

  return (
    <View
      style={{
        marginTop: 24,
        width: "100%",
        paddingHorizontal: 16,
      }}
    >
      <AppText bold size="lg">
        Avaliações
      </AppText>
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 16,
        }}
        style={{
          marginTop: 8,
        }}
      >
        {reviews.slice(0, 3).map((review) => (
          <ReviewCard
            key={review.id}
            image={review.reviewer.image}
            reviewerId={review.reviewer.id.toString()}
            name={review.reviewer.name}
            title={review.title}
            text={review.text}
            score={review.score}
            reviewCount={1}
          />
        ))}
      </ScrollView>
      <View style={{ marginTop: 8 }}>
        <AppText align="right" size="sm" color={theme.colors.text_gray}>
          Ver todos{" "}
          <FontAwesome5
            name="arrow-right"
            size={16}
            color={theme.colors.text_gray}
          />
        </AppText>
      </View>
    </View>
  );
}
