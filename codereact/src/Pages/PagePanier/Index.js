import {
  Grid,
  Typography,
  Box,
  CardMedia,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
import logo from "../../logo.png";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

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
      <Box
        sx={{
          width: "100%",
          height: 130,
          backgroundColor: "#9ab75f",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginRight={2}
        >
          <CardMedia
            component="img"
            image={logo}
            alt="Logo"
            sx={{ maxHeight: 100, maxWidth: 125, margin: 2 }}
          />
          <Typography variant="h4" color="white">
            {user.location}
          </Typography>
          <Typography variant="body1" color="white">
            {user.name}
            <IconButton>
              <AccountCircleRoundedIcon fontSize="large" />
            </IconButton>
          </Typography>
        </Stack>
      </Box>
    </Grid>
  );
}
