import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import Menu from "./components/common/Menu";
import FormularioReceta from "./components/pages/recetas/FormularioRecetas";


function App() {
  return (
    <>
      <Menu></Menu>
      {/* <Inicio></Inicio> */}
      <FormularioReceta />
      <Footer></Footer>
    </>
  );
}

export default App;
