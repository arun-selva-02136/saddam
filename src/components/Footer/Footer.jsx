import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img7 from '../../assets/logo.png';
import img8 from '../../assets/facebook.png';
import img9 from '../../assets/instagram.png';
import img10 from '../../assets/twiter.png';
import img11 from '../../assets/youtube.png';
import './Footer.css'

const Footer = () => {
  return (
    <div>
    <footer className="footer-1 py-5">
      <Container >
        <Row>
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <img src={img7} style={{width:'30px'}}/>
            <p>Savor the artistry where every dish is a culinary masterpiece</p>
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
              <li><a href="mailto:info@company.com" >example@email.com</a></li>
              <li><a href="tel:+64 958 248 966" >+64 958 248 966</a></li>
              <li><a href="./">Social media</a></li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" >About US</a></li>
              <li><a href="https://twitter.com" >Gallery</a></li>
              <li><a href="https://instagram.com" >FAQ</a></li>
            </ul>
          </Col>
        </Row>
       
      </Container>
    </footer>
      <div className="footer-last">
        <Row>
            <Col md={6}>
        <div className="medias">
            <div className="media-img">
            <img src={img8} style={{width:'15px'}}/>
            </div>
            <div className="media-img">
            <img src={img9}style={{width:'20px'}} />
            </div>
            <div className="media-img">
            <img src={img10} style={{width:'20px'}}/>
            </div>
            <div className="media-img">
            <img src={img11} style={{width:'20px'}}/>
            </div>
          </div>
          </Col>
        <Col md={6}>
        <div className="footer-last2">
            <p>Copyright 2025 Dscode | All rights reserved</p>
        </div>
        </Col>
        </Row>
      </div>
        

    
        
    </div>
  );
};

export default Footer;
