import AppSpacer from "@components/AppComponents/AppSpacer";
import AppText from "@components/AppComponents/AppText";
import ProviderCard from "@components/ProviderCard";
import SearchInput from "@components/SearchInput";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import users from "@utils/fakeData/users";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

export default function SearchResults() {
  const { searchTerms } = useLocalSearchParams();
  const [isloading, setIsLoading] = useState(false);
  const theme = useTheme();
  const router = useRouter();

  const [searchInput, setSearchInput] = useState(
    Array.isArray(searchTerms) ? searchTerms[0] : searchTerms
  );

  //TODO: do search
  async function doSearch(searchedText: string) {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSearchInput(searchedText);
    setIsLoading(false);
  }

  return (
    <View
      style={{
        flex: 1,
        height: 200,
        paddingHorizontal: 16,
        paddingTop: 24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginBottom: 28,
        }}
      >
        <RectButton
          onPress={() => router.back()}
          style={{
            width: 32,
            borderRadius: 16,
            paddingLeft: 6,
          }}
        >
          <FontAwesome5
            name="angle-left"
            size={32}
            color={theme.colors.text_dark}
          />
        </RectButton>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <AppText size="lg" align="center" color={theme.colors.text}>
            Rio Claro{" "}
            <Entypo name="location-pin" size={28} color={theme.colors.text} />
          </AppText>
        </View>
        <View style={{ width: 32 }}></View>
      </View>
      <SearchInput
        isLoading={isloading}
        onSearch={doSearch}
        value={searchInput}
      />
      <AppSpacer verticalSpace="lg" />
      <AppText>Resultados para: {searchInput}</AppText>
      <AppSpacer verticalSpace="lg" />
      <ScrollView
        contentContainerStyle={{
          gap: 16,
        }}
      >
        {users.map((user) => (
          <ProviderCard
            key={user.id}
            onPress={() =>
              router.push(`/(app)/(tabs)/(main)/provider/${user.id}`)
            }
            city="Rio Claro"
            name={user.name}
            image={user.image}
            description={"Jardineiro"}
            providerId={`${user.id}`}
            reviewCount={25}
            score={100}
          />
        ))}
      </ScrollView>
    </View>
  );
}
