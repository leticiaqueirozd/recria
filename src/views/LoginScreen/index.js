import React from "react";
import { View, Text, Button } from "react-native";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button
        title="Criar uma conta"
        onPress={() => navigation.navigate("HomeScreen")}
      />
      
      <Button
        title="Entrar"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}
