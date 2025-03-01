import AppText from "@components/AppComponents/AppText";
import { View } from "react-native";
import { useTheme } from "styled-components";

interface IconKpiProps {
  value: number;
  icon: React.ReactNode;
  label: string;
}

export default function IconKpi({ value, icon, label }: IconKpiProps) {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {icon}
      <AppText size="lg" bold>
        {value}
      </AppText>
      <AppText
        size="xsm"
        color={theme.colors.text_gray}
        style={{
          marginTop: -4,
        }}
      >
        {label}
      </AppText>
    </View>
  );
}
