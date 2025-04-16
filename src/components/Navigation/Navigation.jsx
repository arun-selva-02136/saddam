import React, { useState, useEffect } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { CiLogin, CiLogout } from "react-icons/ci";
import img1 from '../../assets/logo.png';
import { auth } from '../../pages/Firebase/config';
import Login from '../Login/Login';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [navExpanded, setNavExpanded] = useState(false); // new state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const handleNavLinkClick = (path) => {
    setNavExpanded(false);
    setTimeout(() => navigate(path), 100); // small delay
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        className="navbar"
        fixed="top"
        expanded={navExpanded} // control expanded
        onToggle={setNavExpanded} // update on toggle
        
      >
        <Container className="navbar1">
          <Navbar.Brand as={Link} to="/">
            <img src={img1} style={{ width: '43px' }} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navigate ms-auto">
              <Nav.Link as={Link} to="/" onClick={handleNavLinkClick} style={{ color: location.pathname === "/" ? "#39DB4A" : "black" }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/menu" onClick={handleNavLinkClick} style={{ color: location.pathname === "/menu" ? "#39DB4A" : "black" }}>Menu</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleNavLinkClick} style={{ color: location.pathname === "/about" ? "#39DB4A" : "black" }}>About</Nav.Link>
              <Nav.Link as={Link} to="/gallery" onClick={handleNavLinkClick} style={{ color: location.pathname === "/gallery" ? "#39DB4A" : "black" }}>Gallery</Nav.Link>
            </Nav>
            <Nav className="navigate ms-auto">
              {user ? (
                <Button style={{ background: '#FF4D4D', borderRadius: "20px", color: 'white', border: 'none' }} onClick={handleLogout}>
                  Logout <CiLogout />
                </Button>
              ) : (
                <Button style={{ background: '#39DB4A', borderRadius: "20px", color: 'white', border: 'none' }} onClick={() => setShowLogin(true)}>
                  Login <CiLogin />
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Navigation;
