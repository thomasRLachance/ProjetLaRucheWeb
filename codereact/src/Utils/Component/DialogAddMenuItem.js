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

export default function DialogAddMenuItem({
  title,
  open,
  setIsOpen,
  availableItem,
  url,
  currentPassage,
  setCurrentPassage,
}) {
  const [item, setItem] = useState(-1);
  const [prix, setPrix] = useState(-1);
  const [error, setError] = useState(false);

  const handleChangeItem = (event) => {
    setItem(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrix(event.target.value);
  };

  const handleSubmit = () => {
    setError(false);
    if (item !== -1 && prix !== -1) {
      axios
        .post(url, { productId: item, price: prix })
        .then((response) => {
          setCurrentPassage(currentPassage + 1);
          setIsOpen(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    setItem(0);
    setPrix(-1);
    setError(false);
  }, [open]);

  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item marginTop={1} xs={6}>
            <Select
              fullWidth
              variant="outlined"
              onChange={handleChangeItem}
              value={item}>
              {availableItem.map((item) => (
                <MenuItem key={item.productId} value={item.productId}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item marginTop={1} xs={6}>
            <TextField
              variant="outlined"
              label="Prix"
              onChange={handleChangePrice}
            />
          </Grid>
        </Grid>
        {error && (
          <Typography variant="body1" color="red">
            Veuillez remplir tous les champs
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
