// evaluates and validates the input (is it valid and is there data);
// returns an instance containing the action to perform and the payload for the aciton
const minimist = require('minimist');
const Validator = require('./validator.js');



class Input {
  constructor(inputArgs) {
    const args = minimist(inputArgs);
    this.command = this.parseInput(args);
  }

  parseInput(args) {
    const possibleArguments = {
      a: 'add',
      add: 'add',
      l: 'list',
      list: 'list',
      d: 'delete',
      delete: 'delete',
    };
    const allArguments = Object.keys(args);
    const keyOfArgument = allArguments.filter(arg => possibleArguments[arg])[0];

    if (possibleArguments[keyOfArgument] === 'list') {

      return {
        action: possibleArguments[keyOfArgument],
        category: args[keyOfArgument],

      };
    }

    if (possibleArguments[keyOfArgument] === 'delete') {
      return {
        action: possibleArguments[keyOfArgument],
        payload: args[keyOfArgument],
      };
    }

    return {
      action: possibleArguments[keyOfArgument],
      payload: args[keyOfArgument],
      category: args.category || args.c,
    };
  }

  valid() {
    const schema = {
      action: { type: 'string', required: true },
    };
    const validator = new Validator(schema);
    console.log('validating', validator.validate(this.command));

    return validator.validate(this.command);
    // return

    // this.command.payload !== true: needs to check that it isn't true because minimist flags an empty string as true, when it should be falsy
    //   if (this.command.action && this.command.payload && this.command.payload !== true) {
    //     return true;
    //   }
    //   return false;
    // }
  }
}


module.exports = Input;