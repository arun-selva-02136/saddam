import React from 'react'
import {Container,Row,Col, Button,Card} from 'react-bootstrap'
import { FaHeart, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaPlay } from "react-icons/fa6";
import './Home.css'
import img2 from '../../assets/polygon 1.png'; 
import img3 from '../../assets/chef-1.png';
import img4 from '../../assets/chef-2.png';
import img5 from '../../assets/Vector.png';
import img6 from '../../assets/time.png';
import img7 from '../../assets/shop.png';
import img8 from '../../assets/gift.png';
// import {Link} from './react-router-dom'
import box1 from '../../assets/burger.png';
import box2 from '../../assets/pizha.png';
import box3 from '../../assets/juice.png';
// 2-boxes
import box4 from '../../assets/Naan.png';
import box5 from '../../assets/Murtabak.png';
import box6 from '../../assets/jelur.png';




const dishes = [
  { title: "Naan Butter", img: box4, price: "$6.00", rating: 4.9 },
  { title: "Murtabak", img: box5, price: "$9.50", rating: 4.6 },
  { title: "Jelur Sotong", img: box6, price: "$10.00", rating: 4.5 },
];

const Menus =[
  {title:"CATERING",order:img5,text:'Delight your guests with our flavors and  presentation'},
  {title:"FAST DELIVERY",order:img6,text:'We deliver order promptly to your door'},
  {title:"ONLINE DELIVERY",order:img7,text:'Explore Menu&order with ease using our Online Ordering'},
  {title:"GIFT CARDS",order:img8,text:'Give the gift of exceptional dinning with Foodi Gift Cards'}
]
const Home = () => {

  return ( 
    <div  className='mt-5'>
      
      <Container className='home1 center'>
        <Row>
          <Col md={6}>
            <div className="head-left"><br/>
                <h1>Dive into Delights Of Delectable <span>Food</span></h1><br/>
                <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p><br/>
                <p>Watch Video <FaPlay style={{color:"green",width:'40px',height:'40px', background:'white',margin:'10px',padding:'9px',borderRadius:'50px',boxShadow:'7px 7px 9px yellow'}}/></p>
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

     <Container className="d-flex flex-column align-items-center justify-content">
    <p>CUSTOMER FAVORITES</p>
    <h1 className="mb-4 text-center">Popular Catogaries</h1>
    <Row className="w-100 text-center">
      {[
        { title: "Naan", img: box1, text: "(86 dishes)" },
        { title: "Minuman", img:box2, text: "(12 break fast)" },
        { title: "Browse all", img: box3, text: "(255 items)" }
      ].map((item, index) => (
        <Col key={index} xs={12} md={4} className="mb-3">
          <Card className="p-3 shadow" style={{borderRadius:'20px'}}>
          <Card.Img variant="top" className="mx-auto" style={{width:'100px',height:'100px',background:'#5FE26C',padding:'10px',borderRadius:'60px'}}src={item.img} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>

  <Container className="py-5">
       <div className="d-flex justify-content-between align-items-right my-3">
      <div>
      <h6 className="text-success text-uppercase">Special Dishes</h6>
      <h2 className="fw-bold">Standout Dishes From Our Menu</h2>
       </div>
      <div >
        <Button variant="light" className="rounded-circle">
          <FaChevronLeft />
        </Button>
        <Button variant="success" className="rounded-circle">
          <FaChevronRight />
        </Button>
      </div>
      </div>
</Container>
   <Container>
      <Row className="justify-content">
        {dishes.map((dish, index) => (
          <Col key={index} xs={12} md={4} className="d-flex justify-content-center">
            <Card className="layer p-3 -sm shadow border-0" style={{ width: "18rem", borderRadius: "20px" }}>
               <div className="favourit">
                <CiHeart className="heartbeat position-absolute text-white m-2" />
                </div>
              <div className="position-relative text-center">
                <Card.Img
                  variant="top"
                  src={dish.img}
                  alt={dish.title}
                  className="rounded-circle"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                /> 
              </div>
              <Card.Body className="text-center ">
                <Card.Title className="fw-bold ">{dish.title}</Card.Title>
                <Card.Text className="text-muted">Description of the item</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text- fw-bold">{dish.price}</span>
                  <span className="text-warning">
                    <FaStar /> {dish.rating}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

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
          <br/>
          <Button className='btn' style={{background:'#39DB4A',border:'none',borderRadius:'20px'}}>Explore</Button>
          </div>
        </Col>
      
        {/* Right side content */}
        <Col md={6}>
      
          <Row className='cards-1'>
          {Menus.map((menu, index) => (
            <Col key={index} xs={12} md={6} className="cardss mb-4">
              <Card  style={{width:'170px',height:'200px',alignItems:'center',padding:'10px',borderRadius:'20px',marginBottom:'-10px',gap:'2px'}}> 
                <Card.Img src={menu.order} style={{width:'60px'}}></Card.Img>
                <Card.Title style={{color:'#39DB4A',fontSize:'15px'}}>{menu.title}</Card.Title>
                <Card.Text style={{color:"#5FE26C",textAlign:"center"}}>{menu.text}</Card.Text>
              </Card>
            </Col>
          ))}
          </Row> 
        </Col>
      </Row>    
    </Container>
    </div>
  )
}

export default Home
