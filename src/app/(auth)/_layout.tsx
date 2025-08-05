import { Slot, Stack } from "expo-router";

export default function AuthLayout() {
  console.log("Auth Layout");
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{ headerShown: false, title: "Sign in" }}
      ></Stack.Screen>
      <Stack.Screen
        name="sign-up"
        options={{ title: "Sign up" }}
      ></Stack.Screen>
    </Stack>
  );
}
