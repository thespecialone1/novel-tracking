const mongoose = require('mongoose');
const NovelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  description: { type: String },
  cover: { type: String }, // URL to cover image
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
module.exports = mongoose.model('Novel', NovelSchema);


