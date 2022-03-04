const router = require("express").Router();
const {
  getAllThoughts,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughts-controller");

router.route("/:userId").post(addThought);

router.route("/").get(getAllThoughts);

router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
