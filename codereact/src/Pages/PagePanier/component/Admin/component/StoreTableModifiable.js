import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Toolbar,
  IconButton,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

export default function StoreTableMofiable({
  rows,
  title,
  setIsOpen,
  setAddOpen,
  isAddPossible,
  setItemLocationToModify,
}) {
  return (
    <TableContainer component={Paper}>
      <Toolbar>
        <Stack justifyContent="space-between" direction="row" spacing={2}>
          <Typography variant="subtitle1" component="div">
            {title}
          </Typography>
          <IconButton
            color="primary"
            onClick={() => setAddOpen(true)}
            disabled={!isAddPossible}>
            <AddIcon />
          </IconButton>
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
              key={row.productLocationId}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}>
              <TableCell component="th" scope="row">
                {row.product.name}{" "}
                <Typography color="red">
                  {row.isActive ? "" : "Inactif"}
                </Typography>
              </TableCell>
              <TableCell align="right">
                {row.price}
                <IconButton
                  color="primary"
                  onClick={() => {
                    setItemLocationToModify(row);
                    setIsOpen(true);
                  }}>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
