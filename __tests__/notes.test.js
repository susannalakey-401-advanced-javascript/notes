
jest.mock('../models/notes-collection.js');


const NotesCollection = require('../models/notes-collection.js');
const Notes = require('../lib/notes.js');


describe('Notes Module', () => {

  it('execute() does nothing when the options are invalid', async () => {
    const thisCommandWillFail = { command: { 'x': 'banana' } };
    const notes = new Notes(thisCommandWillFail);
    await notes.execute();
    expect(NotesCollection.prototype.create).not.toHaveBeenCalled();
  });

  it('add() can add a note', async () => {
    const action = 'add';
    const payload = 'this will succeed';
    const notes = new Notes({ command: { action: action, payload: payload } });
    await notes.execute();
    expect(NotesCollection.prototype.create).toHaveBeenCalledWith({
      text: payload,
      category: undefined,
    });

  });

  it('delete() can delete an entry', async () => {
    const action = 'delete';
    const id = '12345';
    const notes = new Notes({ command: { action: action, payload: id } });
    NotesCollection.prototype.delete.mockReturnValue(Promise.resolve('Note deleted at ID: ', id));
    await notes.execute();
    expect(NotesCollection.prototype.delete).toHaveBeenCalledWith(id);
  });

  it('list() can list all entries', async () => {
    const action = 'list';
    const category = 'fruit';
    const notes = new Notes({ command: { action, category } });
    NotesCollection.prototype.get.mockReturnValue(Promise.resolve([]));
    await notes.execute();
    expect(NotesCollection.prototype.get).toHaveBeenCalledWith(category);
  });


  it('update() will change the contents of the text of an entry', async () => {
    const action = 'update';
    const id = '12345';
    const newText = 'new text here';
    const notes = new Notes({ command: { action: action, payload: id, text: newText } });

    NotesCollection.prototype.update.mockReturnValue(`${newText}\nRecord ${id} has been updated.`);

    await notes.execute();
    expect(NotesCollection.prototype.update).toHaveBeenCalledWith(id, newText);
  });
});