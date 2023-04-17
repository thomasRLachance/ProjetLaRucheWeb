import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import React from "react";
import logo from "../logo.png";

export default function PageAccueil() {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid>
        <CardMedia
          component="img"
          image={logo}
          alt="Logo"
          sx={{ maxWidth: 500 }}
        />
        <CardContent>
          <Typography gutterBottom component="div">
            Produire - Transformer - Distribuer
          </Typography>
        </CardContent>
      </Grid>
      <Grid marginBottom={3}>
        <ButtonGroup variant="contained" color="success">
          <Button>Accueil</Button>
          <Button>Menu Bistro Boudreau</Button>
          <Button>Menu Cafétéria Comme Chez Nous</Button>
          <Button>S'identifier</Button>
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
