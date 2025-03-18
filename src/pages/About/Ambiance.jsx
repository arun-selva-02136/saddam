import React from "react";
import './Ambiance.css'
import { Container, Card, Image } from "react-bootstrap";
import { Row, Col } from 'antd';
import animation from '../../assets/animation-img.jpg';
import animation2 from '../../assets/animation2.jpg';
import partyImg from '../../assets/party-img.jpg'

const Ambiance = () => {
  return (
    <>
      <Container className="mb-5" style={{marginTop:"10%"}}>
        <Card className="p-4 ambiance-container">

          <Row style={{ padding: 'inherit' }}>
            <h4 className="fw-bold text-success">Interior Design</h4>
          </Row>
          <Row justify="center" align="middle" style={{ borderBottom: '1px solid black', textAlign: "justify", padding: 'inherit' }}>
            <Col md={14} style={{ padding: '10px' }}>
              <p className="text-muted mb-1" style={{ wordSpacing: '10px', fontSize: '20px' }}>
                The restaurant has maintained a simple yet comfortable setting,
                with traditional touches that reflect its rich history. The
                space is designed to provide a relaxed atmosphere where patrons
                can enjoy the nostalgic flavors of Penang.
              </p>
            </Col>
            <Col md={8}>
              <Image src={animation} className="rounded" alt="Nasi Kandar History" fluid />
            </Col>
          </Row>

          <Row style={{ padding: 'inherit' }}>
            <h4 className="fw-bold text-success">Seating Capacity</h4>
          </Row>
          <Row justify="center" align="middle" style={{ borderBottom: '1px solid black', textAlign: "justify", padding: 'inherit' }}>
            <Col md={8}>
              <Image src={animation2} className="rounded" alt="Nasi Kandar History" fluid />
            </Col>
            <Col md={14} style={{ padding: '10px' }}>
              <p className="text-muted mb-1" style={{ wordSpacing: '10px', fontSize: '20px' }}>
                Spacious enough for group gatherings, the restaurant
                accommodates families and solo diners alike. Having the capacity
                to serve over 100 customers at once is a huge achievement,
                ensuring a high-quality dining experience in a lively
                atmosphere.
              </p>
            </Col>

          </Row>

          <Row style={{ padding: 'inherit' }}>
            <h4 className="fw-bold text-success">Vibe / Atmosphere</h4>
          </Row>
          <Row justify="center" align="middle" style={{ textAlign: "justify", padding: 'inherit' }}>
            <Col md={14} style={{ padding: '10px' }}>
              <p className="text-muted mb-1" style={{ wordSpacing: '10px', fontSize: '20px' }}>
                Warm and inviting, with the aroma of curry wafting through the
                air, creating a sensory experience that complements the food.
              </p>
            </Col>
            <Col md={8}>
              <Image src={partyImg} className="rounded" alt="Nasi Kandar History" fluid />
            </Col>
          </Row>


        </Card>
      </Container>
    </>
  );
};

export default Ambiance;
