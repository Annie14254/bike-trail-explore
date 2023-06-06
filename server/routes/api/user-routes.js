const router = require('express').Router();

// Import any controllers needed here
const { createUser, getAllUsers, getOneUser, authUser, verifyUser } = require('../../controllers/user-controllers');

// Declare the routes that point to the controllers above
router.route('/').post(createUser);
router.route('/').get(getAllUsers)
router.route('/:id').get(getOneUser);
router.route('/auth').post(authUser);
router.route('/verify').post(verifyUser);

module.exports = router;