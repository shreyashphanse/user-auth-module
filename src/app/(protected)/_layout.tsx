import { Slot } from "expo-router";

export default function ProtectedLayout() {
  console.log("Protected Layout");
  return <Slot />;
}
