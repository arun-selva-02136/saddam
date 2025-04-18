import React, { useState, useEffect } from 'react'
import {Container,Row,Col, Button,Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Modal } from "antd";
import { FaHeart, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { fetchCategory } from "../../sevices/CategoryServices/CategoryServices";
import { fetchMenu } from "../../sevices/MenuService/MenuService";
import { CiHeart } from "react-icons/ci";
import { FaPlay } from "react-icons/fa6";
import './Home.css'
import owner1 from '../../assets/logo-2.png';
import owner2 from '../../assets/saddam-branch.png';
import owner3 from '../../assets/saddam-owner.png';
import owner4 from '../../assets/saddam-owner2.png';
import owner5 from '../../assets/saddam-owner3.png'
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
// import dis1 from '../../assets/Naan.png';
// import dis2 from '../../assets/Murtabak.png';
// import dis3 from '../../assets/jelur.png';
import dis4 from '../../assets/dishes-1.png';
import dis5 from '../../assets/dishes-2.png';
import dis6 from '../../assets/dishes-3.png';
import dis7 from '../../assets/dishes-4.png';
import dis8 from '../../assets/dishes-5.png';
import dis9 from '../../assets/dishes-6.png';
import dis10 from '../../assets/dishes-7.png';
import dis11 from '../../assets/dishes-8.png';
import dis12 from '../../assets/dishes-9.png';
import dis13 from '../../assets/dishes-10.png';
import dis14 from '../../assets/dishes-11.png';
import dis15 from '../../assets/dishes-12.png';
import dis16 from '../../assets/dishes-13.png';
import dis17 from '../../assets/dishes-14.png';

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
  // { title: "Naan", img: dis1, price: "$2.40", rating: 4.9 },
  // { title: "Murtabak", img: dis2, price: "$9.50", rating: 4.6 },
  // { title: "Jelur Sotong", img: dis3, price: "$10.00", rating: 4.5 },
  // { title: "Set Ayam SadaM", img: dis4,des:'(Rice + Boiled Egg + Ladiesfinger + Cabbage + Onion Special Chicken (Ayam Sadam))', price: "RM12", rating: 4.5 },
  { title: "Set Ayam Kicap ", img: dis5,des:'( Rice + Boiled Egg + Ladiesfinger + Cabbage + Black Soy Sauce Chicken (Ayam Kicap)', price: "RM11", rating: 4.5 },
  { title: "Set Ayam Madu", img: dis6, des:'( Rice + Boiled Egg + Ladiesfinger + Cabbage + Honey Chicken (Ayam Madu)', price: "RM11", rating: 4.5 },
  { title: "Set Kambing", img: dis7, des:'(Rice + Boiled Egg + Ladiesfinger + Cabbage + Gravy Mutton (Kambing)', price: "RM17", rating: 4.5 },
  { title: "Set Daging Kicap", img: dis8, des:'(Rice + Boiled Egg + Ladiesfinger + Cabbage + Black Soy Sauce (Daging Kicap)',price: "RM15", rating: 4.5 },
  { title: "Set Udang Harimau", img: dis9, des:'( Rice + Boiled Egg + Ladiesfinger + Cabbage + Fried Tiger Prawn (Udang Harimau)',price: "RM17", rating: 4.5 },
  { title: "Set Sotong", img: dis10, des:'(Rice + Boiled Egg + Ladiesfinger + Cabbage + Squid Sambal (Sotong Sambal)',price: "RM23", rating: 4.5 },
  { title: "Set Telur Sotong", img: dis11, des:'( Rice + Boiled Egg + Ladiesfinger + Cabbage + Squid Egg (Telur Sotong)',price: "RM15", rating: 4.5 },
  { title: "Set Ikan Goreng", img: dis12, des:'( Rice + Boiled Egg + Ladiesfinger + Cabbage + Fried Fish (Ikan Goreng)',price: "RM13", rating: 4.5 },
  { title: "Set Ikan Kari", img: dis13, des:'( Rice + Boiled Egg + Ladiesfinger + Cabbage + Curry Fish (Ikan Kari)',price: "RM13", rating: 4.5 },
  { title: "Set Ayam Sadam", img: dis14, des:'( Rice + Boiled Egg + Ladiesfinger + Cabbage + Fish Egg  (Telur Ikan)',price: "RM15", rating: 4.5 },
  { title: "Lamb Shank", img: dis15, des:'describtion',price: "RM40", rating: 4.5 },
  // { title: "Kari Kepala Ikan Merah", img: dis16, des:'(Red Snapper Fish Head Curry)',price: "RM20- RM200", rating: 4.5 },
  { title: "Kari Kepala Ikan Tengiri ", img: dis17, des:'(Spanish Mackerels Curry)',price: "RM20- RM150", rating: 4.5 },


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
  const [categoryData, setCategoryData] = useState([]);
  const [menuData, setMenuData] = useState([]);
// navigate menu

  const navigate = useNavigate();

  // home1
  const carouselImages = [owner1,owner2,owner3,owner4,owner5];
const [carouselIndex, setCarouselIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);


// special dishes
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;

  // const [showAll, setShowAll] = useState(false);

  // // Determine how many categories to display
  // const displayedCategories = showAll ? categoryData : categoryData.slice(0, 3);


    // Disable body scroll when modal is open
    useEffect(() => {
      if (isModalOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      // Cleanup on unmount
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isModalOpen]);
  
  useEffect(() => {
    loadCategory();
    loadMenu();
  }, []);

  const loadCategory = async () => {
    try {
      const categories = await fetchCategory();
     
      setCategoryData(categories);
    } catch (error) {
      console.error("Error fetching Category: ", error.message);
    }
  };

  const loadMenu = async () => {
    try {
      const menu = await fetchMenu();
      setMenuData(menu);
    } catch (error) {
      console.error("Error fetching Menu: ", error.message);
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; 
  const totalCategories = categoryData.length;
  
  // Determine which categories to show
  const displayedCategories = categoryData.slice(currentIndex, currentIndex + itemsPerPage);
  
  // Handle previous and next clicks
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + 1, totalCategories - itemsPerPage)
    );
  };
  
  // special dihses next use
 
  const handleNext1 = () => {
    if (startIndex + cardsToShow < dishes.length) {
      setStartIndex(startIndex + cardsToShow);
    }
  };

  const handlePrev1 = () => {
    if (startIndex - cardsToShow >= 0) {
      setStartIndex(startIndex - cardsToShow);
    }
  };

  const visibleDishes = dishes.slice(startIndex, startIndex + cardsToShow);


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
        maskClosable={false}
        destroyOnClose={true}
        
      >
         {isModalOpen && (
        <iframe
          key={isModalOpen}
          width="100%"
          height="320px"
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
          <div className="carousel-wrapper position-relative text-center">
  <img 
    src={carouselImages[carouselIndex]} 
    alt="Food themed carousel" 
    className="carousel-image img-fluid rounded" 
  />
  <FaChevronLeft className="carousel-arrow left" onClick={() =>
    setCarouselIndex((carouselIndex - 1 + carouselImages.length) % carouselImages.length)
  } />
  <FaChevronRight className="carousel-arrow right" onClick={() =>
    setCarouselIndex((carouselIndex + 1) % carouselImages.length)
  } />
</div>

          </Col>
        </Row>
      </Container>
     {/* card-2 */}

     <Container className="d-flex flex-column align-items-center justify-content" style={{ marginTop: "80px", marginBottom: "80px" }}>
    <p style={{ color: "#1B7C25", fontWeight: "600" }}>CUSTOMER FAVORITES</p>
    <h1 className="mb-4 text-center" style={{ fontWeight: "600" }}>
      Popular Categories
    </h1>

  
    {/* Arrows Below the Categories */}  
<div className="w-100  mt-1 mb-3" style={{display:"flex",flexWrap:"nowrap !important",justifyContent:"end"
}}>
  <Button 
    onClick={handlePrev} 
    disabled={currentIndex === 0} 
    variant="light" 
    className="rounded-circle mx-2"
    style={{ backgroundColor: "#f2f2f2", color: "black", border: "none" }}  
  >
    <FaChevronLeft />
  </Button>

  <Button 
    onClick={handleNext} 
    disabled={currentIndex + itemsPerPage >= totalCategories} 
    className="rounded-circle mx-2"
    style={{ backgroundColor: "#39DB4A", color: "white", border: "none" }}  
  >
    <FaChevronRight />
  </Button>
</div>


    {/* Categories */}
    <Row className="w-100 justify-content-center text-center">
      {displayedCategories.map((category, index) => {
        const categoryMenuCount = menuData.filter(
          (menu) => menu.categoryName === category.categoryName
        ).length;

        return (
          <Col key={index} xs={12} md={4} className="d-flex justify-content-center">
            <Card className="p-3" style={{
              margin: "10px",
              border: "none",
              boxShadow: "2px 5px 35px #FDF100",
              borderRadius: "20px",
              width: "100%",
              maxWidth: "260px", 
            }}>
              <Card.Img variant="top" className="mx-auto" style={{
                width: "80px",
                height: "80px",
                background: "#5FE26C",
                padding: "10px",
                borderRadius: "60px",
              }} src={category.image} />
              <Card.Body>
                <Card.Title>{category.categoryName}</Card.Title>
                <Card.Text>({categoryMenuCount} items)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  </Container>

   <Container className="py-5">
       <div className="d-flex justify-content-between align-items-right my-3">
      <div>
      <h6 className="text-success text-uppercase">Special Dishes</h6>
      <h2 className="fw-bold">Standout Dishes From Our Menu</h2>
       </div>
   <div className="w-100 mt-1 mb-3" style={{display:"flex",flexWrap:"nowrap !important",justifyContent:"end"
}}>
        <Button  onClick={handlePrev1}  variant="light"  className="rounded-circle mx-2"
        style={{
          backgroundColor: "#f2f2f2",
          color: "black",
          border: "none",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}>
          <FaChevronLeft />
        </Button>
        <Button  onClick={handleNext1}  className="rounded-circle mx-2"
        style={{
          backgroundColor: "#39DB4A",
          color: "white",
          border: "none",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}  disabled={startIndex >= dishes.length - cardsToShow}>
          <FaChevronRight />
        </Button>
      </div>
      </div>
</Container> 
    <Container >
      <Row className="justify-content">
      {visibleDishes.map((dish,index) => (
          <Col key={index} xs={12} md={4} className="d-flex justify-content-center">
           
            <Card className="layer p-3 -sm  border-0" style={{ width: "18rem",borderRadius: "20px",boxShadow:'2px 5px 35px #FDF100',cursor:'pointer' }} onClick={() => navigate('/menu')}>
               <div className="favourit">
                <CiHeart className="heartbeat position-absolute text-white m-2"/>
                </div>
              <div className="position-relative text-center">
                <Card.Img
                  variant="top"
                  src={dish.img}
                  alt={dish.title}
                  className="rounded-circle"
                  style={{ width: "200px", height: "200px", objectFit: "contain", background:'white',borderRadius:'20px' }}
                /> 
              </div>
              <Card.Body className="d-flex flex-column justify-content-between text-center">
                <Card.Title className="fw-bold ">{dish.title}</Card.Title>
                <Card.Text className="text-muted">{dish.des}</Card.Text>
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

      <Container className='home2' style={{marginTop:'70px',}}>
      <Row>
          <Col md={6}>
            <div className="home2">
              <div className="img2 d-flex justify-content align-items-center md row">
                <img src={img3} style={{width:'500px',marginRight:'10px'}}/>
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
          <Button className='btn' style={{background:'#39DB4A',border:'none',borderRadius:'20px'}} onClick={() => navigate('/about')} >Explore</Button><br/><br/>
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
