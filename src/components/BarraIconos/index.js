import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InputBase from "@mui/material/InputBase";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import Toolbar from "@mui/material/Toolbar";

export const BarraIconos = () => {
  return (
    <Toolbar>
      <IconButton size="large" color="inherit" sx={{ ml: 2 }}>
        <MenuIcon />
      </IconButton>
      <IconButton size="large" color="inherit" sx={{ mr: 1 }}>
        <HomeIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        style={{ color: "white" }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton size="large" color="inherit">
        <AddIcon />
      </IconButton>
      <IconButton size="large" color="inherit">
        <NotificationsIcon />
      </IconButton>
      <IconButton size="large" color="inherit">
        <PersonIcon />
      </IconButton>
    </Toolbar>
  );
};
