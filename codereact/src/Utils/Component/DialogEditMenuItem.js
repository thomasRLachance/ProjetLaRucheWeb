import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Stack,
  TextField,
  Switch,
} from "@mui/material";
import axios from "axios";

export default function DialogEditMenuItem({
  item,
  title,
  open,
  setIsOpen,
  setCurrentPassage,
  currentPassage,
}) {
  const token = sessionStorage.getItem("token");

  const headers = { Authorization: token }; // auth header with bearer token

  const [price, setPrice] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setPrice(item.price);
    setIsActive(item.isActive);
    setError(false);
  }, [open, item.isActive, item.price]);

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleActiveChange = (event) => {
    setIsActive(!isActive);
  };

  const handleSubmit = () => {
    setError(false);
    if (price !== "") {
      axios
        .put(
          `https://laruche-api-2.fly.dev/productLocations/${item.productLocationId}`,
          {
            price: price,
            isActive: isActive,
          },
          { headers }
        )
        .then((response) => {
          setCurrentPassage(currentPassage + 1);
          setIsOpen(false);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    } else {
      setError(true);
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
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">Actif</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={item.productId}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                {item.product.name}
              </TableCell>
              <TableCell align="right">
                <TextField
                  defaultValue={item.price}
                  label="Prix"
                  onChange={handleChangePrice}
                />
              </TableCell>
              <TableCell align="right">
                <Switch
                  defaultChecked={item.isActive}
                  onChange={handleActiveChange}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {error && (
          <Typography variant="body1" color="red">
            Veuillez entrer un prix
          </Typography>
        )}
        {!error && <br />}
      </TableContainer>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>ANNULER</Button>
        <Button onClick={handleSubmit}>Confirmer</Button>
      </DialogActions>
    </Dialog>
  );
}
