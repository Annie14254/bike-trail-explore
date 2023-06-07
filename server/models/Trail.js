const { Schema, model } = require('mongoose');

const trailSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   address: {
      type: String,
   },
   description: {
      type: String,
   },
   location: {
      type: {
         type: String,
         enum: ['Point'],
      },
      coordinates: {
         type: [Number],
      }
   },
});

const Trail = model('Trail', trailSchema);
module.exports = Trail;