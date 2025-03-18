import React from 'react'
import { Container, Card, Image } from "react-bootstrap";
import { Row, Col } from 'antd';
import vip from '../../assets/Mask group.jpg'
import './Vips.css'

const Vips = () => {
    return (
        <>

            <Container className="mb-5" style={{marginTop:"10%"}}>
                <Card className="p-4 vip-container">

                    <Row style={{ padding: 'inherit' }}>
                        <h4 className="fw-bold text-success">Ismail Sabri Yaakob<br />(Lawyer & Politician)</h4>
                    </Row>
                    <Row justify="center" align="middle" style={{ borderBottom: '1px solid black', textAlign: "justify", padding: 'inherit' }}>
                        <Col md={14} style={{ padding: '10px' }}>
                            <p className="text-muted mb-1" style={{ wordSpacing: '10px', fontSize: '20px' }}>
                                Ismail Sabri bin Yaakob is a Malaysian lawyer and politician who served as the ninth Prime Minister
                                of Malaysia from 2021 to 2022. He has visited our outlet and tasted the delicious Nasi Kandar food
                                and appreciated us.
                            </p>
                        </Col>
                        <Col md={8}>
                            <Image src={vip} className="rounded" alt="Nasi Kandar History" fluid />
                        </Col>
                    </Row>



                    <Row style={{ padding: 'inherit' }}>
                        <h4 className="fw-bold text-success">Khairy Jamaluddin <br />(Former Minister of Health of Malaysia)</h4>
                    </Row>
                    <Row justify="center" align="middle" style={{ borderBottom: '1px solid black', textAlign: "justify", padding: 'inherit' }}>
                        <Col md={8}>
                            <Image src={vip} className="rounded" alt="Nasi Kandar History" fluid />
                        </Col>
                        <Col md={14} style={{ padding: '10px' }}>
                            <p className="text-muted mb-1" style={{ wordSpacing: '10px', fontSize: '20px' }}>
                                Khairy bin Jamaluddin, often referred to by his initials KJ, is a Malaysian politician, radio presenter,
                                and podcaster. Alongside being a radio presenter for Hot FM, he hosts Keluar Sekejap with Shahril Hamdan,
                                a podcast in which they discuss Malaysian politics and current affairs with a variety of guests.
                            </p>
                        </Col>

                    </Row>

                    <Row style={{ padding: 'inherit' }}>
                        <h4 className="fw-bold text-success">Mohamad Sabu <br />(Minister of Agriculture and Food Security of Malaysia)</h4>
                    </Row>
                    <Row justify="center" align="middle" style={{ textAlign: "justify", padding: 'inherit' }}>
                        <Col md={14} style={{ padding: '10px' }}>
                            <p className="text-muted mb-1" style={{ wordSpacing: '10px', fontSize: '20px' }}>
                                Mohamad bin Sabu (commonly known as Mat Sabu) is a Malaysian politician who has served as the Minister of
                                Agriculture and Food Security in the Unity Government administration under Prime Minister Anwar Ibrahim
                                since November 2022.
                            </p>
                        </Col>
                        <Col md={8}>
                            <Image src={vip} className="rounded" alt="Nasi Kandar History" fluid />
                        </Col>
                    </Row>



                </Card>
            </Container>
        </>
    )
}

export default Vips;