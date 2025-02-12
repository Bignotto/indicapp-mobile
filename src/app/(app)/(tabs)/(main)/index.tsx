import AppSpacer from "@components/AppComponents/AppSpacer";
import Header from "@components/ScreenComponents/MainScreen/Header";
import TopProviders from "@components/ScreenComponents/MainScreen/TopProviders";
import TypesReel from "@components/ScreenComponents/MainScreen/TypesReel";
import { useAuth } from "@hooks/AuthContext";
import React from "react";

export default function Index() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <TypesReel />
      <AppSpacer />
      <TopProviders />
    </>
  );
}
