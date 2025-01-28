const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
  novel: { type: mongoose.Schema.Types.ObjectId, ref: 'Novel', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, min: 0.5, max: 5, required: true },
  comment: { type: String },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Review', ReviewSchema);

