import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import axios from "axios";
import React from "react";

export default function DialogSuppression({
  open,
  setIsOpen,
  employeToModify,
  setEmployeToModify,
  itemToDelete,
  setItemToDelete,
  deleteWhat,
  currentPassage,
  setCurrentPassage,
}) {
  const handleSubmit = () => {
    if (deleteWhat === "employe") {
      axios
        .delete(`http://localhost:3000/users/${employeToModify.userId}`)
        .then((response) => {
          setEmployeToModify({});
          setCurrentPassage(currentPassage + 1);
          setIsOpen(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (deleteWhat === "item") {
      axios
        .delete(`http://localhost:3000/products/${itemToDelete.productId}`)
        .then((response) => {
          setItemToDelete({});
          setCurrentPassage(currentPassage + 1);
          setIsOpen(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Dialog open={open}>
      <DialogTitle>
        Êtes-vous certain de vouloir supprimer cette élément?
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)}>NON</Button>
        <Button onClick={handleSubmit}>OUI</Button>
      </DialogActions>
    </Dialog>
  );
}
