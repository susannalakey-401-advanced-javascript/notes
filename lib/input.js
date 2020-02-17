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
      u: 'update',
      update: 'update',
    };
    const allArguments = Object.keys(args);
    const keyOfArgument = allArguments.filter(arg => possibleArguments[arg])[0];

    if (possibleArguments[keyOfArgument] === 'list') {
      if (args[keyOfArgument] === true) {
        return {
          action: possibleArguments[keyOfArgument],
          category: '',
        };
      }
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

    if (possibleArguments[keyOfArgument] === 'update') {
      console.log('action', possibleArguments[keyOfArgument]);  // update
      console.log('payload', args[keyOfArgument]); // 5e461688cdf609279a36a3f4
      console.log('text', args.t); // "updated note text" 
      return {
        action: possibleArguments[keyOfArgument],
        payload: args[keyOfArgument],
        text: args.t || args.text,
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
  }
}

module.exports = Input;