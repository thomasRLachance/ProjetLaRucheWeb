import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DialogAddItem({
  title,
  open,
  setIsOpen,
  setCurrentPassage,
  currentPassage,
}) {
  const token = sessionStorage.getItem("token");

  const headers = { Authorization: token }; // auth header with bearer token

  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setName("");
    setError(false);
  }, [open]);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    setError(false);

    if (name !== "") {
      axios
        .post(
          "https://laruche-api-2.fly.dev/products",
          { name: name },
          { headers }
        )
        .then((reponse) => {
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
        <Grid container spacing={1}>
          <Grid item xs={12} marginTop={1}>
            <TextField label="Nom" fullWidth onChange={handleChangeName} />
          </Grid>
        </Grid>
        {error && (
          <Typography variant="body1" color="red">
            Veuillez remplir le champ
          </Typography>
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
