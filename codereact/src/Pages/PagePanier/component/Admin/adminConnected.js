import { Grid, IconButton, Paper, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import DialogEditMenuItem from "../../../../Utils/Component/DialogEditMenuItem";
import DialogEditEmploye from "../../../../Utils/Component/DialogEditEmploye";
import EmployeTableMofiable from "./component/EmployeTableModifiable";
import StoreTableMofiable from "./component/StoreTableModifiable";
import DialogAddMenuItem from "../../../../Utils/Component/DialogAddMenuItem";
import DialogAddEmploye from "../../../../Utils/Component/DialogAddEmploye";
import DialogSuppression from "../../../../Utils/Component/DialogSuppression";
import ItemTableModifiable from "./component/ItemTableModifiable";
import DialogAddItem from "../../../../Utils/Component/DialogAddItem";
import axios from "axios";

export default function AdminConnected({
  item,
  store1,
  store2,
  user,
  setUser,
  setItem,
  setStore1,
  setStore2,
}) {
  const [isBistroOpen, setIsBistroOpen] = useState(false);
  const [isCafeOpen, setIsCafeOpen] = useState(false);
  const [isEmployeOpen, setIsEmployeOpen] = useState(false);
  const [isAddItemOpenCafe, setIsAddItemOpenCafe] = useState(false);
  const [isAddItemOpenBistro, setIsAddItemOpenBistro] = useState(false);
  const [isAddEmployeOpen, setIsAddEmployeOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);
  const [employeToModify, setEmployeToModify] = useState({
    userId: 1,
    username: "placeholder",
    password: "placeholder",
    firstName: "placeholder",
    lastName: "placeholder",
    privileges: "placeholder",
    locationId: "placeholder",
    createdAt: "placeholder",
    updatedAt: "placeholder",
  });
  const [itemLocationToModify, setItemLocationToModify] = useState({
    productLocationId: 1,
    productId: 7,
    locationId: 1,
    price: "3.00",
    isActive: true,
    createdAt: "2023-06-13T21:38:16.000Z",
    updatedAt: "2023-06-13T21:38:16.000Z",
    product: {
      productId: 7,
      name: "Fruit",
      createdAt: "2023-06-13T20:55:48.000Z",
      updatedAt: "2023-06-13T20:55:48.000Z",
    },
  });
  const [itemToDelete, setItemToDelete] = useState({});
  const [deleteWhat, setDeleteWhat] = useState("");

  const navigate = useNavigate();

  const navigateCalendar = () => {
    navigate("/Calendrier");
  };

  const [employe, setEmploye] = useState([
    {
      userId: 1,
      username: "placeholder",
      password: "placeholder",
      firstName: "placeholder",
      lastName: "placeholder",
      privileges: "placeholder",
      locationId: "placeholder",
      createdAt: "placeholder",
      updatedAt: "placeholder",
    },
  ]);

  const [availableItemBistro, setavailableItemBistro] = useState([]);
  const [passage1, setPassage1] = useState(0);

  const [availableItemCafe, setavailableItemCafe] = useState([]);
  const [passage2, setPassage2] = useState(0);

  useEffect(() => {
    if (item[passage1]) {
      if (
        store1.filter((e) => e.product.name === item[passage1].name).length ===
        0
      ) {
        setavailableItemBistro([...availableItemBistro, item[passage1]]);
      }
      setPassage1(passage1 + 1);
    }

    if (item[passage2]) {
      if (
        store2.filter((e) => e.product.name === item[passage2].name).length ===
        0
      ) {
        setavailableItemCafe([...availableItemCafe, item[passage2]]);
      }
      setPassage2(passage2 + 1);
    }
  }, [
    item,
    store2,
    passage2,
    availableItemCafe,
    availableItemBistro,
    passage1,
    store1,
  ]);

  const [lastPassage, setLastPassage] = useState(0);
  const [currentPassage, setCurrentPassage] = useState(0);

  useEffect(() => {
    if (currentPassage !== lastPassage || currentPassage === 0) {
      axios
        .get(
          `https://laruche-api-2.fly.dev/users/${sessionStorage.getItem(
            "username"
          )}`
        )
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      //Get user

      setLastPassage(currentPassage);
      axios
        .get("https://laruche-api-2.fly.dev/users")
        .then((response) => {
          setEmploye(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    //Get item

    axios
      .get("https://laruche-api-2.fly.dev/products")
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //Get menu bistro

    axios
      .get("https://laruche-api-2.fly.dev/locations/1/productLocations")
      .then((response) => {
        setStore1(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //Get menu cafe

    axios
      .get("https://laruche-api-2.fly.dev/locations/2/productLocations")
      .then((response) => {
        setStore2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setPassage1(0);
    setPassage2(0);
    setavailableItemBistro([]);
    setavailableItemCafe([]);
  }, [currentPassage, lastPassage, setUser, setItem, setStore1, setStore2]);

  return (
    <>
      <Grid
        container
        direction="column"
        spacing={6}
        justifyContent="center"
        alignItems="center"
        marginTop={0.1}>
        <Typography variant="h4" gutterBottom>
          Bonjour {user.firstName}!
        </Typography>
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              width: 1000,
              height: 70,
              backgroundColor: "#9ab75f",
            }}>
            <Typography variant="h6" component="div" color="white" gutterBottom>
              Accès modifier calendrier
              <IconButton color="primary" onClick={navigateCalendar}>
                <CalendarMonthIcon fontSize="large" />
              </IconButton>
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              width: 1000,
              backgroundColor: "#9ab75f",
              padding: 1,
              marginBottom: 2,
            }}>
            <Typography variant="h6" component="div" color="white" gutterBottom>
              EMPLOYÉS
            </Typography>
            <Grid
              container
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              marginBottom={2}>
              <Grid item xs={11}>
                <EmployeTableMofiable
                  rows={employe}
                  title="Liste des employés"
                  setIsOpen={setIsEmployeOpen}
                  setIsAddOpen={setIsAddEmployeOpen}
                  setIsDeleteOpen={setIsDeleteOpen}
                  setEmployeToModify={setEmployeToModify}
                  setDeleteWhat={setDeleteWhat}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              width: 1000,
              backgroundColor: "#9ab75f",
              padding: 1,
              marginBottom: 2,
            }}>
            <Typography variant="h6" component="div" color="white" gutterBottom>
              Items
            </Typography>
            <Grid
              container
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              marginBottom={2}>
              <Grid item xs={11}>
                <ItemTableModifiable
                  rows={item}
                  title="Liste des items"
                  setAddOpen={setIsAddItemOpen}
                  setIsDeleteOpen={setIsDeleteOpen}
                  setItemToDelete={setItemToDelete}
                  setDeleteWhat={setDeleteWhat}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              width: 1000,
              backgroundColor: "#9ab75f",
              padding: 1,
              marginBottom: 2,
            }}>
            <Typography variant="h6" component="div" color="white" gutterBottom>
              MENU
            </Typography>
            <Grid
              container
              direction="row"
              spacing={2}
              marginLeft={2}
              marginBottom={2}>
              <Grid item xs={6}>
                <StoreTableMofiable
                  rows={store1}
                  title="Bistro Boudreau"
                  setIsOpen={setIsBistroOpen}
                  setAddOpen={setIsAddItemOpenBistro}
                  setIsDeleteOpen={setIsDeleteOpen}
                  isAddPossible={availableItemBistro.length > 0}
                  setItemLocationToModify={setItemLocationToModify}
                />
              </Grid>
              <Grid item xs={5}>
                <StoreTableMofiable
                  rows={store2}
                  title="Caféteria Comme Chez nous"
                  setIsOpen={setIsCafeOpen}
                  setAddOpen={setIsAddItemOpenCafe}
                  setIsDeleteOpen={setIsDeleteOpen}
                  isAddPossible={availableItemCafe.length > 0}
                  setItemLocationToModify={setItemLocationToModify}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <DialogAddItem
        rows={item}
        title={"Ajouter un item"}
        open={isAddItemOpen}
        setIsOpen={setIsAddItemOpen}
        setCurrentPassage={setCurrentPassage}
        currentPassage={currentPassage}
      />

      <DialogEditMenuItem
        item={itemLocationToModify}
        title="Bistro Boudreau"
        open={isBistroOpen}
        setIsOpen={setIsBistroOpen}
        setCurrentPassage={setCurrentPassage}
        currentPassage={currentPassage}
      />
      <DialogEditMenuItem
        item={itemLocationToModify}
        title="Caféteria Comme Chez nous"
        open={isCafeOpen}
        setIsOpen={setIsCafeOpen}
        setCurrentPassage={setCurrentPassage}
        currentPassage={currentPassage}
      />
      <DialogEditEmploye
        user={employeToModify}
        title="Modifier un employé"
        open={isEmployeOpen}
        setIsOpen={setIsEmployeOpen}
        setCurrentPassage={setCurrentPassage}
        currentPassage={currentPassage}
      />
      <DialogAddEmploye
        title="Ajouter un employer"
        open={isAddEmployeOpen}
        setIsOpen={setIsAddEmployeOpen}
        setCurrentPassage={setCurrentPassage}
        currentPassage={currentPassage}
      />

      <DialogAddMenuItem
        title="Ajouter item pour le Bistro Boudreau"
        open={isAddItemOpenBistro}
        setIsOpen={setIsAddItemOpenBistro}
        availableItem={availableItemBistro}
        url="https://laruche-api-2.fly.dev/locations/1/productLocations"
        setCurrentPassage={setCurrentPassage}
        currentPassage={currentPassage}
      />

      <DialogAddMenuItem
        title="Ajouter item pour la Caféteria Comme Chez nous"
        open={isAddItemOpenCafe}
        setIsOpen={setIsAddItemOpenCafe}
        availableItem={availableItemCafe}
        url="https://laruche-api-2.fly.dev/locations/2/productLocations"
        setCurrentPassage={setCurrentPassage}
        currentPassage={currentPassage}
      />

      <DialogSuppression
        open={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        employeToModify={employeToModify}
        setEmployeToModify={setEmployeToModify}
        itemToDelete={itemToDelete}
        setItemToDelete={setItemToDelete}
        deleteWhat={deleteWhat}
        setCurrentPassage={setCurrentPassage}
        currentPassage={currentPassage}
      />
    </>
  );
}
