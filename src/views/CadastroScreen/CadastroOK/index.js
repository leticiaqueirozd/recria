import React from "react";
import { Grid, Typography } from "@material-ui/core";

export default function CadastroScreen() {
  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h5">Cadastro concluído com sucesso!</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          Obrigada por contribuir com o processo de upcycling na nossa cidade! Personalize seu perfil e engaje na nossa comunidade.
        </Typography>
      </Grid>
    </Grid>
  );
}
