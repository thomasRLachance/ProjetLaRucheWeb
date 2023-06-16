import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import React from "react";

export default function InformationTable({ user, title }) {
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
      <Table title={title}>
        <TableBody>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component="th" scope="row">
              Nom :
            </TableCell>
            <TableCell align="right">
              {user.firstName} {user.lastName}
            </TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component="th" scope="row">
              Location :
            </TableCell>
            <TableCell align="right">{getLocation(user.locationId)}</TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component="th" scope="row">
              Nom d'utilisateur :
            </TableCell>
            <TableCell align="right">{user.username}</TableCell>
          </TableRow>

          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component="th" scope="row">
              Mot de passe :
            </TableCell>
            <TableCell align="right">{user.password}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
