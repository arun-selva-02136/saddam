import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactImg from "../../assets/contact-img.jpg";
import { UserOutlined, MailOutlined, PhoneOutlined, MessageOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import "./Contact.css"
const { Title } = Typography;
const Contact = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Container className="py-5 mt-5" style={{width:'90%'}}>
      <Row className="contact-card align-items-center">
        <Col md={5}>
          <Title type="success">Contact Us</Title>
          <p className="contact-text">Please fill this form in a decent manner</p>

          <Form
            name="contact"
            style={{
              maxWidth: 360,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your Name!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined style={{
                  color: '#39DB4A',
                  fontSize: '18px',
                  padding: '0px',
                  }}
                />}
                placeholder="Name"
                variant="underlined"
                style={{padding:'0px', borderBottom:"1px solid #39DB4A"}}
                ></Input>

            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input prefix={<MailOutlined style={{
                  color: '#39DB4A',
                  fontSize: '18px',
                  padding: '0px',
                  }} />} placeholder="Email" variant="underlined" style={{padding:'0px', borderBottom:"1px solid #39DB4A"}}></Input>
            </Form.Item>
            <Form.Item
              name="contact"
              rules={[
                {
                  required: true,
                  message: 'Please input your Contact!',
                },
              ]}
            >
              <Input prefix={<PhoneOutlined style={{
                  color: '#39DB4A',
                  fontSize: '18px',
                  padding: '0px',
                  }}/>} placeholder="Contact" variant="underlined" style={{padding:'0px', borderBottom:"1px solid #39DB4A"}}></Input>
            </Form.Item>
            <Form.Item
              name="message"
              rules={[
                {
                  required: true,
                  message: 'Please input your Message!',
                },
              ]}
            >
              <Input prefix={<MessageOutlined style={{
                  color: '#39DB4A',
                  fontSize: '18px',
                  padding: '0px',
                  }}/>} placeholder="Message" variant="underlined" style={{padding:'0px', borderBottom:"1px solid #39DB4A"}}></Input>
            </Form.Item>
            <Form.Item style={{display: "flex", justifyContent: "center"}}>
        <Button htmlType="submit" shape="round" icon={<SendOutlined style={{padding:"0px"}} />} style={{color: "#FFFFFF", backgroundColor: "#39DB4A"}}>Send Message</Button>
      </Form.Item>

          </Form>
        </Col>

        <Col md={7} className="text-center">
          <img src={ContactImg} className="img-fluid" alt="Contact Illustration" />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
