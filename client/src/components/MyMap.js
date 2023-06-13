import { useEffect, useState } from 'react'
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "../styles/Home.css";


const MyMap = (props) => {

  const [ trailsList, setTrailsList ] = useState([])

  function fetchTrails(){
    fetch("/api/trail",
    {headers: {
      'Content-Type': 'application/json'
    }})
    .then(res =>{
      return res.json()
    })
    .then(data =>{
      console.log(data)
      setTrailsList(data.allTrails)
    })
    .catch(err => console.log(err.message))
  }

  useEffect(() => {
    console.log(trailsList)
  }, [trailsList])
 

  useEffect(() => {
    fetchTrails()
  }, [])


      return(
        // The actual viewable map
        <Col>
          <div className='card-container'>
          {trailsList.map(trail => (
            <Card key={trail._id} className='card'>
              <Card.Body>
                <Card.Img
                  variant="top"
                    src={`https://maps.googleapis.com/maps/api/staticmap?size=400x400&center=${trail.lat},${trail.lon}&zoom=12&path=weight:3%7Ccolor:red%7Cenc:${trail.polyline}&key=AIzaSyDjUvypn2RUsTLSqsK6kOXCuA--8gSQOEc`}
                  />
                <Card.Title className='cardTitle'>{trail.name}</Card.Title>
                <Card.Text>{trail.description}</Card.Text>
              </Card.Body>
            </Card>
            ))}
          </div>
        </Col>
      )
}

export default MyMap