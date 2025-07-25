import { Colors } from "@/constants/Colors";
import { TenantAuthProvider } from "@/context/TenantAuthContext";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TenantLayout() {
  return (
    <TenantAuthProvider>
      <Tabs
        screenOptions={{
          headerShown: false, // Hides the header for all tabs
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: `${Colors.accent}`,
            height: 40,
            paddingBottom: 2,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ size }) => (
              <Ionicons
                name="home-outline"
                size={size}
                color={Colors.secondary}
              />
            ),
          }}
        />
      </Tabs>
    </TenantAuthProvider>
  );
}
