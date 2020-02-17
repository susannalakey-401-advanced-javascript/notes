const NotesModel = require('./note-model');


class Note {
  constructor() { }

  get(category) {
    const query = NotesModel.find(category ? { category } : {});
    return query.exec();
  }

  create(data) {
    const noteToAdd = new NotesModel(data);
    return noteToAdd.save();
  }

  update(id, record) {
    return NotesModel.findByIdAndUpdate(id, record, { new: true });

  }

  delete(id) {
    return NotesModel.findByIdAndDelete(id);

  }
}

module.exports = Note;