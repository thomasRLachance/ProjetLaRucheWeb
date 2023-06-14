import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import HeaderConnected from "../../Utils/Component/headerConnected";
import { Grid, Paper, Typography } from "@mui/material";
import axios from "axios";

export default function PageCalendrier() {

  const [user, setUser] = useState({
    userId: 1,
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    privileges: "",
    locationId: "",
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
  }, []);

  return (
    <>
      {user.locationId === undefined && <Navigate replace to="/Erreur" />}
      <HeaderConnected user={user} />
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
