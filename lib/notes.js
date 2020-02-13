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
    this.category = options.command.category;
    console.log('this.cat', this.category);
  }

  execute() {
    switch (this.action) {
      case 'add':
        this.add(this.payload);
        break;
      default: break;
    }
  }

  async add() {
    const data = {
      action: this.action,
      payload: this.payload,
    };
    let noteToAdd = new Note(data);
    console.log(`adding note: ${this.payload}`);
    await noteToAdd.save();
    console.log('created note', noteToAdd);




    mongoose.disconnect();
  }



}


module.exports = Notes;