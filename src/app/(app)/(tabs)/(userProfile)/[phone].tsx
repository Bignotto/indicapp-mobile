import AppText from "@components/AppComponents/AppText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function PhoneVerification() {
  const { phone } = useLocalSearchParams();

  return (
    <View>
      <AppText>Phone Verification Screen {phone}</AppText>
    </View>
  );
}
