import React from "react";
import { View, Text } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  );
}
