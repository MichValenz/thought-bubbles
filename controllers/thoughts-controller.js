const { Thought } = require("../models");

const ThoughtController = {
  // get all thoughts
  getAllThought(req, res) {
    Thought.find({})
      .then((thoughtDB) => res.json(thoughtDB))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one thought by id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((thoughtDB) => {
        // If no thought is found, send 404
        if (!thoughtDB) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(thoughtDB);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // createThought
  createThought({ body }, res) {
    Thought.create(body)
      .then((thoughtDB) => res.json(thoughtDB))
      .catch((err) => res.status(400).json(err));
  },
  // update thought by id
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((thoughtDB) => {
        if (!thoughtDB) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(thoughtDB);
      })
      .catch((err) => res.status(400).json(err));
  },
  // delete thought
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((thoughtDB) => {
        if (!thoughtDB) {
          res.status(404).json({ message: "No thought found with this id!" });
          return;
        }
        res.json(thoughtDB);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = ThoughtController;
