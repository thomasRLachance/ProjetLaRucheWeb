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
            <TableCell align="right">{user.name}</TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component="th" scope="row">
              Location :
            </TableCell>
            <TableCell align="right">{user.location}</TableCell>
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
