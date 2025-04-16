import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import img1 from "../../assets/sadam3.png";
import img2 from "../../assets/sadam1.png";
import img3 from "../../assets/sadam2.png";
import img4 from "../../assets/sadam4.png";
import img5 from "../../assets/sadam5.png";
import img6 from "../../assets/sadam6.jpeg";
import img7 from "../../assets/Mask group.jpg";
import img8 from "../../assets/sadam8.jpeg";
import img9 from "../../assets/sadam9.jpeg";
import img10 from "../../assets/sadam10.jpeg";
import img11 from "../../assets/sadam11.jpeg";
import img12 from "../../assets/sadam12.jpeg";
import "./Gallery.css";

const images = [
  { id: 1, url: img1, title: "Nasi Kandar 1", content: 'lorem dummy content' },
  { id: 2, url: img2, title: "Nasi Kandar 2", content: 'lorem dummy content' },
  { id: 3, url: img3, title: "Nasi Kandar 3", content: 'lorem dummy content' },
  { id: 4, url: img4, title: "Nasi Kandar 4", content: 'lorem dummy content' },
  { id: 5, url: img5, title: "Nasi Kandar 5", content: 'lorem dummy content' },
  { id: 6, url: img6, title: "CATERING SERVICE", content: '1000 PEOPLE FOR JKG PROJECT MANAGEMENT' },
  { id: 7, url: img7, title: "PUBLISH", content: 'ON MALAYSIA THE STAR NEWS PAPER' },
  { id: 8, url: img8, title: "ALIF SATAR", content: 'MALAYSIAN ACTOR' },
  { id: 9, url: img9, title: "AMY SEARCH", content: "90's ROCKSTAR" },
  { id: 10, url: img10, title: "ISMAIL SABRI", content: 'FORMER OF PRIME MINISTER OF MALAYSIA' },
  { id: 11, url: img11, title: "KHAIRY JAMALUDIN", content: 'FORMER MINISTER OF HEALTH PF MALAYSIA' },
  { id: 12, url: img12, title: "Nasi Kandar 12", content: 'lorem dummy content' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Container className="gallery-container p-4 mb-5 border-warning rounded" style={{ width: '90%', marginTop: '90px' }}>
      <h2 className="mb-4" style={{ color: '#39DB4A' }}>Gallery</h2>
      
      {/* Dynamic grid layout with 4 images per row */}
      <Row className="g-4">
        {images.map((image) => (
          <Col key={image.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <div className="gallery-item-wrapper">
              <Image
                src={image.url}
                fluid
                rounded
                className="shadow-lg img-fluid gallery-image"
                onClick={() => setSelectedImage(image)}
                style={{ cursor: "pointer" }}
                alt={image.title}
              />
              {/* <div className="image-overlay">
                <h5 className="image-title">{image.title}</h5>
              </div> */}
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal for Image Preview */}
      <Modal show={!!selectedImage} onHide={() => setSelectedImage(null)} centered size="lg">
        <Modal.Body className="text-center">
          {selectedImage && (
            <>
              <Image 
                src={selectedImage.url} 
                fluid 
                className="modal-image" 
                alt={selectedImage.title} 
                style={{ maxHeight: '70vh', objectFit: 'contain' }}
              />
              <h4 className="mt-3">{selectedImage.title}</h4>
              <p>{selectedImage.content}</p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Gallery;