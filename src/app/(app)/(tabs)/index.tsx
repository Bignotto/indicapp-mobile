import AppSpacer from "@components/AppSpacer";
import Header from "@components/HomeScreen/Header";
import TopProviders from "@components/HomeScreen/TopProviders";
import TypesReel from "@components/HomeScreen/TypesReel";
import { useAuth } from "@hooks/AuthContext";

export default function Index() {
  const { session, signOut, user } = useAuth();
  return (
    <>
      <Header />
      <TypesReel />
      <AppSpacer />
      <TopProviders />
    </>
  );
}
