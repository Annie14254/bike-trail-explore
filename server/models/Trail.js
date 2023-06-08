const { Schema, model } = require('mongoose');

const trailSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   description: {
      type: String,
   },
   lat: {
      type: Number,
      required: true
   },
   lon: {
      type: Number,
      required: true
   },
   polyline: {
      type: String,
      required: true
   },
});

const Trail = model('Trail', trailSchema);
module.exports = Trail;