import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";

export default function BusinessDescriptionScreen({ navigation }) {
  const [businessDescription, setBusinessDescription] = useState("");
  const [isIndividual, setIsIndividual] = useState(true);
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");

  const handleNext = () => {
    navigation.navigate("ProximaTela");
  };

  const handleIsIndividualChange = (event) => {
    setIsIndividual(event.target.value === "individual");
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h5">Descreva seu negócio</Typography>
      </Grid>
      <Grid item>
        <TextField
          label="Descreva seu negócio"
          multiline
          rows={4}
          value={businessDescription}
          onChange={(e) => setBusinessDescription(e.target.value)}
        />
      </Grid>
      <Grid item>
        <RadioGroup name="personType" value={isIndividual ? "individual" : "juridica"} onChange={handleIsIndividualChange}>
          <FormControlLabel value="individual" control={<Radio />} label="Pessoa Física" />
          <FormControlLabel value="juridica" control={<Radio />} label="Pessoa Jurídica" />
        </RadioGroup>
      </Grid>
      <Grid item>
        <TextField
          label={isIndividual ? "CPF" : "CNPJ"}
          value={isIndividual ? cpf : cnpj}
          onChange={(e) => (isIndividual ? setCpf(e.target.value) : setCnpj(e.target.value))}
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
