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
import Header from "../../Utils/Component/header";
import NavigationBar from "../../Utils/Component/navigationBar";

export default function PageConnexion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [allUsers, setAllUsers] = useState([
    {
      username: "test1",
      password: "abc123",
      name: "Thomas Lachance1",
      location: "1",
    },
    {
      username: "test2",
      password: "abc123",
      name: "Thomas Lachance2",
      location: "2",
    },
    {
      username: "test3",
      password: "abc123",
      name: "Thomas Lachance3",
      location: "3",
    },
  ]);
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

  const handleSubmit = () => {
    var user = allUsers.find(
      (x) => x.username === username && x.password === password
    );
    if (user) {
      setIsFailed(false);
      sessionStorage.setItem("name", user.name);
      sessionStorage.setItem("location", user.location);
      navigateConnect();
    } else {
      setIsFailed(true);
    }
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
