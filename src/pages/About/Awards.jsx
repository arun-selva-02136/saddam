import React from "react";
import { Container, Card } from "react-bootstrap";
import { Row, Col } from 'antd';
import './Awards.css'

const Awards = () => {
  return (
    <>
      <Container className="mb-5" style={{marginTop:"100px"}}>
        <Card className="p-4 award-container">

          <Row style={{ padding: 'inherit' }}>
                      <h4 className="fw-bold text-success">Awards & Recognition</h4>
                    </Row>
          
                    <Row justify="center" align="middle" style={{ textAlign: "justify", padding: 'inherit' }}>
            <Col style={{ padding: '10px' }}>
            <ul style={{ wordSpacing: '5px', fontSize: '17px'}}>
                <li className="p-2">
                  It's a great testament to our dedication and the quality of
                  the food we've been serving over the years. Being able to
                  proudly say we're providing the Number 1 Nasi Kandar in
                  Malaysia must feel incredibly rewarding.
                </li>

                <li className="p-2">
                  {" "}
                  It’s such a huge accomplishment and a clear reflection of the
                  hard work and care we’ve put into our food over the years. It
                  must feel amazing to have your efforts recognized on such a
                  level
                </li>
              </ul>
            </Col>
            
          </Row>
          
        </Card>
      </Container>
    </>
  );
};

export default Awards;
