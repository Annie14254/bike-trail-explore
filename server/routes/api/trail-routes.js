const router = require('express').Router();

// Import any controllers needed here
const { createTrail, getAllTrails, getOneTrail } = require('../../controllers/trail-controllers');

// Declare the routes that point to the controllers above
router.route('/').post(createTrail);
router.route('/').get(getAllTrails)
router.route('/:id').get(getOneTrail);

module.exports = router;