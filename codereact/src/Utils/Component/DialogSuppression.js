import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";

export default function DialogSuppression({ open, setIsOpen }) {
  return (
    <Dialog open={open}>
      <DialogTitle>
        Êtes-vous certain de vouloir supprimer cette élément?
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>NON</Button>
        <Button onClick={() => setIsOpen(false)}>OUI</Button>
      </DialogActions>
    </Dialog>
  );
}
