import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/common/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './components/pages/Inicio'
import Error404 from "./components/pages/Error404"
import Menu from "./components/common/Menu";
import FormularioReceta from "./components/pages/recetas/FormularioRecetas";


function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/crearRecetas" element={<FormularioReceta></FormularioReceta>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;
