import AppButton from "@components/AppButton";
import AppContainer from "@components/AppContainer";
import AppText from "@components/AppText";
import { useAuth } from "@hooks/AuthContext";
import { View } from "react-native";

export default function Index() {
  const { session, signOut, user } = useAuth();

  return (
    <AppContainer>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      ></View>
      <AppText>{session?.user.email}</AppText>
      {user && (
        <>
          <AppText>
            {user.name} - {user.email}
          </AppText>
          <AppText>{JSON.stringify(user, null, 2)}</AppText>
        </>
      )}
      <AppButton title="Sair" variant="solid" onPress={signOut} />
    </AppContainer>
  );
}
