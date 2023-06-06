const router = require('express').Router();

// Import any trail controllers needed here
const { createTrail, getAllTrails, getOneTrail, updateTrail, deleteTrail } = require('../../controllers/trail-controllers');

// Declare the trail routes that point to the controllers above
router.route('/').post(createTrail);
router.route('/').get(getAllTrails);
router.route('/:id').get(getOneTrail);
router.route('/:id').put(updateTrail)
router.route('/:id').delete(deleteTrail)

module.exports = router;