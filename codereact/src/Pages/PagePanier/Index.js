import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import HeaderConnected from "../../Utils/Component/headerConnected";
import { Navigate } from "react-router";
import AdminConnected from "./component/Admin/adminConnected";
import ItemTable from "./component/Panier/ItemTable";
import axios from "axios";

export default function PagePanier() {
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
    userId: 1,
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    privileges: "",
    locationId: null,
  });

  useEffect(() => {
    //Get user
    axios
      .get(`http://localhost:3000/users/${sessionStorage.getItem("username")}`)
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
      <HeaderConnected user={user} />
      {user.locationId === 1 && (
        <AdminConnected
          store1={store1}
          store2={store2}
          user={user}
          item={item}
          setUser={setUser}
          setItem={setItem}
          setStore1={setStore1}
          setStore2={setStore2}
        />
      )}
      {user.locationId === 2 && <ItemTable items={store1} user={user} />}
      {user.locationId === 3 && <ItemTable items={store2} user={user} />}
      {user.locationId === null && <Navigate replace to="/Erreur" />}
    </Grid>
  );
}
