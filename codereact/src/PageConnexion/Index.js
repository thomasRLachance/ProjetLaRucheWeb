import {
  Grid,
  Box,
  Typography,
  Paper,
  Input,
  Stack,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../Utils/Component/header";

export default function PageConnexion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const navigate = useNavigate();

  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Header />
      <Grid>
        <Paper
          textAlign="center"
          elevation={3}
          sx={{ p: 2, width: 750, marginBottom: 3, backgroundColor: "#9ab75f" }}
        >
          <Box component="span">
            <Typography variant="h3" gutterBottom>
              S'identifier
            </Typography>
            <Typography variant="body1">Nom d'utilisateur :</Typography>
            <Input
              type="text"
              onChange={handleChangeUser}
              placeholder="Nom d'utilisateur"
            />
            <br />
            <br />
            <Typography variant="body1">Mot de passe :</Typography>
            <Input
              type="password"
              onChange={handleChangePassword}
              placeholder="Mot de passe"
            />
            <br />
            <br />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Button variant="contained" color="error">
                Retour
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="secondary"
              >
                Se connecter
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
