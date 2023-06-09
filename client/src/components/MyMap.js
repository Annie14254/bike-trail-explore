import { useEffect, useState } from 'react'
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "../styles/Home.css";
// import express from "express"
// const router = express.Router()
var allTrails = [];


// useEffect(() => {
//   const fetchBusinesses = () => {
//      return fetch("theURL", {method: "GET"}
//   )
//     .then(res => normalizeResponseErrors(res))
//     .then(res => {
//       return res.json();
//     })
//     .then(rcvdBusinesses => {
//       // some stuff
//     })
//     .catch(err => {
//       // some error handling
//     });
// };
// fetchBusinesses();
// }, []);

const MyMap = (props) => {

  const [ trailsList, setTrailsList ] = useState([])
  // maybe: set every prop in URL
  // const [imgSrc, setImgSrc] = useState("")
  

  function fetchTrails(){
    fetch("/api/trail")
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
        <Col md={3}>
         { trailsList.map( trail => (
            <Card key={trail._id}>
              <Card.Img variant="top" src={`https://maps.googleapis.com/maps/api/staticmap?size=400x400&center=${trail.lat},${trail.lon}&zoom=12 &path=weight:3%7Ccolor:red%7Cenc:${trail.polyline}&key=AIzaSyDjUvypn2RUsTLSqsK6kOXCuA--8gSQOEc`} />
              <Card.Body>
                <Card.Title>{trail.name}</Card.Title>
                <Card.Text>
                  {trail.description}
                </Card.Text>
              </Card.Body>
            </Card>
         ))}
        </Col>
      )


    
    // for(var i = 0; i < allTrails.length; i++){
    //   return(
    //     //The actual viewable map
    //     <Col>
    //         <Card md={3}>
    //           <Card.Img variant="top" src={`https://maps.googleapis.com/maps/api/staticmap?size=400x400&center=${allTrails[i].lat},${allTrails[i].lon}&zoom=12 &path=weight:3%7Ccolor:red%7Cenc:${allTrails[i].polyline}&key=AIzaSyDjUvypn2RUsTLSqsK6kOXCuA--8gSQOEc`} />
    //           <Card.Body>
    //             <Card.Title>Card 1</Card.Title>
    //             <Card.Text>
    //               This is a sample card with some example content.
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //   )
    // }

  
}

export default MyMap