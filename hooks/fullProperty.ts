// a react query hook to fetch complete property
import { API_URL } from "@/constants/Api";
import { CompleteProperty } from "@/types/PropertyWithRooms";
import { useQuery } from "@tanstack/react-query";

const getFullProperty = async (
  propertyId: string
): Promise<CompleteProperty> => {
  try {
    if (!propertyId) {
      throw new Error("Property ID is required");
    }

    if (!API_URL) {
      throw new Error("API_URL is not defined");
    }

    const response = await fetch(
      `${API_URL}/api/property/get-one/${propertyId}`
    );

    if (!response.ok) {
      throw new Error(
        `Error fetching complete property: ${response.statusText}`
      );
    }

    const data = await response.json();

    console.log("Fetched complete property:");

    return data;
  } catch (error: any) {
    console.log("Error fetching complete property:", error);
    return Promise.reject({
      message: error.message || "Failed to fetch complete property",
    });
  }
};

export const useFullProperty = (propertyId: string) => {
  return useQuery({
    queryKey: ["fullProperty", propertyId],
    queryFn: () => getFullProperty(propertyId),
    enabled: !!propertyId, // only run the query if propertyId is provided
    staleTime: 1000 * 60 * 5, // data is fresh for 5 minutes
  });
};
export default useFullProperty;
