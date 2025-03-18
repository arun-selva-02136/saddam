import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import "./Journey.css";
import { Row, Col } from 'antd';
import oldman from "../../assets/image 15.jpg";
import nasikandar from "../../assets/nasi_kandar-foodCort.jpg";

const Journey = () => {
  return (
    <>
    <Container className=" mb-5" style={{marginTop:"10%"}}>
      <Card className="p-4 about-container">
        
        {/* About Us */}
        <Row style={{padding: 'inherit'}}>
        <h4 className="fw-bold text-success">About Us</h4>
        </Row>
        <Row justify="center" align="middle" style={{borderBottom: '1px solid black', textAlign:"justify", padding: 'inherit'}}>
          <Col md={14} style={{padding:'10px'}}>
          <p className="text-muted mb-1" style={{wordSpacing: '10px', fontSize: '20px'}}>
              That’s a fascinating history behind your nasi kandar business! It's incredible how it all started with a simple, yet thoughtful
              idea of cooking at home, filling a basket with delicious food, and then reaching out to people in crowded areas. It must’ve been 
              really effective, with word spreading quickly about the tasty and affordable meals we were offering.
            </p>
          </Col>
          <Col md={8}>
          <Image src={oldman} className="rounded" alt="Nasi Kandar History" fluid />
          </Col>
        </Row>
        
        {/* During 1945's */}
        <Row justify="center" align="middle" style={{padding: 'inherit'}}>
        <h4 className="fw-bold text-success">During 1945’s</h4>
        </Row>
        <Row justify="center" align="middle" style={{borderBottom: '1px solid black', textAlign:"justify", padding: 'inherit'}}>
          <Col md={8}>
          <Image src={nasikandar} className="rounded" alt="Nasi Kandar Stall" fluid />
          </Col>
          <Col md={14} style={{padding:'10px'}}>
          <p className="text-muted mb-1" style={{wordSpacing: '10px', fontSize: '20px'}}>
              In 1945, Mohamed Idris began selling nasi kandar from a 3-tier bicycle near the streets of Penang, including the famous Alor Setar. 
              His dedication to delivering delicious, flavorful nasi kandar made him a household name. His business, built on passion and tradition, 
              steadily gained a loyal customer base.
            </p>
          </Col>
        </Row>

        {/* Business Expansion */}
        <Row align="middle" style={{padding: 'inherit'}}>
        <h4 className="fw-bold text-success">Business Expansion</h4>
        </Row>

        <Row justify="center" align="middle" style={{ textAlign:"justify",  padding: 'inherit'}}>
          <Col md={14} style={{padding:'10px'}}>
          <p className="text-muted mb-1" style={{wordSpacing: '10px', fontSize: '20px', paddingBottom:"inherit"}}>
              Mohamed Idris’ journey from starting his nasi kandar business in a rented shop in 1970 to expanding to over 30 outlets in Malaysia is a 
              testament to his passion and hard work.
            </p>
            <p className="text-muted mb-1" style={{wordSpacing: '10px', fontSize: '20px', paddingBottom:"inherit"}}>
              Moving to Kuala Lumpur in 1985 to expand and opening a restaurant in Segambut named <strong>Sadam</strong> was a pivotal moment.
            </p>
            <p className="text-muted mb-1" style={{wordSpacing: '10px', fontSize: '20px'}}>
              Now with over 30 outlets, it must have been a rewarding experience to see the business thrive on such a large scale.
            </p>
          </Col>
          <Col md={8}>
          <Image src={nasikandar} className="rounded" alt="Nasi Kandar Expansion" fluid />
          </Col>
        </Row>

        
        

      </Card>
    </Container>
    </>
    
  );
};

export default Journey;
