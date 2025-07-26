import PropertyDetails from "@/components/LandlordFullPropertyComponent";
import useFullProperty from "@/hooks/fullProperty";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const OneProperty = () => {
  const { propertyId } = useLocalSearchParams<{ propertyId: string }>();
  const {
    data: property,
    isLoading: loadingProperty,
    error: propertyError,
    refetch: refetchProperty,
  } = useFullProperty(propertyId);

  if (loadingProperty) {
    return <Text>Loading property...</Text>;
  }

  if (propertyError) {
    return <Text>Error loading property: {propertyError.message}</Text>;
  }

  if (!property) {
    return <Text>No property data available</Text>;
  }

  return (
    <View className="flex-1">
      <PropertyDetails property={property} />
    </View>
  );
};

export default OneProperty;
