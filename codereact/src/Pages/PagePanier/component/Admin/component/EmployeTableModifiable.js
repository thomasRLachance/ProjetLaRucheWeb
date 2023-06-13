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

export default function EmployeTableMofiable({
  rows,
  title,
  setIsOpen,
  setIsAddOpen,
  setIsDeleteOpen,
  setEmployeToModify,
}) {
  const getLocation = (locationId) => {
    if (locationId === 2) {
      return "Bistro Boudreau";
    } else if (locationId === 3) {
      return "Caféteria Comme Chez nous";
    } else if (locationId === 1) {
      return "Administration";
    }
  };
  return (
    <TableContainer component={Paper}>
      <Toolbar>
        <Stack justifyContent="space-between" direction="row" spacing={2}>
          <Typography variant="subtitle1" component="div">
            {title}
          </Typography>
          <IconButton color="primary" onClick={() => setIsAddOpen(true)}>
            <AddIcon />
          </IconButton>
        </Stack>
      </Toolbar>
      <Table title={title}>
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell align="right">Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.userId}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}>
              <TableCell component="th" scope="row">
                {row.firstName} {row.lastName}
              </TableCell>
              <TableCell align="right">
                {getLocation(row.locationId)}
                <IconButton
                  color="primary"
                  onClick={() => {
                    setEmployeToModify(row);
                    setIsOpen(true);
                  }}>
                  <EditIcon />
                </IconButton>
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
