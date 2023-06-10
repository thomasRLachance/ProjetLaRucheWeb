import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";

export default function DialogEditProfil({ title, open, setIsOpen }) {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item marginTop={1} xs={12}>
            <TextField fullWidth variant="outlined" label="Nom" />
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
        <Button onClick={() => setIsOpen(false)}>Confirmer</Button>
      </DialogActions>
    </Dialog>
  );
}
