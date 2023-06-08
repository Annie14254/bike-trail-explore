import React from 'react';
import { Container, Image, Card, Row, Col } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <div>
      <div className="hero">
        <Image src="https://fakeimg.pl/1920x400" fluid />
      </div>
      
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
          </Col>
          {/* Example for Card 2 */}
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://fakeimg.pl/400x400" />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  This is another sample card with some example content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Repeat the Card component for the remaining 2 cards */}
          {/* Example for Card 3 */}
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://fakeimg.pl/400x400" />
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  This is yet another sample card with some example content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Example for Card 4 */}
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://fakeimg.pl/400x400" />
              <Card.Body>
                <Card.Title>Card 4</Card.Title>
                <Card.Text>
                  This is a final sample card with some example content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Example for Card 4 */}
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://fakeimg.pl/400x400" />
              <Card.Body>
                <Card.Title>Card 4</Card.Title>
                <Card.Text>
                  This is a final sample card with some example content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Example for Card 4 */}
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://fakeimg.pl/400x400" />
              <Card.Body>
                <Card.Title>Card 4</Card.Title>
                <Card.Text>
                  This is a final sample card with some example content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Example for Card 4 */}
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://fakeimg.pl/400x400" />
              <Card.Body>
                <Card.Title>Card 4</Card.Title>
                <Card.Text>
                  This is a final sample card with some example content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Example for Card 4 */}
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://fakeimg.pl/400x400" />
              <Card.Body>
                <Card.Title>Card 4</Card.Title>
                <Card.Text>
                  This is a final sample card with some example content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
