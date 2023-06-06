const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

  const reviewSchema = new Schema({
    reviewAuthor: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },

    reviewText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  });

const Review = model('Review', reviewSchema);
module.exports = Review;