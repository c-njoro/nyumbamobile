import AppGradient from "@/components/AppGradient";
import { API_URL } from "@/constants/Api";
import { Colors } from "@/constants/Colors";
import axios from "axios";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const LandlordHome = () => {
  const [landlords, setLandlords] = useState([]);

  const fetchLandlords = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/landlord`);
      console.log("Landlords:", res.data.landlords);
      setLandlords(res.data.landlords);
    } catch (error) {
      console.error("Error fetching landlords:", error);
    }
  };
  return (
    <AppGradient colors={[`${Colors.primary}`, `${Colors.primary}`]}>
      <View className="w-full h-full px-5 flex flex-col justify-center items-center">
        <Text className="text-3xl font-poppins">Landlord Alooooo</Text>

        <TouchableOpacity
          className="w-full bg-secondary p-4 rounded-2xl mb-4"
          onPress={fetchLandlords}
        >
          <Text>Test Env</Text>
        </TouchableOpacity>
      </View>
    </AppGradient>
  );
};

export default LandlordHome;
