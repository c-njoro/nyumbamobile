import AppGradient from "@/components/AppGradient";
import TenantLoginComponent from "@/components/TenantLoginComponent";
import { Colors } from "@/constants/Colors";
import { useTenantAuth } from "@/context/TenantAuthContext";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const LandlordHome = () => {
  const { isLoading, isLoggedIn, user, login, logout } = useTenantAuth();

  if (!isLoggedIn) {
    return <TenantLoginComponent />;
  }
  return (
    <AppGradient colors={[`${Colors.primary}`, `${Colors.primary}`]}>
      <View className="w-full h-full px-5 flex flex-col justify-center items-center">
        <Text className="capitalize">Hello, {user.name}.</Text>

        <TouchableOpacity
          className="w-full bg-super p-4 rounded-2xl my-4"
          onPress={logout}
        >
          <Text className="text-secondary">Log Out</Text>
        </TouchableOpacity>
      </View>
    </AppGradient>
  );
};

export default LandlordHome;
