import Header from "@components/HomeScreen/Header";
import TypesReel from "@components/HomeScreen/TypesReel";
import { useAuth } from "@hooks/AuthContext";

export default function Index() {
  const { session, signOut, user } = useAuth();
  return (
    <>
      <Header />
      <TypesReel />
    </>
  );
}
