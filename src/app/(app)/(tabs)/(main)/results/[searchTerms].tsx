import AppText from "@components/AppComponents/AppText";
import SearchInput from "@components/SearchInput";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

export default function SearchResults() {
  const { searchTerms } = useLocalSearchParams();
  const [isloading, setIsLoading] = useState(false);
  const theme = useTheme();
  const router = useRouter();

  const [searchInput, setSearchInput] = useState(searchTerms);

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
        height: 200,
        paddingHorizontal: 16,
        paddingTop: 24,
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
      <AppText>Resultados para: {searchInput}</AppText>
      <SearchInput
        isLoading={isloading}
        onSearch={doSearch}
        value={searchInput.toString()}
      />
    </View>
    //NEXT: list results
    //https://www.figma.com/community/file/1149280921776146385/aid-online-doctor-appointment-app
    //https://dribbble.com/shots/13875352-Meditalk-Doctor-Appointment-Mobile-App/attachments/5483088?mode=media
    //https://www.behance.net/gallery/183679965/Find-Your-Doctor-Healthcare-Application
  );
}
