import React from "react";
import {
  Typography,
  Box,
  CardMedia,
  Stack,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import logo from "../../logo.png";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useNavigate } from "react-router";

export default function HeaderConnected({ location }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDisconnectClicked = () => {
    sessionStorage.setItem("name", undefined);
    sessionStorage.setItem("location", undefined);
    navigate("/");
  };

  const navigateConnecter = () => {
    navigate("/Connecter");
  };

  const navigateProfil = () => {
    navigate("/Profil");
  };
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
        <Button onClick={navigateConnecter}>
          <CardMedia
            component="img"
            image={logo}
            alt="Logo"
            sx={{ maxHeight: 100, maxWidth: 125, margin: 1 }}
          />
        </Button>
        <Typography variant="h4" color="white">
          {location}
        </Typography>
        <Typography variant="body1" color="white">
          <IconButton
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <AccountCircleRoundedIcon fontSize="large" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={navigateProfil}>Profil</MenuItem>
            <MenuItem onClick={handleDisconnectClicked}>
              Se déconnecter
            </MenuItem>
          </Menu>
        </Typography>
      </Stack>
    </Box>
  );
}
