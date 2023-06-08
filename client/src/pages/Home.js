import React from 'react'
import MyMap from '../components/MyMap'
import mapData from '../components/MapData'

function Home() {
  return (
    <div>
      <h1>Home Page</h1>  
      <div id = "mapDisplay">
        
        <div>
          {mapData.map(mapDatum => {
            return(
              <div>
                <MyMap mapDatum={mapDatum}/>
              </div>
            )
          })}
        </div>      
      {/* <MyMap lat="3.21" lon="1.23" polyline="c|gtGbrt_QnzoAcpwDpgtAz~eBm{u@ra{@nnyZddwBht|Oyr~xAnqv]amteFnjtMo`waHbj_aByz}bC`crnAldfdDv|aO~nohDxhtuCnhnc@ndmJ}citD"/> */}
      </div>
    </div>
  )
}


export default Home