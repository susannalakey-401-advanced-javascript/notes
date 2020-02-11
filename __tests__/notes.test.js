const Note = require('../lib/notes.js');



describe('add()', () => {
  it('console logs the text of the note', () => {
    const note = new Note();

    expect(note.add()).toEqual(this.payload);
  });
})