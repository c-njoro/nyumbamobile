import { Colors } from "@/constants/Colors";
import { CompleteProperty } from "@/types/PropertyWithRooms";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AppGradient from "./AppGradient";

interface Props {
  property: CompleteProperty;
}

const PropertyDetails: React.FC<Props> = ({ property }) => {
  const router = useRouter();
  return (
    <AppGradient colors={[`${Colors.primary}`, `${Colors.primary}`]}>
      <View className="flex w-full h-full flex-col justify-start items-start">
        <Text className="w-full text-3xl font-poppins tracking-wider text-center mt-4 text-super">
          {property.name}
        </Text>
        <Text className="text-secondary font-poppins w-full text-center mb-4">
          {property.address}
        </Text>

        <Text className="w-full text-2xl font-poppins tracking-wider text-center my-4 text-accent ">
          Rooms
        </Text>

        <View className="w-full h-max flex flex-col justify-start items-start gap-4">
          {property.rooms && property.rooms.length > 0 ? (
            property.rooms.map((room, index) => (
              <TouchableOpacity
                key={index}
                className="w-full h-max flex flex-col justify-start items-start bg-accent p-4 rounded-md shadow-md gap-2"
                onPress={() =>
                  router.push(`/landlord/myProperties/rooms/${room._id}`)
                }
              >
                <Text className="text-xl font-semibold font-poppins uppercase tracking-widest text-secondary">
                  {room.name}
                </Text>
                <Text className="capitalize tracking-wide font-nunito text-secondary">
                  Type: {room.type}
                </Text>

                <Text className="capitalize tracking-wide font-nunito text-secondary">
                  Price: {room.rentingPrice}
                </Text>
                <Text className="capitalize tracking-wide font-nunito text-secondary">
                  Status: {room.status}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text className="text-center text-gray-500 w-full">
              No rooms available
            </Text>
          )}
        </View>

        <TouchableOpacity className="w-full h-mx py-4 flex flex-col justify-center items-center bg-super rounded-md shadow-md my-5">
          <Text className="text-xl font-semibold font-poppins uppercase tracking-widest text-accent">
            Add Room
          </Text>
        </TouchableOpacity>
      </View>
    </AppGradient>
  );
};

export default PropertyDetails;
