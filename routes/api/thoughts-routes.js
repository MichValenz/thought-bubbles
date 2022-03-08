const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  updateThought,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughts-controller");

router.route("/:userId").post(addThought);

router.route("/").get(getAllThoughts);

router.route("/:userId/:thoughtId").put(updateThought).post(addReaction).delete(removeThought);

router.route("/:thoughtId").get(getThoughtById);

router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
