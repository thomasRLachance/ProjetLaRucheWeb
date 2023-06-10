import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import HeaderConnected from "../../Utils/Component/headerConnected";
import { Navigate } from "react-router";
import AdminConnected from "./component/Admin/adminConnected";
import ItemTable from "./component/Panier/ItemTable";
import axios from "axios";

function createData(name, price) {
  return { name, price };
}

function createItem(name) {
  return { name };
}
export default function PagePanier() {
  const getLocation = (locationId) => {
    if (locationId === "1") {
      return "Bistro Boudreau";
    } else if (locationId === "2") {
      return "Caféteria Comme Chez nous";
    } else if (locationId === "3") {
      return "Administration";
    }
  };

  const [item, setItem] = useState([
    createItem("Repas Chaud"),
    createItem("Jus de fruits"),
    createItem("Smoothie"),
    createItem("Gatorade"),
    createItem("Collation"),
    createItem("Fruit"),
    createItem("Lait au chocolat"),
    createItem("Jus de légumes"),
    createItem("Yop"),
    createItem("Thé glacé"),
    createItem("Soupe"),
  ]);

  const [store1, setStore1] = useState([
    createData("Repas Chaud", 2.0),
    createData("Jus de fruits", 0.5),
    createData("Smoothie", 0),
    createData("Gatorade", 1.0),
    createData("Collation", 1.0),
    createData("Fruit", 0.5),
    createData("Lait au chocolat", 1.0),
    createData("Jus de légumes", 0.5),
    createData("Yop", 1.0),
    createData("Thé glacé", 1.0),
    createData("Soupe", 0),
  ]);

  const [store2, setStore2] = useState([
    createData("Repas Chaud", 3.0),
    createData("Sub'Vanier", 2.0),
    createData("Jus de fruits", 1.0),
    createData("Smoothie", 1.0),
    createData("Collation", 1.0),
    createData("Fruit", 0.5),
    createData("Lait au chocolat", 0.5),
    createData("Jus de légumes", 0.5),
    createData("Salade", 1.0),
  ]);

  const [user, setUser] = useState({
    name: sessionStorage.getItem("name"),
    location: getLocation(sessionStorage.getItem("location")),
    username: "test",
    password: "abc123",
  });

  useEffect(() => {
    //Get user
    axios
      .get("https://TODO.com/getUser")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //Get item

    axios
      .get("https://TODO.com/getItem")
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //Get menu bistro

    axios
      .get("https://TODO.com/getBistro")
      .then((response) => {
        setStore1(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //Get menu cafe

    axios
      .get("https://TODO.com/getCafe")
      .then((response) => {
        setStore2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <Grid container>
      <HeaderConnected location={user.location} />
      {user.location === "Administration" && (
        <AdminConnected
          store1={store1}
          store2={store2}
          user={user}
          item={item}
        />
      )}
      {user.location === "Bistro Boudreau" && (
        <ItemTable items={store1} user={user} />
      )}
      {user.location === "Caféteria Comme Chez nous" && (
        <ItemTable items={store2} user={user} />
      )}
      {user.location === undefined && <Navigate replace to="/Erreur" />}
    </Grid>
  );
}
