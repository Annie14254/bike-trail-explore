const mongoose = require("mongoose");
const Trail = require("../models/Trail");
const db = require("../config/connection").mongoURI;
const fetch = require("node-fetch");

let resultData;
let saveCounter = 0;
mongoose.connect(db)

.then(() => console.log("mongodb connection success"))
.catch(error => console.log(error));
const url = ['https://data.cityofnewyork.us/resource/pvvr-75zk.json']
url.map(async url => {
try{
   const response = await fetch(url);
   const json = await response.json();
   resultData = [...json];
   for (let i = 0; i < resultData.length; i++) {
      let trail = new Trail({
         name: resultData[i].name,
         description: resultData[i].status,
         location: { coordinates:      [resultData[i].polygon.coordinates[0][0][1] , resultData[i].polygon.coordinates[0][0][0]]}
      })
   trail.save(() => {
      console.log("saved" + trail)
      
      saveCounter++;
  
      if (saveCounter === resultData.length) {
         mongoose.disconnect()
         .then(() => console.log("saved succesfully and mongodb disconnected"))
         .catch(error => console.log(error));
         }
      });
   }
} catch (error) {
   console.log(error);
}
})