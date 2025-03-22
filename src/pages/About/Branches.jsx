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
    <Container className="mb-4" style={{ backgroundColor: "#ffff", padding: '20px', marginTop:"5%"}}>
      <Row gutter={[14, 14]} justify="center">
        {branches.map((branch, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
            className='location-card'
              hoverable
              cover={<img src={map} alt="Location Map" className="location-img" />}
            >
              <Card.Meta title={branch.title} description={branch.address} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Branches;
