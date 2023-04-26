import {
  Button,
  ButtonGroup,
  Grid,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import Header from "../Utils/Component/header";

export default function PageAccueil() {

  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/')
  }

  const navigateConnexion = () => {
    navigate('/Connexion')
  }

  const navigateMenu = () => {
    navigate('/Menu')
  }

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Header />
      <Grid marginBottom={3}>
        <ButtonGroup variant="contained" color="success">
          <Button onClick={navigateHome} sx={{backgroundColor: '#9ab75f'}}>Accueil</Button>
          <Button onClick={navigateMenu} sx={{backgroundColor: '#9ab75f'}}>Menu</Button>
          <Button onClick={navigateConnexion} sx={{backgroundColor: '#9ab75f'}}>S'identifier</Button>
        </ButtonGroup>
      </Grid>
      <Grid>
        <Paper
          textAlign="center"
          elevation={3}
          sx={{ p: 2, width: 750, marginBottom: 3 }}
        >
          <Box component="span">
            <Typography variant="h3" gutterBottom>
              Qui sommes-nous?
            </Typography>
            <Typography variant="body1">
              Un quartier nourricier désigne une communauté locale qui produit,
              transforme et distribue localement et solidairement des aliments
              frais, par et pour elle-même. À Vanier, chaque personne mangera à
              sa faim en harmonie avec la nature.
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid>
        <Paper textAlign="center" elevation={3} sx={{ p: 2, width: 750 }}>
          <Box component="span">
            <Typography variant="h3" gutterBottom>
              Nous Contacter
            </Typography>
            <Typography variant="body1">
              550 Boulevard Wilfrid-Hamel, Local N-3, Québec, Qc, G1M 2S6
            </Typography>
            <Typography variant="body1">
              Dans les locaux de La Ruche Vanier
            </Typography>
            <Typography variant="body1">
              Quartiernourricier@laruchevanier.org
            </Typography>
            <Typography variant="body1">418-683-3941</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
