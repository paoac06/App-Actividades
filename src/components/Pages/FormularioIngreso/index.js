import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const FormularioIngreso = () => {
  return (
    <Container sx={{ mt: 20 }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{ justifyContent: "center", display: "flex", my: 10 }}
      >
        App Actividades
      </Typography>
      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <TextField
          helperText="Please enter your Name"
          id="demo-helper-text-aligned"
          label="Name"
        />
      </Box>
      <Box sx={{ justifyContent: "center", display: "flex", mt: 5 }}>
        <Link to="/crearactividades" style={{ textDecoration: "none" }}>
          <Button variant="contained">Ingresar</Button>
        </Link>
      </Box>
    </Container>
  );
};
