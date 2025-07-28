import RoomDetails from "@/components/LandlordFullRoomComponent";
import useFullRoom from "@/hooks/fullRoom";
import { useFocusEffect } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import React, { useCallback } from "react";
import { Text, View } from "react-native";

const OneRoom = () => {
  const { roomId } = useLocalSearchParams<{ roomId: string }>();
  const {
    data: room,
    isLoading: loadingRoom,
    error: roomError,
    refetch: refetchRoom,
  } = useFullRoom(roomId);

  useFocusEffect(
    useCallback(() => {
      if (roomId) {
        refetchRoom();
      }
    }, [roomId])
  );

  if (loadingRoom) {
    return <Text>Loading room...</Text>;
  }

  if (roomError) {
    return <Text>Error loading room: {roomError.message}</Text>;
  }

  if (!room) {
    return <Text>No room data available</Text>;
  }

  return (
    <View className="flex-1">
      <RoomDetails room={room} />
    </View>
  );
};

export default OneRoom;
