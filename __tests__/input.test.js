
const Input = require('../lib/input.js');


jest.mock('minimist');
const minimist = require('minimist');
// mock the user's having inputted "node index.js -a 'this is a note' "
minimist.mockImplementation(() => {
  return {
    a: 'this is a note',
  };
});

describe('Input Module', () => {
  it('valid() respects a properly formed input', () => {
    const options = new Input();
    expect(options.valid()).toBeTruthy();
  });

  it('valid() rejects an improperly formed input', () => {
    let options = new Input();
    options.command = {};
    expect(options.valid()).toBeFalsy();
  });

  it('parseInput() returns a properly formed object', () => {
    const options = new Input();
    const command = options.parseInput({ a: 'this should succeed' });
    expect(command.action).toBeDefined();
    expect(command.payload).toBeDefined();
  });
});