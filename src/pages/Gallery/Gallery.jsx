import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import img1 from "../../assets/sadam3.png";
import img2 from "../../assets/sadam1.png";
import img3 from "../../assets/sadam2.png";
import img4 from "../../assets/sadam4.png";
import img5 from "../../assets/sadam5.png";
import "./Gallery.css";

const images = [
  { id: 1, url: img1, title: "Nasi Kandar 1",content:'lorem dummy content' },
  { id: 2, url: img2, title: "Nasi Kandar 2",content:'lorem dummy content' },
  { id: 3, url: img3, title: "Nasi Kandar 3",content:'lorem dummy content' },
  { id: 4, url: img4, title: "Nasi Kandar 4",content:'lorem dummy content' },
  { id: 5, url: img5, title: "Nasi Kandar 5",content:'lorem dummy content' }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Container className="gallery-container  p-4 mb-5 border-warning rounded" style={{width:'90%',marginTop:'90px'}}>
      <h2 className="mb-4"style={{color:'#39DB4A'}}>Gallery</h2>
      <Row className="g-3">
        {/* First Row with 2 columns (2 images) */}
        <Col xs={6} className="d-flex justify-content-center">
          <Image
            src={images[0].url}
            fluid
            rounded
            className="shadow-lg img-fluid"
            onClick={() => setSelectedImage(images[0])}
            style={{ cursor: "pointer" }}
            alt={images[0].title}
          />
        </Col>
        <Col xs={6} className="d-flex justify-content-center">
          <Image
            src={images[1].url}
            fluid
            rounded
            className="shadow-lg img-fluid"
            onClick={() => setSelectedImage(images[1])}
            style={{ cursor: "pointer" }}
            alt={images[1].title}
          />
        </Col>
      </Row>
      <Row className="g-3 mt-2">
        {/* Second Row - First Column (1 image) */}
        <Col xs={6} className="d-flex justify-content-center">
          <Image
            src={images[2].url}
            fluid
            rounded
            className="shadow-lg img-fluid"
            onClick={() => setSelectedImage(images[2])}
            style={{ cursor: "pointer" }}
            alt={images[2].title}
          />
        </Col>
        {/* Second Row - Second Column (2 stacked images) */}
        <Col xs={6}>
          <Row className="g-3">
            <Col xs={12} className="d-flex justify-content-center">
              <Image
                src={images[3].url}
                fluid
                rounded
                className="shadow-lg img-fluid"
                onClick={() => setSelectedImage(images[3])}
                style={{ cursor: "pointer" }}
                alt={images[3].title}
              />
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
              <Image
                src={images[4].url}
                fluid
                rounded
                className="shadow-lg img-fluid"
                onClick={() => setSelectedImage(images[4])}
                style={{ cursor: "pointer" }}
                alt={images[4].title}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      {/* Modal for Image Preview */}
      <Modal show={!!selectedImage} onHide={() => setSelectedImage(null)} centered>
        <Modal.Body className="text-center">
          {selectedImage && (
            <>
              <Image src={selectedImage.url} fluid className="modal-image" alt={selectedImage.title} />
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
