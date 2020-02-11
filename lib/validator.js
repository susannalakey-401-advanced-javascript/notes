const Input = require('./input.js');
const Notes = require('./notes.js');

class Validator {
  constructor(schema) {
    this.schema = schema;
  }



  // Things we want to be able to validate
  // Is the object we’re trying to validate actually an object?
  // Are all “required” properties present and do they have values?
  // For any property that specifies a type, does the value match that type?

  validate(objectToValidate) {
    this.isObject(objectToValidate);
  }



  // const schema = {
  //   action: { type: 'string', required: true },
  //   payload: { type: 'string', required: true },
  // };
  // const validObject = {
  //   action: 'add',
  //   payload: 'This is a really cool thing that I wanted to remember for later',
  // };

  isRequired(schema, objectToCheck) {
    const schemaKeys = Object.keys(schema);

  }

  isObject(objectToValidate) {
    return typeof (objectToValidate) === 'object' && Array.isArray(objectToValidate) === false ? true : false;
  }

  isString(stringToCheck) {
    return typeof (stringToCheck) === 'string';
  }
}


module.exports = Validator;