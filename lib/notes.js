

const NotesModel = require('../models/note-schema.js');
const mongoose = require('mongoose');
const MONGOOSE_URI = 'mongodb://localhost:27017/notes';


mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

class Notes {
  constructor() {

  }


  // add parameter
  async execute(options) {
    switch (options.action) {
      case 'add':
        return this.add(options.payload, options.category);
      case 'list':
        return this.list(options.payload);
      case 'delete':
        return this.delete(options.payload);
      default: return Promise.resolve();
    }
  }

  async add(text, category) {
    const data = {
      text: text,
      category: category,
    };
    const noteToAdd = new NotesModel(data);
    console.log(`adding note: ${data.text}`);
    const saved = await noteToAdd.save();
    console.log('created note', saved);
    return saved;
  }

  async list(category) {
    // lists notes by given category
    const query = category ? { category } : {};  // this line is breaking list 
    const listNotes = await NotesModel.find(query);
    listNotes.forEach(note => {
      console.log(note.text);
      console.log('');
      console.log(`Category: ${note.category}\t ID: ${note.id}`);
    });
    return;
  }

  async delete(id) {
    await NotesModel.findByIdAndDelete(id)
      .then(() => console.log('Note deleted at ID: ', id));
  }
}


module.exports = Notes;