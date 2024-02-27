import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import Menu from "./components/common/Menu";

function App() {
  return (
    <>
      <Menu></Menu>
      <Inicio></Inicio>
      <Footer></Footer>
    </>
  );
}

export default App;
