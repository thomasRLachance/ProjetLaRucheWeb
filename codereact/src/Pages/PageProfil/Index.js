import { Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InformationTable from "./component/informationTable";
import HeaderConnected from "../../Utils/Component/headerConnected";
import EditIcon from "@mui/icons-material/Edit";
import DialogEditProfil from "../../Utils/Component/DialogEditProfil";
import { Navigate } from "react-router";
import axios from "axios";

export default function PageProfil() {
  const [isModifyEmployeOpen, setIsModifyEmployeOpen] = useState(false);

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
  });

  return (
    <>
      {user.locationId === null && <Navigate replace to="/Erreur" />}
      <HeaderConnected user={user} />
      <Grid
        container
        direction="column"
        spacing={6}
        justifyContent="center"
        alignItems="center"
        marginTop={0.1}
      >
        <Typography variant="h4">Bonjour {user.firstName}</Typography>
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
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Typography
                variant="h6"
                component="div"
                color="white"
                gutterBottom
              >
                Information
              </Typography>
              <IconButton
                color="primary"
                onClick={() => setIsModifyEmployeOpen(true)}
              >
                <EditIcon />
              </IconButton>
            </Stack>
            <Grid
              container
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              marginBottom={2}
            >
              <Grid item xs={11}>
                <InformationTable user={user} title="Information" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <DialogEditProfil
        open={isModifyEmployeOpen}
        setIsOpen={setIsModifyEmployeOpen}
        title="Modifier le profil"
      />
    </>
  );
}
