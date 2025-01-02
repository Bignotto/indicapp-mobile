import AppSpacer from "@components/AppSpacer";
import Header from "@components/HomeScreen/Header";
import TopProviders from "@components/HomeScreen/TopProviders";
import TypesReel from "@components/HomeScreen/TypesReel";

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
