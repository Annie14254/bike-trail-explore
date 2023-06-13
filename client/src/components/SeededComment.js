import { useEffect, useState } from 'react'
import React from 'react';
import { Card } from 'react-bootstrap';
import "../styles/comment.css";
import { useUserContext } from '../ctx/UserContext';


const SeededComment = (props) => {

  const { currUser } = useUserContext()
  const [ reviewList, setReviewList ] = useState([])
  const [reviewBody, setReviewBody] = useState('')
  
  const handleReviewChange = (e) => {
    setReviewBody(e.target.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    createReview();
    document.location.reload()
  }

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

  function createReview(){
    fetch("/api/review", {
        method: "POST",
        body: JSON.stringify({
            reviewAuthor: currUser.username,
            reviewText: reviewBody
          }),
          headers: {
            "Content-Type": "application/json"
          }
    })

  }

  useEffect(() => {
    fetchReview()
  }, [])

  useEffect(() => {
    console.log(reviewList)
  }, [reviewList])
 

      return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input className='reviewPost'
                type="textarea"
                placeholder="Add a Review"
                value={reviewBody}
                onChange={handleReviewChange}
                required
                />
                <button className="rvwBtn" type="submit">Post</button>
            </form>
        </div>
        <div>
            {reviewList?.map(review => (
                <Card key = {review?._id} id='comment-card'>
                    <Card.Body className='card-content'>
                        <Card.Title className='card-content'>{review?.reviewAuthor}</Card.Title>
                        <Card.Text>Created at: {review?.createdAt}</Card.Text>
                        <Card.Text>{review?.reviewText}</Card.Text>
                    </Card.Body>
                </Card>
            
            ))}
        </div>
        </>
      )
  
}

export default SeededComment