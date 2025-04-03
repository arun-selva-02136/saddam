import React from 'react';
import { Row, Col, Card } from 'antd';
import { Container, Image } from 'react-bootstrap';
import analyises from '../../assets/business-img1.jpg';
import statics from '../../assets/business-img2.jpg';
import './Business.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import business1 from '../../assets/business1.png'
import business2 from '../../assets/business2.png'
import business3 from '../../assets/business3.png'

const Business = () => {
    return (
        <Container className="mb-5" style={{marginTop:"100px"}}>
            <Card className="p-4 businees-container">

                <Row style={{ padding: 'inherit' }}>
                    <h3 className="fw-bold text-success">Business Concepts</h3>
                </Row>
                <Row justify="center" style={{ borderBottom: '1px solid black', textAlign: "justify", }}>
                    <Col md={12}>
                        <ul style={{ wordSpacing: '5px', fontSize: '17px' }}>
                            <li>A new concept of restaurant in the city in an ideal location.</li>
                            <li>Proper Promotional activities at least for initial six months.</li>
                            <li><strong>Special facilities:</strong> Membership card etc.</li>
                            <li>Special discounts during festive seasons.</li>
                            <li>Wide range of varieties in menu and quality food.</li>
                            <li>Party Caterings (Outdoor).</li>
                            <li>Private Dining Facilities (PDF) for Corporate parties, etc.</li>
                            <li>Vision to open new Outlets in future.</li>
                        </ul>
                    </Col>
                    <Col md={12}>
                        <Image src={analyises} className="rounded" alt="Nasi Kandar History" fluid />
                    </Col>
                </Row>

                {/* vission mission */}

                <Row style={{ padding: 'inherit' }}>
                    <h3 className="fw-bold text-success">Vision & Mission</h3>
                </Row>
                <Row justify="center" style={{ textAlign: "justify" }}>
                    <Col md={12}>
                        <ul style={{ wordSpacing: '5px', fontSize: '17px' }}>
                            <li><strong>Vision:</strong> </li>
                            <ul>
                                <li>To be the most loved and authentic Nasi Kandar brand in Malaysia.</li>
                            </ul>
                            <li><strong>Mission:</strong></li>
                            <ul>
                                <li>Serve high-quality, flavorful meals with authentic spices.</li>
                                <li>Ensure excellent customer service and dining experience.</li>
                                <li>Expand while maintaining traditional cooking methods.</li>
                            </ul>

                        </ul>
                        <Row style={{display:"flex" ,gap:"20px"}}>
                            <Col md={10} >
                                <Card className='badge-box'>
                                    <Row className='d-flex  justify-content-between'>
                                        <h6> Order Food </h6>
                                        <img src={business1} style={{width:"30px"}}/>
                                    </Row>
                                    <p>Presentation are tools that can be used as lectures.</p>
                                </Card>
                            </Col>
                            <Col md={10}>
                                <Card className='badge-box'>
                                    <h6>Delivery Food <img src={business2}style={{width:"30px"}} alt="" /></h6>
                                    <p>Presentation are tools that can be used as lectures.</p>
                                </Card>
                            </Col>
                            <Col md={10}>
                                <Card className='badge-box'>
                                    <h6>Enjoy Food <img src={business3}style={{width:"30px"}} alt="" /></h6>
                                    <p>Presentation are tools that can be used as lectures.</p>
                                </Card>
                            </Col>
                        </Row>

                    </Col>
                    <Col md={12}>
                        <Image src={statics} className="rounded" alt="Nasi Kandar History" fluid />
                    </Col>
                </Row>

            </Card>
        </Container>
    );
};

export default Business;
