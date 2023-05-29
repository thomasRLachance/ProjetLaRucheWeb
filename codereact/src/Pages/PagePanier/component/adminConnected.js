import { Grid, IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React from "react";
import StoreTableMofiable from "./StoreTableModifiable";
import EmployeTableMofiable from "./EmployeTableModifiable";

function createData(name, price) {
  return { name, price };
}

function createEmploye(name, location) {
  return { name, location };
}

export default function AdminConnected() {
  const store1 = [
    createData("Repas Chaud", "2.00$"),
    createData("Jus de fruits", "0.50$"),
    createData("Smoothie", "Gratuit"),
    createData("Gatorade", "1.00$"),
    createData("Collation", "1.00$"),
    createData("Fruit", "0.50$"),
    createData("Lait au chocolat", "1.00$"),
    createData("Jus de légumes", "0.50$"),
    createData("Yop", "1.00$"),
    createData("Thé glacé", "1.00$"),
    createData("Soupe", "Gratuit"),
  ];

  const store2 = [
    createData("Repas Chaud", "3.00$"),
    createData("Sub'Vanier", "2.00$"),
    createData("Jus de fruits", "1.00$"),
    createData("Smoothie", "1.00$"),
    createData("Collation", "1.00$"),
    createData("Fruit", "0.50$"),
    createData("Lait au chocolat", "0.50$"),
    createData("Jus de légumes", "0.50$"),
    createData("Salade", "1.00$"),
  ];

  const employe = [
    createData("Alexandra Fortin", "Caféteria Comme Chez Nous"),
    createData("Samuelle Comtois", "Bistro Boudreau"),
    createData("Éléana Crèvecoueur", "Bistro Boudreau"),
    createData("Pascale Bouffard", "Administration"),
  ];

  return (
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
            <IconButton color="primary">
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
              <EmployeTableMofiable rows={employe} title="Liste des employés" />
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
              <StoreTableMofiable rows={store1} title="Bistro Boudreau" />
            </Grid>
            <Grid item xs={5}>
              <StoreTableMofiable
                rows={store2}
                title="Caféteria Comme Chez nous"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
