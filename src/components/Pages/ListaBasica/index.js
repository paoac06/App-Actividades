import React, { useState } from "react";
import Box from "@mui/material/Box";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Button,
  Grid,
  IconButton,
  Typography,
  Checkbox,
  DialogTitle,
  DialogContent,
  Dialog,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import OutlinedInput from "@mui/material/OutlinedInput";
import DeleteIcon from "@mui/icons-material/Delete";
import AppBar from "@mui/material/AppBar";
import { BarraIconos } from "../../BarraIconos";

let lastId = 0;

export const ListaBasica = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  const addTarea = (texto) => {
    if (texto === "") return;
    const nuevasTareas = [
      ...listaTareas,
      { texto, completada: false, id: lastId++ },
    ];
    setListaTareas(nuevasTareas);
    setNuevaTarea("");
    setOpen(true);
    setDialogOpen(false);
  };

  const completarTarea = (tarea) => {
    const nuevasTareas = [
      ...listaTareas.filter((i) => i.id !== tarea.id),
      { texto: tarea.texto, id: tarea.id, completada: !tarea.completada },
    ];
    setListaTareas(nuevasTareas);
  };

  const deleteTarea = (tarea) => {
    const nuevasTareas = [...listaTareas.filter((i) => i.id !== tarea.id)];
    setListaTareas(nuevasTareas);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box>
        <AppBar position="static" style={{ backgroundColor: "#ef4444" }}>
          <BarraIconos setDialogOpen={setDialogOpen} />
        </AppBar>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box sx={{ mt: 10, p: 2 }}>
            <Typography sx={{ fontWeight: "bold", ml: 2, fontSize: 20 }}>
              Actividades:
              <Button onClick={() => setDialogOpen(true)}>
                <AddIcon />
              </Button>
            </Typography>
            <Box sx={{ cursor: "pointer", display: "flex", p: 2 }}>
              <Box>Lista de actividades</Box>

              <IconButton size="large" color="inherit"></IconButton>
              <Box onClick={handleClick}>
                {open ? <ExpandMore /> : <ExpandLess />}
              </Box>
            </Box>
            <Box>
              {listaTareas.length === 0 && (
                <Box>No hay actividades. Agrega alguna</Box>
              )}
              {open &&
                listaTareas
                  .sort((a, b) => a.id - b.id)
                  .map((tarea) => {
                    console.log(tarea.id, tarea.completada);
                    return (
                      <Box key={tarea.id}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "left",
                            textDecoration: tarea.completada
                              ? "line-through"
                              : undefined,
                          }}
                        >
                          <Box>
                            <Checkbox
                              checked={tarea.completada}
                              onClick={() => completarTarea(tarea)}
                            />
                            {tarea.texto}
                          </Box>
                          <Button onClick={() => deleteTarea(tarea)}>
                            <DeleteIcon />
                          </Button>
                        </Box>
                      </Box>
                    );
                  })}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <OutlinedInput
                placeholder="Agrega una actividad"
                onChange={(e) => setNuevaTarea(e.target.value)}
                value={nuevaTarea}
              />
              <Button onClick={() => addTarea(nuevaTarea)}>
                <AddIcon />
              </Button>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    </>
  );
};
