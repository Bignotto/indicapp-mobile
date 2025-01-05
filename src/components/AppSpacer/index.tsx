import { Spaces } from "@components/tokens";
import React from "react";
import { View } from "react-native";

type AppSpacerProps = {
  horizontalSpace?: "xlg" | "lg" | "md" | "sm";
  verticalSpace?: "xlg" | "lg" | "md" | "sm" | "xsm";
};

export default function AppSpacer({
  horizontalSpace = "md",
  verticalSpace = "md",
}: AppSpacerProps) {
  return (
    <View
      style={{
        width: Spaces[horizontalSpace],
        height: Spaces[verticalSpace],
      }}
    />
  );
}
