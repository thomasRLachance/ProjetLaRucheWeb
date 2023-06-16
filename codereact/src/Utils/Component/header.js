import React from "react";
import {
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";
  import logo from "../../logo.png";

export default function Header() {
    return (
        <Grid>
          <CardMedia
            component="img"
            image={logo}
            alt="Logo"
            sx={{ maxWidth: 400 }}
          />
          <CardContent>
            <Typography gutterBottom component="div">
              Produire - Transformer - Distribuer
            </Typography>
          </CardContent>
        </Grid>
    )
}