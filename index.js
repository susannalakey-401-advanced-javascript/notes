const mongoose = require('mongoose');
const MONGOOSE_URI = 'mongodb://localhost:27017/notes';
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');



const input = new Input(process.argv.slice(2));

const notes = new Notes(input);


if (input.valid()) {
  // input.command or something else
  notes.execute()
    .then(() => {
      return mongoose.disconnect();
    })
    .catch(error => { console.error(error); })
} else {
  help();
}

function help() {
  console.log(`It's broken!`);
  process.exit();
}