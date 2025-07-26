import { Colors } from "@/constants/Colors";
import { CompleteRoom } from "@/types/completeRoom";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import AppGradient from "./AppGradient";

interface Props {
  room: CompleteRoom;
}

const RoomDetails: React.FC<Props> = ({ room }) => {
  const router = useRouter();

  return (
    <AppGradient colors={[Colors.primary, Colors.primary]}>
      <ScrollView className="h-full  w-full ">
        <Text className="text-3xl w-full text-center tracking-widest font-bold text-super font-poppins my-4">
          {room.name}
        </Text>

        <View className="rounded-2xl p-4 py-6 shadow-md mb-4 w-full bg-accent">
          <Text className="text-lg font-nunito tracking-wider text-secondary mb-2">
            Room Type
          </Text>
          <Text className="text-xl font-semibold text-super font-poppins tracking-widest capitalize">
            {room.type}
          </Text>
        </View>

        <View className="rounded-2xl p-4 py-6 shadow-md mb-4 w-full bg-accent">
          <Text className="text-lg font-nunito tracking-wider text-secondary mb-2">
            Renting Price
          </Text>
          <Text className="text-xl font-semibold text-super font-poppins tracking-widest capitalize">
            KES {room.rentingPrice.toLocaleString()}
          </Text>
        </View>

        <View className="rounded-2xl p-4 py-6 shadow-md mb-4 w-full bg-accent">
          <Text className="text-lg font-nunito tracking-wider text-secondary mb-2">
            Status
          </Text>
          <Text
            className={`text-xl font-semibold font-poppins tracking-widest capitalize ${
              room.status === "available" ? "text-green-600" : "text-red-500"
            }`}
          >
            {room.status}
          </Text>
        </View>

        <View className="rounded-2xl p-4 py-6 shadow-md mb-4 w-full bg-accent">
          <Text className="text-lg font-nunito tracking-wider text-secondary mb-2">
            Property
          </Text>
          <Text className="text-xl font-semibold text-super font-poppins tracking-widest capitalize">
            {room.property.name}
          </Text>
          <Text className="text-sm text-gray-600">{room.property.address}</Text>
        </View>

        <View className="rounded-2xl p-4 py-6 shadow-md mb-4 w-full bg-accent">
          <Text className="text-lg font-nunito tracking-wider text-secondary mb-2">
            Landlord
          </Text>
          <Text className="text-xl font-semibold text-super font-poppins tracking-widest capitalize">
            {room.landlord.name}
          </Text>
          <Text className="text-sm text-gray-600">{room.landlord.email}</Text>
        </View>

        {room.tenant && (
          <View className="rounded-2xl p-4 py-6 shadow-md mb-4 w-full bg-accent">
            <Text className="text-lg font-nunito tracking-wider text-secondary mb-2">
              Tenant
            </Text>
            <Text className="text-xl font-semibold text-super font-poppins tracking-widest capitalize">
              {room.tenant.name}
            </Text>
            <Text className="text-sm text-gray-600">{room.tenant.email}</Text>
          </View>
        )}
      </ScrollView>
    </AppGradient>
  );
};

export default RoomDetails;
