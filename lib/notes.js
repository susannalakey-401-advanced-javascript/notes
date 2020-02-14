const NotesCollection = require('../models/note-collection.js');
const noteCollection = new NotesCollection();

class Notes {
  constructor(input) {
    this.input = input;
  }


  // add parameter
  async execute() {
    const options = this.input.command;

    switch (options.action) {
      case 'add':
        return this.add(options.payload, options.category);
      case 'list':
        return this.list(options.category);
      case 'delete':
        return this.delete(options.payload);
      default: return Promise.resolve();
    }
  }


  // working
  async add(text, category) {
    const data = {
      text: text,
      category: category,
    };

    console.log(`adding note: ${data.text}`);
    const saved = await noteCollection.create(data);
    console.log('created note', saved);


  }
  // is listing all even when category is selected
  async list(category) {


    const listNotes = await noteCollection.get(category);
    listNotes.forEach(note => {
      console.log(note.text);
      console.log('');
      console.log(`Category: ${note.category}\t ID: ${note.id}`);
      console.log('');
    });
  }

  // isn't deleting
  async delete(id) {
    await noteCollection.delete(id);
    console.log('Note deleted at ID: ', id);
  }
}


module.exports = Notes;