
const Input = require('../lib/input.js');

// mock the user's having inputted "node index.js -a 'this is a note' "


describe('Input Module', () => {
  it('valid() respects a properly formed input', () => {
    const properlyFormedInput = ['-l', 'hello'];
    const options = new Input(properlyFormedInput);
    expect(options.valid()).toBeTruthy();
  });

  it('valid() rejects an improperly formed input', () => {
    const improperlyFormedInput = ['-x'];
    const options = new Input(improperlyFormedInput);
    expect(options.valid()).toBeFalsy();
  });

  it('parseInput() returns a properly formed object', () => {
    const input = new Input(['-a', 'this should succeed']);
    expect(input.command).toEqual({
      action: 'add',
      payload: 'this should succeed',
    });
  });

  it('parseInput() returns a properly formed object with long arguments', () => {
    const input = new Input(['--add', 'this should succeed']);
    expect(input.command).toEqual({
      action: 'add',
      payload: 'this should succeed',
    });
  });
});