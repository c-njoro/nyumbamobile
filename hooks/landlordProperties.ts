// a react query hook to fetch landlord properties
import { API_URL } from "@/constants/Api";
import { Property } from "@/types/Property";
import { useQuery } from "@tanstack/react-query";

const getLandlordProperties = async (
  landlordId: string
): Promise<Property[]> => {
  try {
    if (!landlordId) {
      throw new Error("Landlord ID is required");
    }

    if (!API_URL) {
      throw new Error("API_URL is not defined");
    }

    const response = await fetch(
      `${API_URL}/api/landlord/get-landlord-properties/${landlordId}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching properties: ${response.statusText}`);
    }

    const data = await response.json();

    console.log("Fetched landlord properties:");

    return data.properties;
  } catch (error: any) {
    console.log("Error fetching landlord properties:", error);
    return Promise.reject({
      message: error.message || "Failed to fetch properties",
    });
  }
};

export const useLandlordProperties = (landlordId: string) => {
  return useQuery({
    queryKey: ["landlordProperties", landlordId],
    queryFn: () => getLandlordProperties(landlordId),
    enabled: !!landlordId, // only run the query if landlordId is provided
    staleTime: 1000 * 60 * 5, // data is fresh for 5 minutes
  });
};
export default useLandlordProperties;
