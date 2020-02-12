const Validator = require('./validator.js');
const validator = new Validator();
const Note = require('../models/note-schema.js');
const mongoose = require('mongoose');
const MONGOOSE_URI = 'mongodb://localhost:27017/notes';


mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

class Notes {
  constructor(options) {
    this.action = options.command.action;
    this.payload = options.command.payload;
  }

  execute() {
    switch (this.action) {
      case 'add':

        this.add(this.payload);
        break;
      default: break;
    }
  }

  add() {
    console.log(`adding note: ${this.payload}`);


  }

}


module.exports = Notes;