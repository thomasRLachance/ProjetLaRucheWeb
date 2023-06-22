import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DialogEditProfil({
  title,
  open,
  setIsOpen,
  currentPassage,
  setCurrentPassage,
  user,
}) {
  const token = sessionStorage.getItem("token");

  const headers = { Authorization: token }; // auth header with bearer token

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setUsername(user.username);
    setPassword(user.password);
  }, [
    open,
    user.locationId,
    user.firstName,
    user.lastName,
    user.username,
    user.password,
  ]);

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    var newUser = {};

    if (password !== user.password && password !== "") {
      newUser = {
        ...newUser,
        password: password,
      };
    }
    if (username !== user.username && username !== "") {
      newUser = {
        ...newUser,
        username: username,
      };
    }
    if (firstName !== user.firstName && firstName !== "") {
      newUser = {
        ...newUser,
        firstName: firstName,
      };
    }
    if (lastName !== user.lastName && lastName !== "") {
      newUser = {
        ...newUser,
        lastName: lastName,
      };
    }

    if (Object.keys(newUser).length !== 0) {
      axios
        .put(`https://laruche-api-2.fly.dev/users/${user.userId}`, newUser, {
          headers,
        })
        .then((response) => {
          if (newUser.username) {
            sessionStorage.setItem("username", username);
          }
          setCurrentPassage(currentPassage + 1);
          setIsOpen(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item marginTop={1} xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Prénom"
              defaultValue={user.firstName}
              onChange={handleChangeFirstName}
            />
          </Grid>
          <Grid item marginTop={1} xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Nom de famille"
              defaultValue={user.lastName}
              onChange={handleChangeLastName}
            />
          </Grid>
          <Grid item marginTop={1} xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Nom d'utilisateur"
              defaultValue={user.username}
              onChange={handleChangeUser}
            />
          </Grid>
          <Grid item marginTop={1} xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Mot de passe"
              defaultValue={user.password}
              onChange={handleChangePassword}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>ANNULER</Button>
        <Button onClick={handleSubmit}>Confirmer</Button>
      </DialogActions>
    </Dialog>
  );
}
