import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";

export default function Profile() {
  const profileData = {
    fullName: "Ricardo",
    birthDate: "01/01/1990",
    city: "Recife",
    cpfOrCnpj: "123.456.789-00",
    isLegalEntity: false,
    businessDescription: "Descrição do negócio",
    bankingInformation: "Informações bancárias",
  };

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Avatar
        rounded
        source={require("/path/to/profile-picture.png")}
        size="large"
      />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
        Bem-Vindo, {profileData.fullName}!
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.infoLabel}>Data de Nascimento: </Text>
        {profileData.birthDate}
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.infoLabel}>Cidade: </Text>
        {profileData.city}
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.infoLabel}>
          {profileData.isLegalEntity ? "CNPJ" : "CPF"}:{" "}
        </Text>
        {profileData.cpfOrCnpj}
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.infoLabel}>Descrição do Empreendimento: </Text>
        {profileData.businessDescription}
      </Text>
      <Text style={styles.infoText}>
        <Text style={styles.infoLabel}>Informações Bancárias: </Text>
        {profileData.bankingInformation}
      </Text>
    </View>
  );
}

const styles = {
  infoText: {
    fontSize: 16,
    marginTop: 5,
  },
  infoLabel: {
    fontWeight: "bold",
  },
};
