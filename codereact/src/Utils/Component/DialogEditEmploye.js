import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  Paper,
  Typography,
  Table,
  TableContainer,
  Toolbar,
  Stack,
  TextField,
  MenuItem,
  Grid,
  Select,
} from "@mui/material";
import axios from "axios";

export default function DialogEditEmploye({
  user,
  title,
  open,
  setIsOpen,
  setCurrentPassage,
  currentPassage,
}) {
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setLocation(user.locationId);
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
    if (location !== user.locationId && location !== 0) {
      console.log(location);
      newUser = {
        ...newUser,
        locationId: location,
      };
    }

    if (newUser.username) {
      if (sessionStorage.getItem("username") === user.username)
        sessionStorage.setItem("username", username);
    }

    if (Object.keys(newUser).length !== 0) {
      axios
        .put(`https://laruche-api-2.fly.dev/users/${user.userId}`, newUser)
        .then((response) => {
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
    <Dialog open={open} fullWidth maxWidth="sm">
      <TableContainer component={Paper}>
        <Toolbar>
          <Stack justifyContent="space-between" direction="row" spacing={2}>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
          </Stack>
        </Toolbar>
        <Table title={title}>
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
                  defaultValue={user.firstName}
                  label="Prénom"
                  fullWidth
                  onChange={handleChangeFirstName}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  defaultValue={user.lastName}
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
                  defaultValue={user.username}
                  label="Nom d'utilisateur"
                  fullWidth
                  onChange={handleChangeUser}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  defaultValue={user.password}
                  label="Mot de passe"
                  fullWidth
                  onChange={handleChangePassword}
                />
              </Grid>
            </Grid>
          </Grid>
        </Table>
      </TableContainer>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>ANNULER</Button>
        <Button onClick={handleSubmit}>Confirmer</Button>
      </DialogActions>
    </Dialog>
  );
}
