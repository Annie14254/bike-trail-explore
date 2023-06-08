import React from 'react'
import "../styles/Home.css";
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function Home() {
  return (
    <div id="home-container">
      {/* hero image */}

      <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('../styles/images/hero.jpg')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
            </div>
          </div>
        </div>
      </div>
    </header>

      <Container className='mx-auto my-3 p-3 card-group d-flex gap-2'>
        <Card className='card rounded border-0'>
          <Card.Img variant="top" src="https://fakeimg.pl/400x400" />
          <Card.Body>
            <Card.Title>Trail #1</Card.Title>
            <Card.Text>This is a trail description of some trail that definitely exists somewhere and is not completely made up</Card.Text>
          </Card.Body>
          <Card.Footer class="d-grid gap-2">
            <Button class="btn btn-outline-primary">View trail</Button>
          </Card.Footer>
        </Card>
        <Card className='card rounded border-0'>
          <Card.Img variant="top" src="https://fakeimg.pl/400x400" />
          <Card.Body>
            <Card.Title>Trail #1</Card.Title>
            <Card.Text>This is a trail description of some trail that definitely exists somewhere and is not completely made up</Card.Text>
          </Card.Body>
          <Card.Footer class="d-grid gap-2">
            <Button class="btn btn-outline-primary">View trail</Button>
          </Card.Footer>
        </Card>
        <Card className='card rounded border-0'>
          <Card.Img variant="top" src="https://fakeimg.pl/400x400" />
          <Card.Body>
            <Card.Title>Trail #1</Card.Title>
            <Card.Text>This is a trail description of some trail that definitely exists somewhere and is not completely made up</Card.Text>
          </Card.Body>
          <Card.Footer class="d-grid gap-2">
            <Button class="btn btn-outline-primary">View trail</Button>
          </Card.Footer>
        </Card>
        <Card className='card rounded border-0'>
          <Card.Img variant="top" src="https://fakeimg.pl/400x400" />
          <Card.Body>
            <Card.Title>Trail #1</Card.Title>
            <Card.Text>This is a trail description of some trail that definitely exists somewhere and is not completely made up</Card.Text>
          </Card.Body>
          <Card.Footer class="d-grid gap-2">
            <Button class="btn btn-outline-primary">View trail</Button>
          </Card.Footer>
        </Card>
      </Container>

// import MyMap from '../components/MyMap'

// function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>  
//       <div id = "mapDisplay">

//       <MyMap lat="3.21" lon="1.23" polyline="c|gtGbrt_QnzoAcpwDpgtAz~eBm{u@ra{@nnyZddwBht|Oyr~xAnqv]amteFnjtMo`waHbj_aByz}bC`crnAldfdDv|aO~nohDxhtuCnhnc@ndmJ}citD"/>
//       </div>
    </div>
  )
}


export default Home