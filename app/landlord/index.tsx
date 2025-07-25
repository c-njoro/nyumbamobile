import AppGradient from "@/components/AppGradient";
import LandlordLoginComponent from "@/components/LandlordLoginComponent";
import { Colors } from "@/constants/Colors";
import { useLandlordAuth } from "@/context/LandlordAuthContext";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const LandlordHome = () => {
  const { isLoggedIn, user, logout } = useLandlordAuth();
  const router = useRouter();

  if (!isLoggedIn) {
    return <LandlordLoginComponent />;
  }

  return (
    <AppGradient colors={[`${Colors.primary}`, `${Colors.primary}`]}>
      <View className="w-full h-full px-5 flex flex-col justify-center items-center">
        <Text className="text-3xl font-poppins">{user.name} Alooooo</Text>

        <TouchableOpacity
          className="w-full bg-super p-4 rounded-2xl my-4 flex flex-row justify-center items-center"
          onPress={() => router.push("/landlord/myProperties")}
        >
          <Text className="text-secondary">My Properties</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full bg-super p-4 rounded-2xl my-4 flex flex-row justify-center items-center"
          onPress={() => router.push("/landlord/addProperty")}
        >
          <Text className="text-secondary">Add Property</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full bg-super p-4 rounded-2xl my-4 flex flex-row justify-center items-center"
          onPress={logout}
        >
          <Text className="text-secondary">Log Out</Text>
        </TouchableOpacity>
      </View>
    </AppGradient>
  );
};

export default LandlordHome;
