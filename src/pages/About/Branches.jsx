import React from 'react';
import { Row, Col, Card } from 'antd';
import { Container } from 'react-bootstrap';
import map from '../../assets/map-img.jpg';
import './Branches.css';

const branches = [
  {
    title: 'Nasi Kandar Saddam (HQ)',
    address: '35, Jalan Segambut Pusat, Taman Segambut, Wilayah Persekutuan, 51200 Kuala Lumpur.'
  },
  {
    title: 'Nasi Kandar Saddam (Jalan TAR)',
    address: '228, 230, Jalan Tuanku Abdul Rahman, Chow Kit, 50100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur.'
  },
  {
    title: 'Nasi Kandar Saddam (Odeon, Jalan TAR)',
    address: 'Jalan Tuanku Abdul Rahman, Chow Kit, 50100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur.'
  },
  {
    title: 'Nasi Kandar Saddam (Sek 7, Shah Alam)',
    address: 'Jalan Plumbum S7/S, Seksyen 7, 40000 Shah Alam, Selangor.'
  },
  {
    title: 'Nasi Kandar Saddam (PJ)',
    address: 'Lorong Sultan, Pjs 52, Petaling Jaya, 46050 Selangor.'
  },
  {
    title: 'Nasi Kandar Saddam (SEPANG)',
    address: 'No 7, Jalan 5, KLIA Industrial Park, 64000 Sepang, Selangor.'
  },
  {
    title: 'Nasi Kandar Saddam (Sek23, Shah Alam)',
    address: 'No.17, Ground Floor, Jalan Pelabur 23/3A, Seksyen 23, 40300 Shah Alam, Selangor.'
  }
];

const Branches = () => {
  return (
    <Container className="mb-4" style={{ backgroundColor: "#ffff", padding: '0px 20px', marginTop: "70px" }}>
    <Row gutter={[14, 14]} justify="center">
      {branches.map((branch, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6} className="d-flex">
          <Card
            className="location-card w-100 d-flex flex-column justify-content-between"
            hoverable
            style={{ height: '100%', minHeight: '300px' }}
            cover={<img src={map} alt="Location Map" className="location-img" />}
          >
            <Card.Meta
              title={
                <div style={{
                  minHeight: '48px',
                  whiteSpace: 'normal',
                  wordBreak: 'break-word',
                  textAlign: 'center',
                  fontWeight: '600',
                }}>
                  {
                    // Force bracket content to new line
                    branch.title.includes('(')
                      ? <>
                          {branch.title.split('(')[0]}
                          <br />
                          ({branch.title.split('(')[1]}
                        </>
                      : branch.title
                  }
                </div>
              }
              description={
                <div style={{
                  minHeight: '60px',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  textAlign: 'center'
                }}>
                  {branch.address}
                </div>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  

  );
};

export default Branches;
