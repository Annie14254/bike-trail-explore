const mongoose = require("mongoose");
const Trail = require("../models/Trail");
const db = require("../config/connection").mongoURI;
const fetch = require("node-fetch");
var StravaApiV3 = require('strava_api_v3');

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


var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "23056b86f67625ae9f162e85ac8f16260ba668a5"

var api = new StravaApiV3.ActivitiesApi()

var id = 789; // {Long} The identifier of the activity.

var opts = { 
  'includeAllEfforts': true // {Boolean} To include all segments efforts.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getActivityById(id, opts, callback);

// https://maps.googleapis.com/maps/api/staticmap
// ?size=400x400&center=${lat},${lon}&zoom=4
// &path=weight:3%7Ccolor:black%7Cenc:${polyline}
// &key=AIzaSyDjUvypn2RUsTLSqsK6kOXCuA--8gSQOEc

// client secret ceb94b4a0bb5aee35dc049b4bb624503586db0df
// Access token: 23056b86f67625ae9f162e85ac8f16260ba668a5
// Refresh token: dcfef47c8fa6140d14b76fbfa2c441e29a96e1c0
