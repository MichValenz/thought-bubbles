const { User } = require("../models");

const UserController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .then((userDB) => res.json(userDB))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((userDB) => {
        // If no user is found, send 404
        if (!userDB) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(userDB);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // createUser
  createUser({ body }, res) {
    User.create(body)
      .then((userDB) => res.json(userDB))
      .catch((err) => res.status(400).json(err));
  },
  // update user by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((userDB) => {
        if (!userDB) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(userDB);
      })
      .catch((err) => res.status(400).json(err));
  },
  addFriend({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: body } },
      { new: true }
    )
      .then((userData) => {
        if (!userData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(userData);
      })
      .catch((err) => res.json(err));
  },
  // delete user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((userDB) => {
        if (!userDB) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(userDB);
      })
      .catch((err) => res.status(400).json(err));
  },

  // removeThought({ params }, res) {
  //   User.findOneAndUpdate(
  //     { _id: params.id },
  //     { $pull: { thoughts: { _id: params.id } } },
  //     { new: true }
  //   )
  //     .then((userData) => res.json(userData))
  //     .catch((err) => res.json(err));
  // },
};

module.exports = UserController;
