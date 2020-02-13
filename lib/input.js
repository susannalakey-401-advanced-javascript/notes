// evaluates and validates the input (is it valid and is there data);
// returns an instance containing the action to perform and the payload for the aciton
const minimist = require('minimist');
const Validator = require('./validator.js');



class Input {
  constructor(command) {
    let args = minimist(process.argv.slice(2));
    this.command = this.parseInput(args);
  }

  parseInput(args) {
    let possibleArguments = {
      a: 'add',
      add: 'add',
      l: 'list',
      list: 'list',
      d: 'delete',
    };
    let allArguments = Object.keys(args);
    let keyOfArgument = allArguments.filter(arg => possibleArguments[arg])[0];

    return {
      action: possibleArguments[keyOfArgument],
      payload: args[keyOfArgument],
      category: args.category,
    };
  }

  valid() {
    let schema = {
      action: { type: 'string', required: true },
      payload: { type: 'string', required: true },
    };
    const validator = new Validator(schema);
    console.log('validating', validator.validate(this.command));

    // this.command.payload !== true: needs to check that it isn't true because minimist flags an empty string as true, when it should be falsy
    if (this.command.action && this.command.payload && this.command.payload !== true) {
      return true;
    }
    return false;
  }
}


module.exports = Input;