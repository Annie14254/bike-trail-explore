const mongoose = require("mongoose");
const db = require("../config/connection");
const fetch = require("node-fetch");
const { User, Review, Trail } = require('../models');
const trailSeeds = require('./trailData.json');
const reviewSeeds = require('./reviewData.json');
const userSeeds = require('./userData.json')

db.once('open', async () => {
   try {
     await Trail.deleteMany({});
     await Trail.create(trailSeeds);

     await Review.deleteMany({});
     await Review.create(reviewSeeds)

     await User.deleteMany({});
     await User.create(userSeeds)
 
     console.log('all done!');
     process.exit(0);
   } catch (err) {
     throw err;
   }
 });