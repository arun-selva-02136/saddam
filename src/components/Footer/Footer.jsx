import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img7 from '../../assets/logo.png';

import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

import './Footer.css'

const Footer = () => {
  return (
    <div>
    <footer className="footer-1 py-5">
      <Container >
        <Row>
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <img src={img7} style={{width:'35px',boxShadow:'2px 2px 40px #39DB4A',borderRadius:'20px'}}/>
            <br/>
            <p>Savor the artistry where <br/>every dish is a culinary <br/>masterpiece</p>
          </Col>
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <h5>Main Menu</h5>
            <ul className="list-unstyled">
              <li><a href="/" >Home</a></li>
              <li><a href="/about" >Offers</a></li>
              <li><a href="/services" >Menus</a></li>
              <li><a href="/contact" >Contact</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:info@company.com">example@email.com</a></li>
              <li><a href="tel:+64 958 248 966" >+64 958 248 966</a></li>
              <li><a href="./">Social media</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" >About US</a></li>
              <li><a href="#" >Gallery</a></li>
              <li><a href="#" >FAQ</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    
       
    </footer>    
    <Container className='footerLast'>
        <Row className="align-items-center">
          <Col md={6} className="d-flex justify-content-start">
            <a href="#" className="me-3 text-success">
              <FiFacebook size={24} className="medias" />
            </a>
            <a href="#" className="me-3 text-success">
              <FaInstagram size={24} className="medias" />
            </a>
            <a href="#" className="me-3 text-success">
              <FaTwitter size={24} className="medias" />
            </a>
            <a href="#" className="text-success">
              <FiYoutube size={24} className="medias" />
            </a>
          </Col>
          <Col md={6} className="text-md text-muted">
            © 2023 Dscode | All rights reserved
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
