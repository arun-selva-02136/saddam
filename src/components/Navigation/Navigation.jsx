import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import img1 from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './Navigation.css'


function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md" className="navbar" fixed='top'>
      <Container classname="navbar1">
        <Navbar.Brand as={Link} to="/">
            <img src={img1} style={{width:'30px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} href="/gallery">Gallery</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
          <Button style={{background:'green',borderRadius:"20px",color:'white'}} className='btn'>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;