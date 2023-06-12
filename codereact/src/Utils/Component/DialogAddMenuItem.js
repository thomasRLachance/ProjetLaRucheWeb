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

export default function DialogAddMenuItem({
  title,
  open,
  setIsOpen,
  availableItem,
}) {
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item marginTop={1} xs={4}>
            <TextField fullWidth variant="outlined" label="Item" select>
              {availableItem.map((item) => (
                <MenuItem key={item.name} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item marginTop={1}>
            <TextField variant="outlined" label="Prix" />
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
