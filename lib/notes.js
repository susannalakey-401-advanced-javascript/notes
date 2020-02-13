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
    this.category = options.command.payload;

  }

  execute() {
    switch (this.action) {
      case 'add':
        this.add(this.payload);
        break;
      case 'list':
        this.list(this.payload);
        break;
      case 'delete':
        this.delete(this.payload);
        break;
      default: break;
    }
  }

  async add() {
    const data = {
      action: this.action,
      payload: this.payload,
      category: this.category,
    };
    const noteToAdd = new Note(data);
    console.log(`adding note: ${this.payload}`);
    await noteToAdd.save();
    console.log('created note', noteToAdd);

    mongoose.disconnect();
  }

  async list() {

    //if statement for category or no category
    const listAll = await Note.find({});
    console.log('list all', listAll);
    const listCategory = await Note.find({ category: this.category });
    console.log('list by category', listCategory);
    mongoose.disconnect();
  }

  async delete() {
    await Note.findByIdAndRemove(this.payload);
    mongoose.disconnect();
  }
}


module.exports = Notes;