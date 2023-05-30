import React from "react";
import { Typography, Box, CardMedia, Stack, IconButton } from "@mui/material";
import logo from "../../logo.png";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

export default function HeaderConnected({ name, location }) {
  return (
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
          {location}
        </Typography>
        <Typography variant="body1" color="white">
          <IconButton>
            {name}
            <AccountCircleRoundedIcon fontSize="large" />
          </IconButton>
        </Typography>
      </Stack>
    </Box>
  );
}
