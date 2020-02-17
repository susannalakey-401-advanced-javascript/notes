// spy looks for if something was called

jest.spyOn(global.console, 'log');


// check that execute function does nothing if user gave invalid input

describe('Notes Module', () => {
  let Notes;

  // supergoose needs to do setup before attempting to use mongoose
  beforeEach(() => {
    require('@code-fellows/supergoose');
    Notes = require('../lib/notes.js');
  });

  it('execute() does nothing when the options are invalid', () => {
    const thisCommandWillFail = { command: { 'x': 'banana' } };
    const notes = new Notes(thisCommandWillFail);
    notes.execute();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('add() can add a note', () => {
    const action = 'add';
    const payload = 'this will succeed';
    const notes = new Notes({ command: { action: action, payload: payload } });
    notes.execute();
    expect(console.log).toHaveBeenCalledWith(`adding note: ${payload}`);
  });

  xit('delete() can delete an entry', () => {
    const action = 'delete';
    const id = '12345';
    const notes = new Notes({ command: { action: action, payload: id } });
    // console.log('delete test ', notes);
    notes.execute();
    expect(console.log).toHaveBeenCalledWith('Note deleted at ID: ', id);
  });

  xit('list() can list all entries', () => {

  });

  xit('list() can list entries when given a category', () => {

  });

  xit('update() will change the contents of the text of an entry', () => {

  });


});