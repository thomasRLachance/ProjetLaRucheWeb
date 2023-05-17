import {
  Grid,
} from "@mui/material";
import React from "react";
import HeaderConnected from "../../Utils/Component/headerConnected";
import AdminConnected from "./component/adminConnected";

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

  const user = {
    name: sessionStorage.getItem("name"),
    location: getLocation(sessionStorage.getItem("location")),
  };

  return (
    <Grid container>
      <HeaderConnected location={user.location} name={user.name}/>
      {user.location === "Administration" && (<AdminConnected />)}
      {user.location === "Bistro Boudreau" && (<p>Allo Bistro</p>)}
      {user.location === "Caféteria Comme Chez nous" && (<p>Allo café</p>)}
    </Grid>
  );
}
