'use strict';



const Input = require('../lib/input.js');

describe('Input Module', () => {
  it('properly parses the given input', () => {
    // given   (given some inputs)
    const commandLineInput = ['-a', 'this is a note'];

    // when    (when I call my module with those inputs)
    const input = new Input(commandLineInput);

    // then    (something happens)
    expect(input.getParameters()).toEqual({
      action: 'add',
      payload: 'this is a note',
    });
  });
});