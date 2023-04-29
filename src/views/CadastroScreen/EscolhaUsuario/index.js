import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function CreateAccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma opção:</Text>
      <Button
        title="Quero ser um vendedor e realizar coleta"
        onPress={() => navigation.navigate("VendedorColeta")}
      />
      <Button
        title="Quero realizar compra de materiais"
        onPress={() => navigation.navigate("CompraMateriais")}
      />
      <Button
        title="Quero realizar o descarte de materiais"
        onPress={() => navigation.navigate("DescarteMateriais")}
      />
      <Button
        title="Continuar"
        onPress={() => {
          // Lógica para prosseguir com a criação da conta
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});