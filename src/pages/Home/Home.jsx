import React,{useState} from 'react'
import {Container,Row,Col, Button,Card} from 'react-bootstrap'
import { Modal } from "antd";
import { FaHeart, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaPlay } from "react-icons/fa6";
import './Home.css'
// import img2 from '../../assets/polygon 1.png'; 
import img3 from '../../assets/chef-3.png';
import img4 from '../../assets/chef-2.png';
import img5 from '../../assets/Vector.png';
import img6 from '../../assets/time.png';
import img7 from '../../assets/shop.png';
import img8 from '../../assets/gift.png';
// import img9 from '../../assets/commend.png';
// import {Link} from './react-router-dom'
import box1 from '../../assets/burger.png';
import box2 from '../../assets/pizha.png';
import box3 from '../../assets/juice.png';
// 2-boxes
import box4 from '../../assets/Naan.png';
import box5 from '../../assets/Murtabak.png';
import box6 from '../../assets/jelur.png';
// firbase
// import {useEffect,useState} from 'react';
// import {db} from '../Firebase/config'
// import {collection,getDocs} from 'firebase/'
// import { fetchCategory, addCategory, deleteCategory } from "../../sevices/CategoryServices/CategoryServices";
// import { fetchMenu, addMenu, updateMenu, deleteMenu } from "../../sevices/MenuService/MenuService";

const item=[
  { title: "Naan", img: box1, text: "(86 dishes)" },
  { title: "Minuman", img:box2, text: "(12 break fast)" },
  { title: "Browse all", img: box3, text: "(255 items)" }

]
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

  const [isModalOpen, setIsModalOpen] = useState(false);
    const videoUrl = "https://www.youtube.com/embed/nZAwAYJVA5w?si=8AQjDtDwGkN_uEXd" ;


  return ( 
    <div  className='mt-5'>
      
      <Container className='home1'>
        <Row style={{alignItems:'center'}}>
          <Col md={6}>
            <div className="head-left"><br/>
                <h1>Dive into Delights Of Delectable <span>Food</span></h1><br/>
                <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p><br/>
                <div className='text-center'>
                <p>Watch Video <FaPlay  onClick={() => setIsModalOpen(true)} style={{color:"green",fontSize:'12px',width:'70px',height:'70px', background:'white',margin:'10px',padding:'20px',borderRadius:'50px',boxShadow:'2px 5px 45px #FDF100',cursor: "pointer",}}/></p>
                     <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false
        )}
        footer={null}
        centered
        width='70%'
        className='custom-model'
        destroyOnClose={true}
        
      >
         {isModalOpen && (
        <iframe
          key={isModalOpen}
          width="100%"
          height="370px"
          top="70%"
          src={videoUrl} 
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
         )}
      </Modal>
                 </div>
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

     <Container className="d-flex flex-column align-items-center justify-content" style={{marginTop:'80px',marginBottom:'80px'}}>
    <p style={{color:'#1B7C25',fontWeight:'600'}}>CUSTOMER FAVORITES</p>
    <h1 className="mb-4 text-center" style={{fontWeight:'600'}}>Popular Catogaries</h1>
    <Row className="w-100 text-center">
      {item.map((item, index) => (
        <Col key={index} xs={12} md={4} className="mb-3 ">
          <Card className="p-4 lg" style={{margin:'10px',border:'none',boxShadow:'2px 5px 35px #FDF100',borderRadius: '20px',width:'95%'}}>
          <Card.Img variant="top" className="mx-auto" style={{width:'80px',height:'80px',background:'#5FE26C',padding:'10px',borderRadius:'60px'}}src={item.img} />
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
      <div classname='d-flex flex-wrap' >
        <Button variant="light" className="rounded-circle" style={{margin:'5px'}}>
          <FaChevronLeft />
        </Button>
        <Button  className="rounded-circle" style={{background:'#39DB4A',border:'none'}}>
          <FaChevronRight />
        </Button>
      </div>
      </div>
</Container> 
    <Container >
      <Row className="justify-content">
        {dishes.map((dish, index) => (
          <Col key={index} xs={12} md={4} className="d-flex justify-content-center">
            <Card className="layer p-3 -sm  border-0" style={{ width: "18rem", borderRadius: "20px",boxShadow:'2px 5px 35px #FDF100' }}>
               <div className="favourit">
                <CiHeart className="heartbeat position-absolute text-white m-2"/>
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

      <Container className='home2' style={{marginTop:'70px'}}>
      <Row>
          <Col md={6}>
            <div className="home2">
              <div className="img2 d-flex justify-content align-items-center md row">
                <img src={img4} style={{width:'380px',marginRight:'10px'}}/>
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
       

         <Container className='py-5' style={{marginBottom:'70px'}}>
      <Row className='justify-content-center'>
         {/* Left side content  */}
         <Col md={6} className='text-center text-md-start'>
        <div className="h3-left">
          <p>Our Story & Services</p>
          <h1>Our Culinary Journey And Services</h1>
          <h5>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</h5>
          <br/>
          <Button className='btn' style={{background:'#39DB4A',border:'none',borderRadius:'20px'}}>Explore</Button><br/><br/>
          </div> 
         </Col> 
      
        {/* Right side content */}
          <Col lg={6}>
      
          <Row className='gx-2 gy-2'>
         {Menus.map((menu, index) => (
            <Col key={index}  xs={12} sm={12} md={3} lg={6} className="d-flex flex-wrap justify-content-center">
              <Card className='shadow d-flex flex-column align-items-center text-center p-3 mt-2'
              style={{
                  // padding:'10px',
                  width: '90%',
                  // maxWidth: '180px',
                  // height: '150px',
                  // marginLeft:'60px',
                
                  
                  borderRadius: '15px',
                  background: '#F8F9FA', // Light grey background
                  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
                  border:'none'
                }}
              > 
                <Card.Img src={menu.order} style={{width:'40px'}}></Card.Img>
                <Card.Title style={{color:'#39DB4A',fontSize:'15px'}}>{menu.title}</Card.Title>
                <Card.Text style={{color:'#90BD95',textAlign:"center",fontSize:'12px'}}>{menu.text}</Card.Text>
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
