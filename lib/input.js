// evaluates and validates the input (is it valid and is there data);
// returns an instance containing the action to perform and the payload for the aciton
const minimist = require('minimist');


class Input {
  constructor(command) {
    let args = minimist(process.argv.slice(2));
    this.command = this.parseInput(args);
  }

  parseInput(args) {
    let possibleArguments = {
      a: 'add',
      add: 'add',
    };
    let allArguments = Object.keys(args);
    // will give ['_', 'a']
    let keyOfArgument = allArguments.filter(arg => possibleArguments[arg])[0];

    return {
      action: possibleArguments[keyOfArgument],
      payload: args[keyOfArgument],
    };
  }

  valid() {
    // a valid input has an action and payload

    // this.command.payload !== true: needs to check that it isn't true because minimist flags an empty string as true, when it should be falsy
    if (this.command.action && this.command.payload && this.command.payload !== true) {
      return true;
    }
    return false;
  }
}


module.exports = Input;