import AppText from "@components/AppComponents/AppText";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { TextInputProps, View } from "react-native";
import { useTheme } from "styled-components";
import { ButtonContainer, Container, InputComponent, Wrapper } from "./styles";

interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string | undefined;
  dateValue?: Date;
  onChangeDate(date: Date | undefined): void;
}

export default function AppDatePicker({
  label,
  error,
  dateValue,
  onChangeDate,
  ...rest
}: AppInputProps) {
  const theme = useTheme();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(dateValue);

  function onChangeDateValue(
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) {
    setShowDatePicker(false);
    if (event.type === "dismissed") return;
    if (selectedDate) {
      setDate(selectedDate);
      onChangeDate(selectedDate);
    }
  }

  return (
    <Container>
      {label && (
        <View style={{ marginBottom: 4 }}>
          <AppText>{label}:</AppText>
        </View>
      )}
      <Wrapper error={error}>
        <InputComponent
          keyboardType="ascii-capable"
          autoCapitalize="none"
          editable={false}
          value={date?.toLocaleDateString("pt-BR")}
          {...rest}
        />
        <ButtonContainer onPress={() => setShowDatePicker(true)}>
          <Ionicons
            name="calendar-outline"
            size={24}
            color={theme.colors.text_gray}
          />
        </ButtonContainer>
        {showDatePicker && (
          <DateTimePicker
            value={dateValue ?? new Date()}
            onChange={onChangeDateValue}
          />
        )}
      </Wrapper>
      {error ? (
        <AppText size="xsm" color={theme.colors.negative}>
          {error}
        </AppText>
      ) : (
        <AppText size="xsm"> </AppText>
      )}
    </Container>
  );
}
