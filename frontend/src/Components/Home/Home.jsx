import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <div>
      {/* <div style={{width:'85%',paddingLeft:'290px'}}>
      <div
  id="carouselExampleSlidesOnly"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/carousel1.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/carousel2.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/carousel3.webp" className="d-block w-100" alt="..." />
    </div>
  </div>
</div>
  

      
      </div> */}

      {/* <br /> */}

      <div className="text">
        {/* <h2 style={{paddingLeft:"10px"}}>PREMIUM  </h2> */}
      </div>
      {/* <img src="/carousel2.webp" alt="" style={{ paddingLeft: "250px" }} />  */}
      <div className="text-center">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/carousel2.webp" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/carousel3.webp" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/carousel4.webp" className="d-block w-100" alt="..." />
            </div>
            {/* <div className="carousel-item">
              <img src="/carousel.webp" className="d-block w-100" alt="..." />
            </div> */}
          </div>
        </div>
        {/* <div className="image">
        <img src="/carousel1.webp" alt="" style={{ width:"100%" }} />
      </div> */}
        <br />
        <br />
      </div>
      <div className="display ">
        <div
          className="g-4"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Card style={{ width: "20rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src="/card1.webp" />
            <Card.Body>
              <Card.Text>BE DANDIYA READY|UPTO 14Y</Card.Text>
              <Button Link as={Link} to="/ProductList" variant="primary">
                View
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src="/card2.webp" />
            <Card.Body>
              <Card.Text>DRESSS UP DREAMS</Card.Text>
              <Button Link as={Link} to="/ProductList" variant="primary">
                View
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src="/card3.webp" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>MINI STYLE ICONS</Card.Text>
              <Button Link as={Link} to="/ProductList" variant="primary">
                View
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src="/card 4.webp" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>CHECK ME OUT|UPTO 14Y</Card.Text>
              <Button Link as={Link} to="/ProductList" variant="primary">
                View
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "20rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src="/card7.webp" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>FASHION FIZZLES TO SIZZLES</Card.Text>
              <Button Link as={Link} to="/ProductList" variant="primary">
                View
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src="/card6.webp" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>LITTLE ROYALITIES|UPTO 14Y</Card.Text>
              <Button Link as={Link} to="/ProductList" variant="primary">
                View
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src="/card8.webp" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>PRIME PICKSFOR LITTLE PEEPS</Card.Text>
              <Button Link as={Link} to="/ProductList" variant="primary">
                View
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src="/card9.webp" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>MEGA OFFER</Card.Text>
              <Button Link as={Link} to="/ProductList" variant="primary">
                View
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* <div></div>
      <Row xs={20} md={15} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="/card2.webp" />
              <Card.Body>
                <Card.Title>DRESS UP DREAMS </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row xs={20} md={15} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="/card3.webp" />
              <Card.Body>
                <Card.Title>MINI STYLE ICONS</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row xs={20} md={15} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="/card 4.WEBP" />
              <Card.Body>
                <Card.Title>CHECK ME OUT|UPTO 14Y</Card.Title>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}
      <div className="color">
        {/* <div className="text-center" style={{paddingLeft:"500px"}}>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="/card5.webp" />
            <Card.Body>
              <Card.Title>STRIDE AHEAD IN COMFORT|2-14Y</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div> */}
        <Container>

          <Row>
            
            <Col xs={6} md={4}>
           <Link to={'/ProductList'}>  <Image src="/squareimage.webp" rounded size /></Link> 
            </Col>
            <Col xs={6} md={4}>
              {/* <Image src="circleimage.webp" roundedCircle /> */}
            </Col>
            <Col xs={6} md={4}>
            <Link to={'/ProductList'} >  <Image src="squareimg.webp" thumbnail /></Link> 
            <Link to={'/ProductList'}>  <Image src="circleimage.webp" thumbnail /></Link> 

            </Col>
          </Row>
        </Container>
      
      </div>
    </div>
  );
};

export default Home;
