import { LandlordAuthProvider } from "@/context/LandlordAuthContext";
import { Stack } from "expo-router";

//in this landlord layout, i want to check if landlord is logged in, if not return a login page only, if logged in return the rest

export default function LandlordLayout() {
  return (
    <LandlordAuthProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }} // hides the "index" header
        />
        <Stack.Screen
          name="myProperties"
          options={{ headerShown: false }} // hides the "index" header
        />
        <Stack.Screen
          name="addProperty"
          options={{ headerShown: false }} // hides the "index" header
        />
      </Stack>
    </LandlordAuthProvider>
  );
}
