const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  category: { type: String, required: false, default: 'uncategorized' },
  text: { type: String, required: true },
});

module.exports = mongoose.model('note', noteSchema);

