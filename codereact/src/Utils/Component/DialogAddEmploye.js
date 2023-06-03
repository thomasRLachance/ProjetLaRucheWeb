import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";

export default function DialogAddEmploye({ title, open, setIsOpen }) {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item marginTop={1} xs={6}>
            <TextField fullWidth variant="outlined" label="Nom" />
          </Grid>
          <Grid item marginTop={1} xs={6}>
            <TextField fullWidth variant="outlined" label="Location" select>
              <MenuItem>Bistro Boudreau</MenuItem>
              <MenuItem>Caféteria Comme Chez nous</MenuItem>
              <MenuItem>Administration</MenuItem>
            </TextField>
          </Grid>
          <Grid item marginTop={1} xs={6}>
            <TextField fullWidth variant="outlined" label="Nom d'utilisateur" />
          </Grid>
          <Grid item marginTop={1} xs={6}>
            <TextField fullWidth variant="outlined" label="Mot de passe" />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>ANNULER</Button>
        <Button onClick={() => setIsOpen(false)}>Ajouter</Button>
      </DialogActions>
    </Dialog>
  );
}
