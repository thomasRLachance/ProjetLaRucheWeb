import {
  Grid,
  Box,
  Typography,
  Paper,
  Input,
  Stack,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../Utils/Component/header";
import NavigationBar from "../../Utils/Component/navigationBar";

export default function PageConnexion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFailed, setIsFailed] = useState(false);

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const navigateConnect = () => {
    navigate("/Connecter");
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:3000/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("username", username);
        navigateConnect();
      })
      .catch((err) => {
        setIsFailed(true);
      });
  };

  const handleSubmit = () => {
    setIsFailed(false);
    handleLogin();
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Header />
      <NavigationBar />
      <Grid>
        <Paper
          textAlign="center"
          elevation={3}
          sx={{
            p: 2,
            width: 450,
            marginBottom: 3,
            backgroundColor: "#9ab75f",
          }}
        >
          <Paper
            sx={{
              p: 2,
            }}
          >
            <Box component="span">
              <Typography variant="h4" gutterBottom>
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
              {isFailed && (
                <Typography variant="body1" color="red">
                  Aucun utilisateur ne correspond à cette combinaison
                </Typography>
              )}
              {!isFailed && <br />}
              <br />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={navigateHome}
                >
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
        </Paper>
      </Grid>
    </Grid>
  );
}
