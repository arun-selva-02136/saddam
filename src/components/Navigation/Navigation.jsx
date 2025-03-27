import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiLogin } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import img1 from '../../assets/logo.png';
import { Link, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Dashboard from '../../pages/Dashboard/Dashboard';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import './Navigation.css';

function Navigation() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <Navbar collapseOnSelect expand="md" className="navbar" fixed='top'>
      <Container classname="navbar1">
        <Navbar.Brand as={Link} to="/">
            <img src={img1} style={{width:'35px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navigate ms-auto">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className='navigate ms-auto'>
          <Button style={{background:'#39DB4A',borderRadius:"20px",color:'white',border:'none'}} className='btn' onClick={() => setShowLogin(true)}>Login <CiLogin /></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {showLogin && <Login onClose={() => setShowLogin(false)} />}
      <div style={{marginTop:'50px'}}>
      <Routes>
      <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
    </Routes>
      </div>
   
    </>
  );
}

export default Navigation;
