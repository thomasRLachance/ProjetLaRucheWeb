import React from "react";
import { useNavigate } from "react-router";
import { Grid, Button, ButtonGroup } from "@mui/material";

export default function NavigationBar() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const navigateConnexion = () => {
    navigate("/Connexion");
  };

  const navigateMenu = () => {
    navigate("/Menu");
  };

  return (
    <Grid marginBottom={3}>
      <ButtonGroup variant="contained" color="success">
        <Button onClick={navigateHome} sx={{ backgroundColor: "#9ab75f" }}>
          Accueil
        </Button>
        <Button onClick={navigateMenu} sx={{ backgroundColor: "#9ab75f" }}>
          Menu
        </Button>
        <Button onClick={navigateConnexion} sx={{ backgroundColor: "#9ab75f" }}>
          S'identifier
        </Button>
      </ButtonGroup>
    </Grid>
  );
}
