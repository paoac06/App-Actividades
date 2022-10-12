import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

export const ListaBasica = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
      }}
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Lista de Actividades" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <Box>
              <ListItemIcon>
                <StarBorder sx={{ mr: 1 }} />
                <ListItemText primary="Actividad 1" />
              </ListItemIcon>
            </Box>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Box sx={{}}>
              <ListItemIcon>
                <StarBorder sx={{ mr: 1 }} />
                <ListItemText primary="Actividad 2" />
              </ListItemIcon>
            </Box>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <Box>
              <ListItemIcon>
                <StarBorder sx={{ mr: 1 }} />
                <ListItemText primary="Actividad 3" />
              </ListItemIcon>
            </Box>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};
