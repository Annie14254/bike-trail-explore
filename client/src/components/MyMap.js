import { useEffect } from 'React'

const MyMap = (props) => {
  // use state whatnot-ery

  useEffect(() => {
    // Make your API call
  }, [])

  return (
    // The actual viewable map
    <>
    <p>Map goes here</p>
    <p>{props.lat}</p>
    <p>{props.lon}</p>
    </>
  )
}

export default MyMap