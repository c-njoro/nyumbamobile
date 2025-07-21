import AppGradient from "@/components/AppGradient";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <AppGradient colors={[`${Colors.primary}`, `${Colors.primary}`]}>
      <View className="w-full h-full px-5 flex flex-col justify-center items-center">
        <Text className="text-7xl font-poppins tracking-widest mb-8 text-white">
          Hello,
        </Text>
        <Text className=" font-semibold mb-6 text-center text-white tracking-wider font-nunito">
          Use app as a...
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/landlord")}
          className={`w-full bg-secondary p-4 rounded-2xl mb-4`}
        >
          <Text className="text-accent font-poppins text-center text-lg font-medium">
            Landlord
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/tenant")}
          className="w-full bg-accent  p-4 rounded-2xl mb-4"
        >
          <Text className="text-secondary font-poppins text-center text-lg font-medium">
            Tenant
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/visitor")}
          className="w-full bg-super p-4 rounded-2xl"
        >
          <Text className="text-accent font-poppins text-center text-lg font-medium">
            Visitor / Explorer
          </Text>
        </TouchableOpacity>
      </View>
    </AppGradient>
  );
}
