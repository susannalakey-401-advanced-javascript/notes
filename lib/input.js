'use strict';

// evaluates and validates the input (is it valid and is there data);
//returns an instance containing the action to perform and the payload for the aciton
const minimist = require('minimist');

const rules = {
  action: { required: true },
  payload: { required: true },
};

// if payload is empty string, it defaults to true

function Input() {
  const args = minimist(process.argv.slice(2));
  this.action = this.getAction(Object.keys(args)[1]);
  this.payload = Object.values(args)[1];
}



Input.prototype.getAction = function (action) {
  const allowedActions = /a/i;
  return allowedActions.test(action) ? action : false;

};

// currently returning true when no note is given
Input.prototype.validateInput = function () {

  return Object.keys(rules).every(rule => {
    console.log('rules[rule]', rules[rule]);

    const requiredValue = rules[rule].required ? !!this[rule] : true;

    if (!requiredValue) {
      return false;
    }
    return true;

  });

};

const newInput = new Input;

console.log('validate input', newInput.validateInput());

module.exports = Input;