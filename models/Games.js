const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: {type: String, required: true, unique: true },
  age: {type: Number, required: true },
  dollar: {type: Number, required: true },
  cost: {type: Number, required: true },
  time: {type: Date, required: true },
  gender: {type: String, required: true },
  about: String,
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;