import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>HOME SCREEN</Text>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#00b418ff" }}>
        only logged in users can see this
      </Text>
    </View>
  );
}
