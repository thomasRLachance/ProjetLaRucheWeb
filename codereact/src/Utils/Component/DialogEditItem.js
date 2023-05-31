import React from "react";
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
} from "@mui/material";

export default function DialogEditItem({ rows, title, open, setIsOpen }) {
  return (
    <Dialog open={open}>
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
              <TableCell align="right">Prix</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>ANNULER</Button>
      </DialogActions>
    </Dialog>
  );
}