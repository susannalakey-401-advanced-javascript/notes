const Validator = require('../lib/validator.js');

const validator = new Validator();



// revisit organization of these tests

describe('isObject()', () => {
  it('isObject() should return true if it is an object', () => {
    const anObject = {};
    expect(validator.isObject(anObject)).toBeTruthy();
  });
  it('isObject() should return false if it is an array', () => {
    const anArray = [];
    expect(validator.isObject(anArray)).toBeFalsy();
  });
  it('isObject() should return false if it is a string', () => {
    const anArray = '';
    expect(validator.isObject(anArray)).toBeFalsy();
  });
  it('isObject() should return false if it is a number', () => {
    const anArray = 3;
    expect(validator.isObject(anArray)).toBeFalsy();
  });
});

describe('isString()', () => {
  it('isString() returns true if it is a string', () => {
    const string = 'this is a string';
    expect(validator.isString(string)).toBeTruthy();
  });
  it('isString() returns false if it is a number', () => {
    const number = 4;
    expect(validator.isString(number)).toBeFalsy();
  });
  it('isString() returns false if it is an object', () => {
    const emptyObject = {};
    expect(validator.isString(emptyObject)).toBeFalsy();

  });
  it('isString() returns false if it is an array', () => {
    const emptyArray = [];
    expect(validator.isString(emptyArray)).toBeFalsy();
  });
  it('isString() returns false if it is a boolean', () => {
    const bool = false;
    expect(validator.isString(bool)).toBeFalsy();
  });
});

describe('isRequired()', () => {
  it('has a value present if isRequired() is set to true', () => {
    const schema = {
      action: { type: 'string', required: true },
      payload: { type: 'string', required: true },
    };
    const validObject = {
      action: 'add',
      payload: 'This is a really cool thing that I wanted to remember for later',
    };
    expect(validator.isRequired(schema, validObject)).toBeTruthy();
  });
});






// {
//   action: "add";
//   payload: "This is a really cool thing that I wanted to remember for later"
// }

// const schema = {
//   action: { type: 'string', required: true },
//   payload: { type: 'string', required: true },
// };


// const personRules = {
//   id: { type: 'string', required: true },
//   name: { type: 'string', required: true },
//   age: { type: 'number', required: true },
//   children: { type: 'array', valueType: 'string' },
// };

// Valid
// const susan = {
//   id:'123-45-6789',
//   name:'Susan McDeveloperson',
//   age: 37,
//   children:[],
// };


// Invalid
// const fred = {
//   id:38,
//   name:'Freddy McCoder',
//   children:[],
// };

// Things we want to be able to validate
// Is the object we’re trying to validate actually an object?
// All all “required” properties present and do they have values?
// For any property that specifies a type, does the value match that type?