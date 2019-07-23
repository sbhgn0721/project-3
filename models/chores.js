const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChoreSchema = new Schema({
  choreName: { type: String, required: true },
  level: {type: String, required: true},
  dueDate: { type: Date, default: Date.now },
  completion: {type: Boolean, require: true, default: false}
});

const Chore = mongoose.model("Chore", ChoreSchema);

module.exports = Chore;