import { useEffect } from 'react'
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "../styles/Home.css";



const MyMap = (props) => {
  // maybe: set every prop in URL
  // const [imgSrc, setImgSrc] = useState("")

  useEffect(() => {
    
  }, [])

  return (
    // The actual viewable map

        <Col>
            <Card md={3}>
              <Card.Img variant="top" src={`https://maps.googleapis.com/maps/api/staticmap?size=400x400&center=${props.mapDatum.lat},${props.mapDatum.lon}&zoom=12 &path=weight:3%7Ccolor:red%7Cenc:${props.mapDatum.polyline}&key=AIzaSyDjUvypn2RUsTLSqsK6kOXCuA--8gSQOEc`} />
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  This is a sample card with some example content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

  )
}

export default MyMap