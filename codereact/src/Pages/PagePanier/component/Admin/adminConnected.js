import { Grid, IconButton, Paper, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import DialogEditItem from "../../../../Utils/Component/DialogEditItem";
import DialogEditEmploye from "../../../../Utils/Component/DialogEditEmploye";
import EmployeTableMofiable from "./component/EmployeTableModifiable";
import StoreTableMofiable from "./component/StoreTableModifiable";

function createEmploye(name, location) {
  return { name, location };
}

export default function AdminConnected({ store1, store2 }) {
  const [isBistroOpen, setIsBistroOpen] = useState(false);
  const [isCafeOpen, setIsCafeOpen] = useState(false);
  const [isEmployeOpen, setIsEmployeOpen] = useState(false);

  const navigate = useNavigate();

  const navigateCalendar = () => {
    navigate("/Calendrier");
  };

  const [employe, setEmploye] = useState([
    createEmploye("Alexandra Fortin", "Caféteria Comme Chez Nous"),
    createEmploye("Samuelle Comtois", "Bistro Boudreau"),
    createEmploye("Éléana Crèvecoueur", "Bistro Boudreau"),
    createEmploye("Pascale Bouffard", "Administration"),
  ]);

  return (
    <>
      <Grid
        container
        direction="column"
        spacing={6}
        justifyContent="center"
        alignItems="center"
        marginTop={0.1}
      >
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              width: 1000,
              height: 70,
              backgroundColor: "#9ab75f",
            }}
          >
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
            }}
          >
            <Typography variant="h6" component="div" color="white" gutterBottom>
              EMPLOYÉS
            </Typography>
            <Grid
              container
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              marginBottom={2}
            >
              <Grid item xs={11}>
                <EmployeTableMofiable
                  rows={employe}
                  title="Liste des employés"
                  setIsOpen={setIsEmployeOpen}
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
            }}
          >
            <Typography variant="h6" component="div" color="white" gutterBottom>
              MENU
            </Typography>
            <Grid
              container
              direction="row"
              spacing={2}
              marginLeft={2}
              marginBottom={2}
            >
              <Grid item xs={6}>
                <StoreTableMofiable
                  rows={store1}
                  title="Bistro Boudreau"
                  setIsOpen={setIsBistroOpen}
                />
              </Grid>
              <Grid item xs={5}>
                <StoreTableMofiable
                  rows={store2}
                  title="Caféteria Comme Chez nous"
                  setIsOpen={setIsCafeOpen}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <DialogEditItem
        rows={store1}
        title="Bistro Boudreau"
        open={isBistroOpen}
        setIsOpen={setIsBistroOpen}
      />
      <DialogEditItem
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
    </>
  );
}
