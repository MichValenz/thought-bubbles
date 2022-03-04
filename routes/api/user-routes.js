const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  addFriend,
  deleteUser,
} = require("../../controllers/user-controller");

// Set up GET all and POST at /api/users
// /api/users
router.route("/").get(getAllUsers).post(createUser);

// Set up GET one, PUT, and DELETE at /api/user/:id
// /api/user/:id
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/users/:userId/friends/:friendId").put(addFriend);
module.exports = router;
