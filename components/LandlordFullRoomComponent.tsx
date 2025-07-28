import { API_URL } from "@/constants/Api";
import { Colors } from "@/constants/Colors";
import useFullRoom from "@/hooks/fullRoom";
import { CompleteRoom } from "@/types/completeRoom";
import axios from "axios";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AppGradient from "./AppGradient";
import ImageSlider from "./ImageSlider";

interface Props {
  room: CompleteRoom;
}

const RoomDetails: React.FC<Props> = ({ room }) => {
  const router = useRouter();
  const images: string[] = [
    "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg",
    "https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg",
    "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
  ];
  const { refetch: refetchRoom } = useFullRoom(room._id);

  const handleMakeAvailable = async (roomId: string) => {
    try {
      console.log("Making room available:", roomId);

      const response = await axios.put(
        `${API_URL}/api/room/make-available/${roomId}`
      );

      refetchRoom();
      router.back();
      Alert.alert("Room made available!!", "Redirecting back to all rooms.");
    } catch (error: any) {
      console.error("Error making room available:", error);

      // Extract meaningful error message from Axios error
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong while making room available.";

      Alert.alert("Could not make room available", message);
    }
  };

  return (
    <AppGradient colors={[Colors.primary, Colors.primary]}>
      <ScrollView
        className="h-full  w-full "
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full h-max flex flex-col justify-center items-center">
          <Text className="text-3xl w-full text-center tracking-widest  text-secondary font-nunito mt-4 ">
            {room.name}
          </Text>
          <Text className=" w-full text-center tracking-widest  text-secondary font-nunito mb-4">
            {room.property.name}
          </Text>
        </View>

        <View className="w-full h-max min-h-[calc(50vh)]">
          <ImageSlider images={images} />
        </View>

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
          {room.status === "available" ? (
            <TouchableOpacity className="w-max flex flex-row justify-center items-center px-5 py-2 rounded-md shadow-md bg-green-500 mt-4 opacity-60">
              <Text className="uppercase font-poppins tracking-wider text-secondary">
                Add Tenant
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="w-max flex flex-row justify-center items-center px-5 py-2 rounded-md shadow-md bg-red-500 mt-4"
              onPress={() => {
                Alert.alert(
                  "Confirm Removal",
                  "Are you sure you want to remove the tenant and make the room available?",
                  [
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                    {
                      text: "Yes",
                      style: "destructive",
                      onPress: () => handleMakeAvailable(room._id), // replace with your actual room ID
                    },
                  ],
                  { cancelable: true }
                );
              }}
            >
              <Text className="uppercase font-poppins tracking-wider text-secondary">
                Make Availabe & Remove Tenant
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View className="rounded-2xl p-4 py-6 shadow-md mb-4 w-full bg-accent">
          <Text className="text-lg font-nunito tracking-wider text-secondary mb-2">
            Property
          </Text>
          <Text className="text-xl font-semibold text-super font-poppins tracking-widest capitalize">
            {room.property.name}
          </Text>
          <Text className="text-sm text-secondary font-nunito mt-2">
            {room.property.address}
          </Text>
        </View>

        <View className="rounded-2xl p-4 py-6 shadow-md mb-4 w-full bg-accent">
          <Text className="text-lg font-nunito tracking-wider text-secondary mb-2">
            Landlord
          </Text>
          <Text className="text-xl font-semibold text-super font-poppins tracking-widest capitalize">
            {room.landlord.name}
          </Text>
          <Text className="text-sm text-secondary font-nunito mt-2">
            {room.landlord.email}
          </Text>
        </View>

        {room.tenant && (
          <View className="rounded-2xl p-4 py-6 shadow-md mb-4 w-full bg-accent">
            <Text className="text-lg font-nunito tracking-wider text-secondary mb-2">
              Tenant
            </Text>
            <Text className="text-xl font-semibold text-super font-poppins tracking-widest capitalize">
              {room.tenant.name}
            </Text>
            <Text className="text-sm text-secondary font-nunito mt-2">
              {room.tenant.email}
            </Text>
            <Text className="text-sm text-secondary font-nunito mt-2">
              {room.tenant.phoneNumber}
            </Text>
            <TouchableOpacity className="w-max flex flex-row justify-center items-center px-5 py-2 rounded-md shadow-md ">
              <Text className=" text-secondary font-nunito mt-2 uppercase">
                View Tenant Profile
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {room.tenant && (
          <View className="rounded-2xl p-4 py-6 shadow-md mb-4 w-full bg-accent">
            <Text className="text-lg font-nunito tracking-wider text-secondary mb-2">
              Rent Status
            </Text>
            <Text className="text-sm font-semibold text-super font-poppins tracking-widest capitalize">
              remember to add rent status here
            </Text>
          </View>
        )}
      </ScrollView>
    </AppGradient>
  );
};

export default RoomDetails;
