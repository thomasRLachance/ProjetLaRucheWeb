import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import Header from "../../Utils/Component/header";
import StoreTable from "./component/storeTable";
import NavigationBar from "../../Utils/Component/navigationBar";
import axios from "axios";

export default function PageMenu() {
  const [store1, setStore1] = useState([]);

  const [store2, setStore2] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/locations/1/productLocations")
      .then((response) => {
        setStore1(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //Get menu cafe

    axios
      .get("http://localhost:3000/locations/2/productLocations")
      .then((response) => {
        setStore2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
