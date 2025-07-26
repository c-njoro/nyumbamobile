import { Colors } from "@/constants/Colors";
import { Property } from "@/types/Property";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import AppGradient from "./AppGradient";

interface Props {
  properties: Property[];
}

const LandlordPropertyList: React.FC<Props> = ({ properties }) => {
  const router = useRouter();
  return (
    <AppGradient colors={[`${Colors.primary}`, `${Colors.primary}`]}>
      <View className="flex w-full h-full flex-col justify-start items-start">
        <Text className="w-full text-3xl font-poppins tracking-wider text-center mb-4 text-super">
          My Properties
        </Text>

        {properties && properties.length > 0 ? (
          properties.map((property, index) => (
            <TouchableOpacity
              key={index}
              className="w-full p-4 "
              onPress={() =>
                router.push(`/landlord/myProperties/${property._id}`)
              }
            >
              <Text className="text-xl font-semibold font-poppins text-secondary">
                {property.name}
              </Text>
              <Text className="text-sm text-secondary font-nunito">
                {property.description}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text className="text-center text-gray-500 w-full">
            Properties List Empty
          </Text>
        )}
      </View>
    </AppGradient>
  );
};

export default LandlordPropertyList;
