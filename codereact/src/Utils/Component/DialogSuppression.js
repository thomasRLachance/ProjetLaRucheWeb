import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

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
  const token = sessionStorage.getItem("token");

  const headers = { Authorization: token }; // auth header with bearer token

  const [errorItem, setErrorItem] = useState(false);

  const handleSubmit = () => {
    if (deleteWhat === "employe") {
      axios
        .delete(
          `https://laruche-api-2.fly.dev/users/${employeToModify.userId}`,
          headers
        )
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
        .delete(
          `https://laruche-api-2.fly.dev/products/${itemToDelete.productId}`
        )
        .then((response) => {
          setItemToDelete({});
          setCurrentPassage(currentPassage + 1);
          setIsOpen(false);
        })
        .catch((err) => {
          console.log(err);
          setErrorItem(true);
        });
    }
  };

  return (
    <Dialog open={open}>
      {!errorItem && (
        <>
          {" "}
          <DialogTitle>
            Êtes-vous certain de vouloir supprimer cette élément?
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => setIsOpen(false)}>NON</Button>
            <Button onClick={handleSubmit}>OUI</Button>
          </DialogActions>
        </>
      )}
      {errorItem && (
        <>
          {" "}
          <DialogTitle>
            Vous ne pouvez pas supprimer cette item. L'item est lié à une ou
            plusieures ventes!
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={() => {
                setErrorItem(false);
                setIsOpen(false);
              }}
            >
              OK
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
