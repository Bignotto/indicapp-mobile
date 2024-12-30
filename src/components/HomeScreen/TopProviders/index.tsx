import AppButton from "@components/AppButton";
import AppText from "@components/AppText";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function TopProviders() {
  return (
    <>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}
      >
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
            return (
              <AppButton
                key={i}
                title={`Provider ${i}`}
                outline={true}
                size="sm"
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}
