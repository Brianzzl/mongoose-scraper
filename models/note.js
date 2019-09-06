
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var NoteSchema = new Schema({
  User: String,
  body: String
});

var Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
