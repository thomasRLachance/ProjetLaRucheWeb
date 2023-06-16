import React, { useEffect, useState } from "react";
import { IconButton, TableCell, TableRow, Typography } from "@mui/material";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

export default function ItemTableRow({ item, total, setTotal }) {
  const [quantite, setQuantite] = useState(0);
  const [passage, setPassage] = useState(0);

  useEffect(() => {
    if (passage === 0) {
      setPassage(passage + 1);
      if (sessionStorage.getItem("qte" + item.product.name) !== null) {
        setQuantite(
          parseFloat(sessionStorage.getItem("qte" + item.product.name))
        );
      }
    } else {
      sessionStorage.setItem("qte" + item.product.name, quantite);
    }
  }, [passage]);

  const setPrice = (price) => {
    return price * quantite;
  };

  const handleAddPrice = () => {
    setPassage(passage + 1);
    setQuantite(quantite + 1);
    var tots = parseFloat(parseFloat(total) + parseFloat(item.price));
    setTotal(tots);
  };

  const handleReducePrice = () => {
    if (quantite !== 0) {
      setPassage(passage + 1);
      setQuantite(quantite - 1);
      if (total - item.price !== 0) {
        setTotal(total - item.price);
      } else {
        setTotal(0);
      }
    }
  };

  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}>
      <TableCell component="th" scope="row">
        {item.product.name} ({item.price}$){" "}
        <Typography color="red">{item.isActive ? "" : "Inactif"}</Typography>
      </TableCell>
      <TableCell align="right">
        <IconButton
          color="error"
          onClick={handleReducePrice}
          disabled={!item.isActive}>
          <RemoveCircleOutlineRoundedIcon />
        </IconButton>
      </TableCell>
      <TableCell align="right">{quantite}</TableCell>
      <TableCell align="right">
        <IconButton
          color="success"
          onClick={handleAddPrice}
          disabled={!item.isActive}>
          <ControlPointRoundedIcon />
        </IconButton>
      </TableCell>
      <TableCell align="right">{setPrice(item.price)}</TableCell>
    </TableRow>
  );
}
