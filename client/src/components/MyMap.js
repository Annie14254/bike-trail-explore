import { useEffect } from 'react'
var mapDisplay = document.getElementById("mapDisplay")

const MyMap = (props) => {
  // maybe: set every prop in URL
  // const [imgSrc, setImgSrc] = useState("")

  useEffect(() => {
    
  }, [])

  return (
    // The actual viewable map
    <>
    <p>Map goes here</p>
    <p>{props.lat}</p>
    <p>{props.lon}</p>
    <img src={`https://maps.googleapis.com/maps/api/staticmap?size=400x400&center=${props.lat},${props.lat}&zoom=6&path=weight:3%7Ccolor:black%7Cenc:${props.polyline}&key=AIzaSyDjUvypn2RUsTLSqsK6kOXCuA--8gSQOEc`}/>
    </>
  )
}

export default MyMap