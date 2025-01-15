import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";
import { ActivityIndicator, Pressable } from "react-native";
import { useTheme } from "styled-components";
import { InputComponent, InputWrapper, SearchInputWrapper } from "./styles";

interface SearchInputProps {
  onSearch: (searchedText: string) => void;
  isLoading: boolean;
  value: string;
}

export default function SearchInput({
  onSearch,
  isLoading,
  value,
}: SearchInputProps) {
  const [searchedText, setSearchedText] = useState(value);

  const theme = useTheme();

  return (
    <SearchInputWrapper>
      <InputWrapper>
        <InputComponent
          value={searchedText}
          onChangeText={(t) => setSearchedText(t)}
          placeholder="Encontrar serviços"
        />
      </InputWrapper>
      <Pressable onPress={() => onSearch(searchedText)}>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.border} />
        ) : (
          <FontAwesome5 name="search" size={20} color={theme.colors.text} />
        )}
      </Pressable>
    </SearchInputWrapper>
  );
}
