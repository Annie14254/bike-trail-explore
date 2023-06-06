const router = require('express').Router();

// Import any review controllers needed here
const { createReview, getAllReviews, getOneReview, updateReview, deleteReview } = require('../../controllers/review-controllers');

// Declare the review routes that point to the controllers above
router.route('/').post(createReview);
router.route('/').get(getAllReviews);
router.route('/:id').get(getOneReview);
router.route('/:id').put(updateReview);
router.route('/:id').delete(deleteReview);

module.exports = router;