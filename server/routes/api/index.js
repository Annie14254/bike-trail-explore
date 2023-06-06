const router = require('express').Router();
const userRoutes = require('./user-routes');
const trailRoutes = require('./trail-routes');

router.use('/trail', trailRoutes);
router.use('/user', userRoutes);

module.exports = router;
