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
        <Link to ="/" style={{textDecoration: 'none'}}>
        <Navbar.Brand>Veterinaria Peyret</Navbar.Brand>
        </Link> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"  style={{marginLeft:"20%"}}>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <Link to ="/category/Alimentos" style={{textDecoration: 'none'}}>
              <NavDropdown.ItemText > Alimentos</NavDropdown.ItemText>
              </Link>
              <Link to ="/category/Higiene" style={{textDecoration: 'none'}}>
              <NavDropdown.ItemText>Higiene</NavDropdown.ItemText>
              </Link>
              <Link to ="/category/Medicación" style={{textDecoration: 'none'}}> 
              <NavDropdown.ItemText>Medicación</NavDropdown.ItemText>
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item>
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
