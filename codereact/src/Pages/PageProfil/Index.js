import { Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import InformationTable from "./component/informationTable";
import HeaderConnected from "../../Utils/Component/headerConnected";
import EditIcon from "@mui/icons-material/Edit";
import DialogEditProfil from "../../Utils/Component/DialogEditProfil";
import { Navigate } from "react-router";

export default function PageProfil() {
  const [isModifyEmployeOpen, setIsModifyEmployeOpen] = useState(false);

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
    username: "test",
    password: "abc123",
  };

  return (
    <>
      {user.location === undefined && <Navigate replace to="/Erreur" />}
      <HeaderConnected location={user.location} />
      <Grid
        container
        direction="column"
        spacing={6}
        justifyContent="center"
        alignItems="center"
        marginTop={0.1}
      >
        <Typography variant="h4">Bonjour {user.name}</Typography>
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
