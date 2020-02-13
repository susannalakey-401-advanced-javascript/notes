const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  action: { type: String, required: true },
  payload: { type: String, required: true },
  category: { type: String, required: false },
});



module.exports = mongoose.model('noteSchema', noteSchema);

