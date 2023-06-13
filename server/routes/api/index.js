const router = require('express').Router();
const userRoutes = require('./user-routes');
const trailRoutes = require('./trail-routes');
const reviewRoutes = require('./review-routes');

router.use('/trail', trailRoutes);
router.use('/user', userRoutes);
router.use('/review', reviewRoutes);

module.exports = router;