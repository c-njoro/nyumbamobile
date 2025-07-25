// app/_layout.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "../global.css";

const queryClient = new QueryClient();
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
    // Add other weights/styles as needed
  });

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }} // hides the "index" header
        />
        <Stack.Screen
          name="landlord"
          options={{ headerShown: false }} // hides the "index" header
        />
        <Stack.Screen
          name="tenant"
          options={{ headerShown: false }} // hides the "index" header
        />
        <Stack.Screen
          name="visitor"
          options={{ headerShown: false }} // hides the "index" header
        />
      </Stack>
    </QueryClientProvider>
  );
}
