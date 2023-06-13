import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import MyMap from '../components/MyMap'
import SeededComment from '../components/SeededComment';
import "../styles/Home.css";
import heroImg from "../styles/images/hero.jpg"
import { useUserContext } from "../ctx/UserContext";


const Home = () => {
  const { currUser } = useUserContext()
  return (
    <div className="master">
      <div className="hero">
        <Image src={heroImg} alt = "An image of a bicycle on its side near a lake" className = "hero-image"fluid />
      </div>

      <Container>
        <Row className='gy-3 card-container'>
          <MyMap/>
        </Row>
      </Container>
      
      {currUser && (
        <Container>
        <Col md={4}>
          <SeededComment/>
        </Col>
      </Container>
      )}
    </div>
  );
};

export default Home;