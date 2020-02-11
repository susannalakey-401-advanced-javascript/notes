'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes(input);



if (input.valid()) {
  notes.execute();
} else {
  help();
}

function help() {
  console.log(`It's broken!`);
  process.exit();
}