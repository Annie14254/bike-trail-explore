const router = require('express').Router();

// Import any user controllers needed here
// Include authUser and verifyUser
const { createUser, getAllUsers, getOneUser, authUser, verifyUser, updateUser, deleteUser } = require('../../controllers/user-controllers');

// Declare the user routes that point to the controllers above
router.route('/').post(createUser);
router.route('/').get(getAllUsers)
router.route('/:id').get(getOneUser);
router.route('/auth').post(authUser);
router.route('/verify').post(verifyUser);
router.route('/:id').put(updateUser)
router.route('/:id').delete(deleteUser)

module.exports = router;    