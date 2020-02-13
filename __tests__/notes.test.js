const Notes = require('../lib/notes.js');

require('@code-fellows/supergoose');

// spy looks for if something was called

jest.spyOn(global.console, 'log');

// check that execute function does nothing if user gave invalid input

describe('Notes Module', () => {

  it('execute() does nothing when the options are invalid', () => {
    const thisCommandWillFail = { command: { 'x': 'banana' } };
    const notes = new Notes(thisCommandWillFail);
    notes.execute();
    expect(console.log()).not.toHaveBeenCalled();
  });

  it('Notes.prototype.add() can add a note', () => {
    const action = 'add';
    const payload = 'this will succeed';
    const notes = new Notes({ command: { action: action, payload: payload } });
    notes.execute();
    expect(console.log).toHaveBeenCalledWith(`adding note: ${payload}`);
  });


});