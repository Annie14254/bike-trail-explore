import { useEffect, useState } from 'react'
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "../styles/Home.css";

const SeededComment = (props) => {

  const [ reviewList, setReviewList ] = useState([])
  // maybe: set every prop in URL
  // const [imgSrc, setImgSrc] = useState("")
  

  function fetchReview(){
    fetch("/api/review",
    {headers: {
      'Content-Type': 'application/json'
    }})
    .then(res =>{
      return res.json()
    })
    .then(data =>{
      console.log(data)
      setReviewList(data.allReviews)
    })
    .catch(err => console.log(err.message))
  }

  useEffect(() => {
    console.log(reviewList)
  }, [reviewList])
 

  useEffect(() => {
    fetchReview()
  }, [])


      return(
        // The actual viewable map
        // <Col id='card-container'>
        //   <div className='card-container'>
        //   {trailsList.map(trail => (
        //     <Card key={trail._id} className='card'>
        //       <Card.Img
        //         variant="top"
        //           src={`https://maps.googleapis.com/maps/api/staticmap?size=400x400&center=${trail.lat},${trail.lon}&zoom=12&path=weight:3%7Ccolor:red%7Cenc:${trail.polyline}&key=AIzaSyDjUvypn2RUsTLSqsK6kOXCuA--8gSQOEc`}
        //         />
        //       <Card.Body>
        //         <Card.Title>{trail.name}</Card.Title>
        //         <Card.Text>{trail.description}</Card.Text>
        //       </Card.Body>
        //     </Card>
        //     ))}
        //   </div>
        // </Col>
        reviewList.map(review => (
            <Card>
                <Card.Body>
                    <Card.Title>User</Card.Title>
                    <Card.Text>Created at: {review.createdAt}</Card.Text>
                    <Card.Text>{review.reviewText}</Card.Text>
                </Card.Body>
            </Card>
        ))
      )
  
}

export default SeededComment