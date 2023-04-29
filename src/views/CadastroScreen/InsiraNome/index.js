import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

export default function CreateAccountScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleNext = () => {
    // Aqui você pode adicionar a lógica para salvar os dados e avançar para a próxima tela
    navigation.navigate("ProximaTela");
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h5">Criar uma conta</Typography>
      </Grid>
      <Grid item>
        <TextField
          label="Insira seu nome completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Insira seu e-mail para cadastro"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Próximo
        </Button>
      </Grid>
    </Grid>
  );
}
