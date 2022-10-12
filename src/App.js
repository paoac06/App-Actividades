import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { FormularioIngreso } from "./components/Pages/FormularioIngreso";
import { CrearActividades } from "./components/Pages/CrearActividades";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/formularioingreso" element={<FormularioIngreso />} />
        <Route path="/crearactividades" element={<CrearActividades />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
