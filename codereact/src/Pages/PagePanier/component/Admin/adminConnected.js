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

function createEmploye(name, location, username, password) {
  return { name, location, username, password };
}

export default function AdminConnected({ item, store1, store2, user }) {
  const [isBistroOpen, setIsBistroOpen] = useState(false);
  const [isCafeOpen, setIsCafeOpen] = useState(false);
  const [isEmployeOpen, setIsEmployeOpen] = useState(false);
  const [isAddItemOpenCafe, setIsAddItemOpenCafe] = useState(false);
  const [isAddItemOpenBistro, setIsAddItemOpenBistro] = useState(false);
  const [isAddEmployeOpen, setIsAddEmployeOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);

  const navigate = useNavigate();

  const navigateCalendar = () => {
    navigate("/Calendrier");
  };

  const [employe, setEmploye] = useState([
    createEmploye(
      "Alexandra Fortin",
      "Caféteria Comme Chez Nous",
      "AFORT",
      "abc123"
    ),
    createEmploye("Samuelle Comtois", "Bistro Boudreau", "SCOMT", "abc123"),
    createEmploye("Éléana Crèvecoueur", "Bistro Boudreau", "ECREVE", "abc123"),
    createEmploye("Pascale Bouffard", "Administration", "PBOUF", "abc123"),
  ]);

  const [availableItemBistro, setavailableItemBistro] = useState([]);
  const [passage1, setPassage1] = useState(0);

  const [availableItemCafe, setavailableItemCafe] = useState([]);
  const [passage2, setPassage2] = useState(0);

  useEffect(() => {
    if (item[passage1]) {
      if (store1.filter((e) => e.name === item[passage1].name).length === 0) {
        setavailableItemBistro([
          ...availableItemBistro,
          {
            id: availableItemBistro.length,
            name: item[passage1].name,
          },
        ]);
      }
      setPassage1(passage1 + 1);
    }

    if (item[passage2]) {
      if (store2.filter((e) => e.name === item[passage2].name).length === 0) {
        setavailableItemCafe([
          ...availableItemCafe,
          {
            id: availableItemCafe.length,
            name: item[passage2].name,
          },
        ]);
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
          Bonjour {user.name}
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
      />

      <DialogEditMenuItem
        rows={store1}
        title="Bistro Boudreau"
        open={isBistroOpen}
        setIsOpen={setIsBistroOpen}
      />
      <DialogEditMenuItem
        rows={store2}
        title="Caféteria Comme Chez nous"
        open={isCafeOpen}
        setIsOpen={setIsCafeOpen}
      />
      <DialogEditEmploye
        rows={employe}
        title="Liste des employés"
        open={isEmployeOpen}
        setIsOpen={setIsEmployeOpen}
      />
      <DialogAddEmploye
        title="Ajouter un employer"
        open={isAddEmployeOpen}
        setIsOpen={setIsAddEmployeOpen}
      />

      <DialogAddMenuItem
        title="Ajouter item pour le Bistro Boudreau"
        open={isAddItemOpenBistro}
        setIsOpen={setIsAddItemOpenBistro}
        availableItem={availableItemBistro}
      />

      <DialogAddMenuItem
        title="Ajouter item pour la Caféteria Comme Chez nous"
        open={isAddItemOpenCafe}
        setIsOpen={setIsAddItemOpenCafe}
        availableItem={availableItemCafe}
      />

      <DialogSuppression open={isDeleteOpen} setIsOpen={setIsDeleteOpen} />
    </>
  );
}
