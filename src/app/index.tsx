import AppContainer from "@components/AppContainer";
import AppInput from "@components/AppInput";
import AppPasswordInput from "@components/AppPasswordInput";
import AppText from "@components/AppText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import AppButton from "../components/AppButton";

export default function Index() {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        padding: 20,
      }}
    >
      <StatusBar style="inverted" />
      <AppText size="xlg" bold>
        This is the AppText with xlg size and inter bold font
      </AppText>
      <AppText size="lg">
        This is the AppText with lg size and inter font
      </AppText>
      <AppText size="md">
        This is the AppText with md size and inter font
      </AppText>
      <AppText size="sm" bold>
        This is the AppText with sm size and inter bold font
      </AppText>
      <AppText size="xsm">
        This is the AppText with xsm size and inter font
      </AppText>
      <AppButton title="Hello World" />
      <AppInput placeholder="seu nome" label="Nome" />
      <AppInput placeholder="exemplo@email.com" />
      <AppPasswordInput placeholder="senha" />
      <AppContainer direction="column" justify="space-between">
        <AppContainer direction="row" justify="space-around">
          <AppButton
            title="Default"
            leftIcon={
              <MaterialIcons name="keyboard-option" size={24} color={"#FFF"} />
            }
          />
          <AppButton
            title="Outlined"
            outline
            rightIcon={
              <MaterialIcons
                name="area-chart"
                size={24}
                color={theme.colors.primary}
              />
            }
          />
        </AppContainer>
        <AppContainer direction="row" justify="space-around">
          <AppButton
            title="Disabled"
            enabled={false}
            leftIcon={<MaterialIcons name="badge" size={24} color={"#FFF"} />}
          />
          <AppButton
            title="Transparent"
            variant="transparent"
            rightIcon={
              <MaterialIcons
                name="bakery-dining"
                size={24}
                color={theme.colors.text}
              />
            }
          />
        </AppContainer>
        <AppContainer direction="row" justify="space-around">
          <AppButton variant="positive" title="Positive" />
          <AppButton title="Negative" variant="negative" />
        </AppContainer>
      </AppContainer>
    </View>
  );
}
