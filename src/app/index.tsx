import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { Link } from "expo-router";
import { useAuth } from "@/providers/AuthProvider";

export default function WelcomeScreen() {
  const { isAuthenticated, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Screen</Text>
      <Text style={{ color: "darkgreen" }}>
        {" "}
        {isAuthenticated ? "Authenticated" : "Not Authenticated"}
      </Text>
      <Button title="Sign out" onPress={signOut}></Button>
      <Link href={"/sign-in"} style={styles.goto1}>
        Go to Sign-in
      </Link>
      <Link href={"/(protected)"} style={styles.goto1}>
        Go to Protected Screens
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  goto1: {
    fontSize: 15,
    fontWeight: 500,
    color: "#4353fd",
    height: 30,
    top: 15,
  },
});
