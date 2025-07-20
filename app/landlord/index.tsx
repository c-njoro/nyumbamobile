import AppGradient from "@/components/AppGradient";
import { Colors } from "@/constants/Colors";
import React from "react";
import { Text, View } from "react-native";

const LandlordHome = () => {
  return (
    <AppGradient colors={[`${Colors.primary}`, `${Colors.primary}`]}>
      <View className="w-full h-full px-5 flex flex-col justify-center items-center">
        <Text>Landlord Alooooo</Text>
      </View>
    </AppGradient>
  );
};

export default LandlordHome;
