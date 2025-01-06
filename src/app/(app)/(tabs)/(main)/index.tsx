import AppSpacer from "@components/AppComponents/AppSpacer";
import Header from "@components/ScreenComponents/MainScreen/Header";
import TopProviders from "@components/ScreenComponents/MainScreen/TopProviders";
import TypesReel from "@components/ScreenComponents/MainScreen/TypesReel";

export default function Index() {
  return (
    <>
      <Header />
      <TypesReel />
      <AppSpacer />
      <TopProviders />
    </>
  );
}
