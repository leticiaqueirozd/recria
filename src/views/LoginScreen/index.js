import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'linear-gradient(106.78deg, #58C044 14.52%, #1A9DBA 134.74%)',
    borderRadius: 10,    
    alignItems: "center",
    justifyContent: "center",
  },
});
