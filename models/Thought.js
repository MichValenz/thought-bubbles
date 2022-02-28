const { Schema, model } = require("mongoose");

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
  },
  reactions: {
    type: [],
  },
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
