import React from "react";
import { View, Text, Button } from "react-native";

export default function StartScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Start Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  );
}
