import { useEffect, useState } from 'react'
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "../styles/Home.css";

const SeededComment = (props) => {

  const [ reviewList, setReviewList ] = useState([])
  // maybe: set every prop in URL
  // const [imgSrc, setImgSrc] = useState("")
  

  function fetchReview(){
    fetch("/api/review")
    .then(res =>{
      return res.json()
    })
    .then(data =>{
      setReviewList(data)
    })
    .catch(err => console.log(err.message))
  }

  useEffect(() => {
    fetchReview()
  }, [])

  useEffect(() => {
    console.log(reviewList)
  }, [reviewList])
 

      return(
        <>
        {reviewList?.map(review => (
            <Card key = {review?._id} className='comment-card'>
                <Card.Body className='card-content'>
                    <Card.Title className='card-content'>User</Card.Title>
                    <Card.Text>Created at: {review?.createdAt}</Card.Text>
                    <Card.Text>{review?.reviewText}</Card.Text>
                </Card.Body>
            </Card>
        
        ))}
        </>
      )
  
}

export default SeededComment