// a react query hook to fetch complete room
import { API_URL } from "@/constants/Api";
import { CompleteRoom } from "@/types/completeRoom";
import { useQuery } from "@tanstack/react-query";

const getFullRoom = async (roomId: string): Promise<CompleteRoom> => {
  try {
    if (!roomId) {
      throw new Error("Room ID is required");
    }

    if (!API_URL) {
      throw new Error("API_URL is not defined");
    }

    const response = await fetch(`${API_URL}/api/room/get-one/${roomId}`);

    if (!response.ok) {
      throw new Error(`Error fetching complete room: ${response.statusText}`);
    }

    const data = await response.json();

    console.log("Fetched complete room:");

    return data;
  } catch (error: any) {
    console.log("Error fetching complete room:", error);
    return Promise.reject({
      message: error.message || "Failed to fetch complete room",
    });
  }
};

export const useFullRoom = (roomId: string) => {
  return useQuery({
    queryKey: ["fullRoom", roomId],
    queryFn: () => getFullRoom(roomId),
    enabled: !!roomId, // only run the query if roomId is provided
    staleTime: 1000 * 60 * 5, // data is fresh for 5 minutes
  });
};
export default useFullRoom;
