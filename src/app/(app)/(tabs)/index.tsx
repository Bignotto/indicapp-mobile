import Header from "@components/HomeScreen/Header";
import { useAuth } from "@hooks/AuthContext";

export default function Index() {
  const { session, signOut, user } = useAuth();

  return <Header />;
}
