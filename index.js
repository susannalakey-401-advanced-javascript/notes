'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const newInput = new Input();

newInput.validateInput() ? Notes.action(newInput) : help();

function help() {
  console.log(`It's broken!`);
  process.exit();
}