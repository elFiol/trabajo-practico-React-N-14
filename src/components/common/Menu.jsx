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
            <Nav.Link href="#link" className='navLink'>Recetas</Nav.Link>
            <Nav.Link href="#link" className='navLink'>Nosotros</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
