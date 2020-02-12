const Validator = require('../lib/validator.js');

const validator = new Validator();



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



describe('validate()', () => {
  let validator;

  beforeEach(() => {
    const schema = {
      action: { type: 'string', required: true },
      payload: { type: 'string', required: true },
    };
    validator = new Validator(schema);
  });

  it('returns true when required fields are present', () => {
    const validObject = {
      action: 'add',
      payload: 'This is a really cool thing that I wanted to remember for later',
    };
    expect(validator.validate(validObject)).toBeTruthy();
  });

  it('returns false when required fields are not present', () => {
    const invalidObject = {
      payload: 'This is a really cool thing that I wanted to remember for later',
    };
    expect(validator.validate(invalidObject)).toBeFalsy();
  });

  it('returns true when given the correct type', () => {
    const validObject = {
      action: 'add',
      payload: 'This is a really cool thing that I wanted to remember for later',
    };
    expect(validator.validate(validObject)).toBeTruthy();
  });

  it('returns false when given the incorrect type', () => {
    const invalidType = {
      action: 5,
      payload: [],
    };
    expect(validator.validate(invalidType)).toBeFalsy();
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



// Things we want to be able to validate
// Is the object we’re trying to validate actually an object?
// All all “required” properties present and do they have values?
// For any property that specifies a type, does the value match that type?