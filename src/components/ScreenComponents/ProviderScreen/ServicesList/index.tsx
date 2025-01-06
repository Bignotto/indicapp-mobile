import AppSpacer from "@components/AppComponents/AppSpacer";
import AppText from "@components/AppComponents/AppText";
import ServiceAdCard from "@components/ServiceAdCard";
import serviceAds from "@utils/fakeData/serviceAds";
import { View } from "react-native";

export const ServicesList = () => {
  return (
    <View
      style={{
        marginTop: 24,
        paddingHorizontal: 16,
      }}
    >
      <AppText bold size="lg">
        Serviços
      </AppText>
      <AppSpacer verticalSpace="md" />
      {serviceAds.slice(0, 3).map((serviceAd) => (
        <ServiceAdCard
          key={serviceAd.id}
          image={serviceAd.provider.image}
          providerId={serviceAd.provider.id.toString()}
          name={serviceAd.title}
          description={serviceAd.description}
          score={5}
          reviewCount={5}
          city={"Rio Claro"}
        />
      ))}
    </View>
  );
};
