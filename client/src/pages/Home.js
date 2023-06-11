import React from 'react';
import { Container, Image, Card, Row, Col } from 'react-bootstrap';
import MyMap from '../components/MyMap'
import mapData from '../components/MapData'
import "../styles/Home.css";
import heroImg from "../styles/images/hero.jpg"


const Home = () => {
  return (
    <div className="master">
      <div className="hero">
        <Image src={heroImg} alt = "An image of a bicycle on its side near a lake" className = "hero-image"fluid />
      </div>
    
{/*       
      <Container>
        <Row className='gy-3'>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://fakeimg.pl/400x400" />
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  This is a sample card with some example content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col> */}
         


      <Container>
        <Row className='gy-3 card-container'>
          <MyMap/>
        </Row>
      </Container>
    </div>
  );
};


export default Home;