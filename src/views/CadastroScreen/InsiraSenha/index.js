import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function CreateAccountScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNext = () => {
    // Verificar se as senhas coincidem
    if (password === confirmPassword) {
      // Aqui você pode adicionar a lógica para salvar os dados e avançar para a próxima tela
      navigation.navigate("ProximaTela");
    } else {
      alert("As senhas não coincidem. Por favor, tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar uma conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira sua senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <Button title="Próximo" onPress={handleNext} />
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
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
