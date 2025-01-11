import AppSpacer from "@components/AppComponents/AppSpacer";
import Header from "@components/ScreenComponents/MainScreen/Header";
import TopProviders from "@components/ScreenComponents/MainScreen/TopProviders";
import TypesReel from "@components/ScreenComponents/MainScreen/TypesReel";
import { useAuth } from "@hooks/AuthContext";
import { Redirect } from "expo-router";

export default function Index() {
  const { user } = useAuth();

  if (user && !user.name) return <Redirect href="/(app)/(tabs)/userProfile" />;

  return (
    <>
      <Header />
      <TypesReel />
      <AppSpacer />
      <TopProviders />
    </>
  );
}
