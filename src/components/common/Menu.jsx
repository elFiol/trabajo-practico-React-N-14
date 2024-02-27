import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import logoReceta from '../../assets/RoyalChef_logo.png'

const Menu = () => {
  return (
    <Navbar expand="lg" className="navBar">
      <Container>
        <Navbar.Brand href="#home"><img src={logoReceta} alt="imagen del logo" className='img-fluid' width={150} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='navLink'>Inicio</Nav.Link>
            <Nav.Link href="#link" className='navLink'>Administrador</Nav.Link>
            <Nav.Link href="#link" className='navLink'>Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
