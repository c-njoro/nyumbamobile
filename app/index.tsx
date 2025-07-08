import AppGradient from "@/components/AppGradient";
import { Colors } from "@/constants/Colors";
import React from "react";
import { Text, View } from "react-native";

const HomePage = () => {
  return (
    <AppGradient colors={[`${Colors.background}`, `${Colors.backgroundDark}`]}>
      <View>
        <Text className="text-5xl text-red-500">HomePage</Text>
        <Text className="text-5xl text-red-500">HomePage</Text>
        <Text className="text-5xl text-green-500">HomePage</Text>
        <Text className="text-5xl text-red-500">HomePage</Text>
      </View>
    </AppGradient>
  );
};

export default HomePage;
