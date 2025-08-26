const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  borrowedAt: { type: Date, default: Date.now },
  returnedAt: { type: Date },
});

module.exports = mongoose.model("Borrow", borrowSchema);
