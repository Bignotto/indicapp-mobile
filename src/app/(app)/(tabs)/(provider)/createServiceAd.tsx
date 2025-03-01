import AppContainer from "@components/AppComponents/AppContainer";
import AppText from "@components/AppComponents/AppText";
import { useAuth } from "@hooks/AuthContext";
import { useState } from "react";

export default function CreateServiceAd() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <AppContainer>
      <AppText>CreateServiceAd</AppText>
    </AppContainer>
  );
}
