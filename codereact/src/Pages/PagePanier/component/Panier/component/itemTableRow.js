import React, { useState } from "react";
import { IconButton, TableCell, TableRow } from "@mui/material";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

export default function ItemTableRow({ item, total, setTotal }) {
  const [quantite, setQuantite] = useState(0);

  const setPrice = (price) => {
    return price * quantite;
  };

  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell component="th" scope="row">
        {item.name} ({item.price}$)
      </TableCell>
      <TableCell align="right">
        <IconButton
          color="error"
          onClick={() => {
            if (quantite !== 0) {
              setQuantite(quantite - 1);
              setTotal(total - item.price);
            }
          }}
        >
          <RemoveCircleOutlineRoundedIcon />
        </IconButton>
      </TableCell>
      <TableCell align="right">{quantite}</TableCell>
      <TableCell align="right">
        <IconButton
          color="success"
          onClick={() => {
            setQuantite(quantite + 1);
            setTotal(total + item.price);
          }}
        >
          <ControlPointRoundedIcon />
        </IconButton>
      </TableCell>
      <TableCell align="right">{setPrice(item.price)}</TableCell>
    </TableRow>
  );
}
