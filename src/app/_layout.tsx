import { Slot } from "expo-router";
import { AuthProvider } from "@/providers/AuthProvider";

export default function RootLayout() {
  console.log("Root Layout");
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
