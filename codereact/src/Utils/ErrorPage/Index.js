import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Header from "../Component/header";
import NavigationBar from "../Component/navigationBar";

export default function ErrorPage() {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Header />
      <NavigationBar />
      <Paper
        textAlign="center"
        elevation={3}
        sx={{ p: 2, width: 750, marginBottom: 3 }}
      >
        <Box component="span">
          <Typography variant="h3" gutterBottom>
            Erreur lors de la tentative d'accès
          </Typography>
          <Typography variant="body1">
            Vous n'êtes actuellement pas connecté. Veuillez vous identifier si
            vous voulez accéder à d'autre page que les trois pages disponibles.
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
