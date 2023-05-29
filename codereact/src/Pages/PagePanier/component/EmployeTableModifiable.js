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
import React from "react";

export default function EmployeTableMofiable({ rows, title }) {
  return (
    <TableContainer component={Paper}>
      <Toolbar>
        <Stack justifyContent="space-between" direction="row" spacing={2}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <IconButton color="primary">
            <EditIcon />
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
  );
}
