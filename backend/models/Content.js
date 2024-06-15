const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  title: String,
  imageUrl: String,
  description: String,
  categoryIds: [String],
});

module.exports = mongoose.model('Content', contentSchema);
