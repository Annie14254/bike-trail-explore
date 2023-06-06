const router = require('express').Router();

// Import any controllers needed here
const { createUser, getAllUsers, getOneUser } = require('../../controllers/user-controllers');

// Declare the routes that point to the controllers above
router.route('/').post(createUser);
router.route('/').get(getAllUsers)
router.route('/:id').post(getOneUser);

module.exports = router;