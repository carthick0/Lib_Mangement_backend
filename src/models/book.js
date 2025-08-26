const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  publicationDate: Date,
  genre: String,
  copies: Number,
});

module.exports = mongoose.model("Book", bookSchema);
