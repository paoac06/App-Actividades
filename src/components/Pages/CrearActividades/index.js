import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import { BarraIconos } from "../../BarraIconos";
import { ListaBasica } from "../../ListaBasica";
import Grid from "@mui/material/Grid";

export const CrearActividades = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#ef4444" }}>
          <BarraIconos />
        </AppBar>
      </Box>
      <Grid container sx={{ mt: 0 }}>
        <Box
          sx={{ p: 3, width: 300, height: 900 }}
          style={{ background: "#f5f5f4" }}
        >
          <Typography
            variant="h5"
            sx={{
              mt: 5,
              justifyContent: "start",
              display: "flex",
              fontWeight: "bold",
            }}
            style={{ color: "#4b5563" }}
          >
            Actividades
          </Typography>
          <ListaBasica />
        </Box>
      </Grid>
    </>
  );
};
