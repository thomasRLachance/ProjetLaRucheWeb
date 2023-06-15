import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DialogAddEmploye({
  title,
  open,
  setIsOpen,
  setCurrentPassage,
  currentPassage,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setFirstName("");
    setLastName("");
    setLocation(0);
    setUsername("");
    setPassword("");
    setError(false);
  }, [open]);

  const locations = [
    {
      value: 1,
      label: "Administration",
    },
    {
      value: 2,
      label: "Bistro Boudreau",
    },
    {
      value: 3,
      label: "Café Comme Chez nous",
    },
  ];

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    setError(false);
    var newUser = {};
    var format = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;

    if (
      format.test(password.trim()) &&
      username.trim().length >= 4 &&
      firstName.trim().length >= 2 &&
      lastName.trim().length >= 2 &&
      location !== 0
    ) {
      newUser = {
        ...newUser,
        password: password,
        username: username,
        firstName: firstName,
        lastName: lastName,
        locationId: location,
        privileges: location,
      };

      axios.post("http://localhost:3000/users", newUser).then((reponse) => {
        setCurrentPassage(currentPassage + 1);
        setIsOpen(false);
      });
    } else {
      setError(true);
    }
  };
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            padding={2}>
            <Grid item xs={6}>
              <TextField
                label="Prénom"
                fullWidth
                onChange={handleChangeFirstName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Nom de famille"
                fullWidth
                onChange={handleChangeLastName}
              />
            </Grid>
            <Grid item xs={12} fullWidth>
              <Select
                fullWidth
                variant="outlined"
                onChange={handleChangeLocation}
                value={location}>
                {locations.map((site) => (
                  <MenuItem key={site.value} value={site.value}>
                    {site.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Nom d'utilisateur"
                fullWidth
                onChange={handleChangeUser}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Mot de passe"
                fullWidth
                onChange={handleChangePassword}
              />
            </Grid>
          </Grid>
        </Grid>
        {error && (<>
          <Typography variant="body1" color="red">
            Un prénom doit avoir au minimum 2 caractères, un nom de famille doit avoir au minimum 2 caractères.
          </Typography>
          <Typography variant="body1" color="red">
            Un nom d'utilisateur doit avoir au minimum 4 caractères, vous devez choisir une location.
          </Typography>
          <Typography variant="body1" color="red">
          Un mot de passe doit avoir entre 6 et 15 caractères, contenir au minimum 1 lettre, contenir au minimum 1 chiffre et contenir au minimum 1 caractère spécial!
          </Typography>
          </>
        )}
        {!error && <br />}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>ANNULER</Button>
        <Button onClick={handleSubmit}>Ajouter</Button>
      </DialogActions>
    </Dialog>
  );
}
