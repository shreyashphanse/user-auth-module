import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Screen</Text>
      <Link href={"/sign-in"} style={styles.goto1}>
        Go to Sign-in
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
