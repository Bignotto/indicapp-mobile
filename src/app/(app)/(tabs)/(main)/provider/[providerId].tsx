import AppButton from "@components/AppComponents/AppButton";
import AppSpacer from "@components/AppComponents/AppSpacer";
import AppStarsScore from "@components/AppComponents/AppStarsScore";
import AppText from "@components/AppComponents/AppText";
import ReviewsList from "@components/ScreenComponents/ProviderScreen/ReviewsList";
import { ServicesList } from "@components/ScreenComponents/ProviderScreen/ServicesList";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

interface ProviderProps {
  name: string;
  business: string;
  description: string;
  image: string;
  score: number;
  reviewCount: number;
  city: string;
}

export default function Provider() {
  const { providerId } = useLocalSearchParams();
  const theme = useTheme();

  const [provider, setProvider] = useState<ProviderProps>({
    name: "",
    business: "",
    description: "",
    image: "",
    score: 0,
    reviewCount: 0,
    city: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProvider({
      name: "John Doe",
      business: "Jardineiro",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      score: 45,
      reviewCount: 10,
      city: "Rio Claro",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <AppText>Loading...</AppText>;
  }

  return (
    <>
      <ScrollView>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 16,
              marginBottom: 8,
              flexDirection: "column",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <RectButton
              onPress={() => router.back()}
              style={{
                width: 32,
                borderRadius: 16,
                paddingLeft: 6,
              }}
            >
              <FontAwesome5
                name="angle-left"
                size={32}
                color={theme.colors.text_dark}
              />
            </RectButton>
            <AppText align="center" size="lg" bold>
              {provider.name}
            </AppText>
          </View>
          <Image
            source={{
              uri: provider.image,
            }}
            style={{
              width: "80%",
              height: 350,
              alignSelf: "center",
              resizeMode: "cover",
              borderRadius: 16,
            }}
          />
          <View
            style={{
              width: "80%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <AppText>{provider.business}</AppText>
            <AppStarsScore
              reviewCount={provider.reviewCount}
              score={provider.score}
              format="numbers"
            />
          </View>

          <View
            style={{
              width: "80%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 32,
              paddingHorizontal: 32,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                name="users"
                size={32}
                color={theme.colors.text_dark}
              />
              <AppText size="lg" bold>
                35
              </AppText>
              <AppText
                size="xsm"
                color={theme.colors.text_gray}
                style={{
                  marginTop: -4,
                }}
              >
                Clientes
              </AppText>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AntDesign
                name="like1"
                size={32}
                color={theme.colors.text_dark}
              />
              <AppText size="lg" bold>
                30
              </AppText>
              <AppText
                size="xsm"
                color={theme.colors.text_gray}
                style={{
                  marginTop: -4,
                }}
              >
                Indicações
              </AppText>
            </View>
          </View>
          <View
            style={{
              marginTop: 32,
              width: "100%",
              paddingHorizontal: 16,
            }}
          >
            <AppButton
              title="Entrar e contato"
              variant="positive"
              leftIcon={
                <FontAwesome5
                  name="whatsapp"
                  size={24}
                  color={theme.colors.white}
                />
              }
            />
          </View>

          {/* ---------------------------------- */}
          <View
            style={{
              marginTop: 24,
              width: "100%",
              paddingHorizontal: 16,
            }}
          >
            <AppText bold size="lg">
              Sobre {provider.name}
            </AppText>
            <AppText>{provider.description}</AppText>
          </View>
        </View>

        <ReviewsList />
        <ServicesList />

        <View
          style={{
            marginTop: 24,
            paddingHorizontal: 16,
          }}
        >
          <AppButton title="Indicar" variant="transparent" />
          <AppSpacer verticalSpace="lg" />
          <AppButton
            title="Entrar e contato"
            variant="positive"
            leftIcon={
              <FontAwesome5
                name="whatsapp"
                size={24}
                color={theme.colors.white}
              />
            }
          />
          <AppSpacer verticalSpace="lg" />
          <AppSpacer verticalSpace="lg" />
          <AppSpacer verticalSpace="lg" />
          <AppSpacer verticalSpace="lg" />
          <AppSpacer verticalSpace="lg" />
          <AppSpacer verticalSpace="lg" />
        </View>
      </ScrollView>
    </>
  );
}
