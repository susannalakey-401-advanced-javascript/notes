'use strict';


const minimist = require('minimist');

// const rules = {
//   action: { required: true },
//   payload: { required: true },
// };


function Input(commandLineInput) {
  const args = minimist(commandLineInput); // process.argv.slice(2)
  if (args.a) {
    this.action = 'add';
    this.payload = args.a;
  }
}

Input.prototype.getParameters = function () {
  return {
    action: this.action,
    payload: this.payload,
  };
};



// Input.prototype.getAction = function (action) {
//   const allowedActions = /a|add/i;
//   return allowedActions.test(action) ? action : false;

// };

// // currently returning true when no note is given
// Input.prototype.validateInput = function () {

//   return Object.keys(rules).every(rule => {
//     const requiredValue = rules[rule].required ? !!this[rule] : true;

//     if (!requiredValue) {
//       return false;
//     }
//     return true;
//   });

// };

// const newInput = new Input;

// console.log('validate input', newInput.validateInput());



module.exports = Input;