import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import React from "react";
import { Navigate } from "react-router";
import HeaderConnected from "../../Utils/Component/headerConnected";
import { Grid, Paper, Typography } from "@mui/material";

export default function PageCalendrier() {
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
    <>
      {user.location === undefined && <Navigate replace to="/Erreur" />}
      <HeaderConnected location={user.location} name={user.name} />
      <Grid container justifyContent="center" alignItems="center">
        <Paper
          elevation={3}
          sx={{
            width: 1000,
            padding: 1,
            marginBottom: 2,
          }}
        >
          <Typography variant="h3" gutterBottom>
            Historique des ventes
          </Typography>
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </Paper>
      </Grid>
    </>
  );
}
