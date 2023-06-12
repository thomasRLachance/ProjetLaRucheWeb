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
    {
      productId: 1,
      name: "placeholder",
      createdAt: "placeholder",
      updatedAt: "placeholder",
    },
  ]);

  const [store1, setStore1] = useState([
    {
      productLocationId: 1,
      productId: 1,
      locationId: 1,
      isActive: true,
      createdAt: "placeholder",
      updatedAt: "placeholder",
      product: {
        productId: 1,
        name: "placeholder",
        createdAt: "placeholder",
        updatedAt: "placeholder",
      },
    },
  ]);

  const [store2, setStore2] = useState([
    {
      productLocationId: 1,
      productId: 1,
      locationId: 2,
      isActive: true,
      createdAt: "placeholder",
      updatedAt: "placeholder",
      product: {
        productId: 1,
        name: "placeholder",
        createdAt: "placeholder",
        updatedAt: "placeholder",
      },
    },
  ]);

  const [user, setUser] = useState({
    name: sessionStorage.getItem("name"),
    location: getLocation("3"),
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
      .get("http://localhost:3000/products")
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //Get menu bistro

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
