import React from 'react'
import {Container,Row,Col, Button,Card} from 'react-bootstrap'
import './Home.css'
import img2 from '../../assets/polygon 1.png'; 
import img3 from '../../assets/chef-1.png';
import img4 from '../../assets/chef-2.png';
import img5 from '../../assets/Vector.png';
import img6 from '../../assets/time.png';
import img7 from '../../assets/shop.png';
import img8 from '../../assets/gift.png';
// import {Link} from './react-router-dom'
const Home = () => {
  return ( 
    <div  className='mt-5 '>
      
      <Container className='home1'>
        <Row>
          <Col md={6}>
            <div className="head-left"><br/>
                <h1>Dive into Delights Of Delectable <span>Food</span></h1><br/>
                <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p><br/>
                <p>Watch Video <img src={img2} style={{width:'26px'}}/></p>
            </div>
           
          </Col>
          <Col md={6}>
            <div className="head-right">
              <div className="image d-flex justify-content align-items-center sm row">
                <img src={img3} style={{width:"800px"}}/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
     {/* card-2 */}

      <Container className='home2'>
      <Row>
          <Col md={6}>
            <div className="home2">
              <div className="img2 d-flex justify-content align-items-center md row">
                <img src={img4} style={{width:'400px'}}/>
              </div>
            </div>
          </Col>
          <Col md={6}>
          <div className="h-right">
            <div className="h-content">
               <p>TESTOMINOS</p><br/>
               <h1>What Our Customers Say About Us</h1><br/>
               <h5>“High ratings on Google & Social media platforms. Loved for authentic flavors and generous portions ”</h5>
             </div>
          </div>
          </Col>
        </Row>
        </Container>

        <Container>
      <Row>
        {/* Left side content */}
        <Col md={6} >
        <div className="h3-left">
          <p>Our Story & Services</p>
          <h1>Our Culinary Journey And Services</h1>
          <h5>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</h5>
          <Button className='btn' style={{background:'#39DB4A',border:'none',borderRadius:'20px'}}>Explore</Button>
          </div>
        </Col>
      
        {/* Right side content */}
        <Col md={6}>
      
          <Row className='cards-1'>
            <Col xs={12} md={6} className="mb-4">
              <Card  style={{width:'170px',height:'220px',alignItems:'center',padding:'10px',borderRadius:'10px',marginTop:'20px'}}> 
                <Card.Img src={img5} style={{width:'100px'}}></Card.Img>
                <Card.Title></Card.Title>
                <Card.Text>Delight your guests with our flavors and  presentation</Card.Text>
              </Card>
            </Col>
            <Col xs={12} md={6} className="mb-4">
              <Card style={{width:'170px',height:'220px',alignItems:'center',padding:'10px',borderRadius:'10px',marginTop:'20px'}}>
                <Card.Img src={img6} style={{width:'100px'}}></Card.Img>
                <Card.Title>catering</Card.Title>
                <Card.Text>Delight your guests with our flavors and  presentation</Card.Text>
              </Card>
            </Col>
            <Col xs={12} md={6} className="mb-4">
              <Card style={{width:'170px',height:'220px',alignItems:'center',padding:'10px',borderRadius:'10px',marginTop:'20px'}}>
                <Card.Img src={img7} style={{width:'100px'}}></Card.Img>
                <Card.Title></Card.Title>
                <Card.Text>Delight your guests with our flavors and  presentation</Card.Text>
              </Card>
            </Col>
            <Col xs={12} md={6} className="mb-4">
              <Card style={{width:'170px',height:'220px',alignItems:'center',padding:'10px',borderRadius:'10px',marginTop:'20px'}}> 
                <Card.Img src={img8} style={{width:'100px'}}></Card.Img>
                <Card.Title></Card.Title>
                <Card.Text>Delight your guests with our flavors and  presentation</Card.Text>
              </Card>
            </Col>
        
          </Row>
      
        </Col>
      </Row>
        
    </Container>
    </div>
  )
}

export default Home
