import LandlordLoginComponent from "@/components/LandlordLoginComponent";
import LandlordPropertyList from "@/components/LandlordPropertyList";
import { useLandlordAuth } from "@/context/LandlordAuthContext";
import { useLandlordProperties } from "@/hooks/landlordProperties";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const MyProperties = () => {
  const { isLoggedIn, user } = useLandlordAuth();
  const router = useRouter();
  const {
    data: myProperties,
    isLoading: myPropertiesLoading,
    error: myPropertiesError,
    refetch: myPropertiesRefetch,
  } = useLandlordProperties(user.id);

  if (!isLoggedIn) {
    return <LandlordLoginComponent />;
  }

  if (!user) {
    return <Text>Landlord data not available, loading...</Text>;
  }

  if (myPropertiesLoading) {
    return <Text>Loading properties...</Text>;
  }

  if (myPropertiesError) {
    return <Text>Error loading properties: {myPropertiesError.message}</Text>;
  }

  return (
    <View className="flex-1">
      {myProperties ? (
        <LandlordPropertyList properties={myProperties} />
      ) : (
        <Text>Properties not received from the hook, null recieved</Text>
      )}
    </View>
  );
};

export default MyProperties;
