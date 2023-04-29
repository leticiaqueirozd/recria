import React from "react";
import { View, Text } from "react-native";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}
