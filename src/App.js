import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { FormularioIngreso } from "./components/Pages/FormularioIngreso";
import { ListaBasica } from "./components/Pages/ListaBasica";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/formularioingreso" element={<FormularioIngreso />} />
        <Route path="/listabasica" element={<ListaBasica />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
