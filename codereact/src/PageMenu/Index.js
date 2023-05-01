import React from "react";
import { Grid, Paper } from "@mui/material";
import Header from "../Utils/Component/header";
import StoreTable from "./component/storeTable";
import NavigationBar from "../Utils/Component/navigationBar";

function createData(name, price) {
  return { name, price };
}

export default function PageMenu() {
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

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Header />
      <NavigationBar />
      <Grid>
        <Paper
          textAlign="center"
          elevation={3}
          sx={{
            p: 2,
            width: 750,
            marginBottom: 3,
            backgroundColor: "#9ab75f",
          }}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={6}>
              <StoreTable rows={store1} title="Bistro Boudreau" />
            </Grid>
            <Grid item xs={6}>
              <StoreTable rows={store2} title="Caféteria Comme Chez nous" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
