import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarLay = () => {
  return (
    <>
      <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Veterinaria Peyret</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Todos los productos</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/Alimentos">Alimentos</NavDropdown.Item>
              <NavDropdown.Item href="/category/Higiene">Higiene</NavDropdown.Item>
              <NavDropdown.Item href="/category/Medicación">Medicación</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                Ofertas (proximamente) 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
      </div>
    </>
  );
};

export default NavbarLay;
