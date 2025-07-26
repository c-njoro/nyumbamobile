import { Stack } from "expo-router";

export default function RoomLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }} // hides the "index" header
      />
      <Stack.Screen
        name="[...roomId]"
        options={{ headerShown: false }} // hides the "index" header
      />
    </Stack>
  );
}
