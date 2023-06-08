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
    <img src={`https://maps.googleapis.com/maps/api/staticmap?size=400x400&center=${props.mapDatum.lat},${props.mapDatum.lon}&zoom=12 &path=weight:3%7Ccolor:red%7Cenc:${props.mapDatum.polyline}&key=AIzaSyDjUvypn2RUsTLSqsK6kOXCuA--8gSQOEc`}/>
    </>
  )
}

export default MyMap