import { useAuth } from "@/providers/AuthProvider";
import { Redirect, Slot } from "expo-router";

export default function ProtectedLayout() {
  console.log("Protected Layout");
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    console.log("you are not signed in please sign-in first");
    return <Redirect href={"/sign-in"} />;
  }
  return <Slot />;
}
