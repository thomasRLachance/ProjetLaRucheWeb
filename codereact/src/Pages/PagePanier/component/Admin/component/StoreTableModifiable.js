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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React from "react";

export default function StoreTableMofiable({
  rows,
  title,
  setIsOpen,
  setAddOpen,
  setIsDeleteOpen,
  isAddPossible,
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
          <IconButton color="primary" onClick={() => setIsOpen(true)}>
            <EditIcon />
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
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                {row.price}
                <IconButton color="error" onClick={() => setIsDeleteOpen(true)}>
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
