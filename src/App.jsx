import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/common/Footer'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Inicio from './components/pages/Inicio'


function App() {
  return (
    <>
      <Inicio></Inicio>
      <Footer></Footer>
    </>
  )
}

export default App
