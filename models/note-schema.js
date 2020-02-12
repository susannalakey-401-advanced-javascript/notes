const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  action: { type: String, required: true },
  payload: { type: String, required: true },
});



module.exports = mongoose.model('noteSchema', noteSchema);

