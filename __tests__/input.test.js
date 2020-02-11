'use strict';



jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
  return {
    action: 'add',
    payload: 'This is a test note',
  };
});

const Input = require('../lib/input.js');

describe('Input Module', () => {
  it('properly parses the given input', () => {
    expect()
  });
});