const Validator = require('../lib/validator.js');

const validator = new Validator();



describe('isObject()', () => {
  it('should return true if it is an object', () => {
    const anObject = {};
    expect(validator.isObject(anObject)).toBeTruthy();
  });
  it('should return false if it is an array', () => {
    const anArray = [];
    expect(validator.isObject(anArray)).toBeFalsy();
  });
  it('should return false if it is a string', () => {
    const anArray = '';
    expect(validator.isObject(anArray)).toBeFalsy();
  });
  it('should return false if it is a number', () => {
    const anArray = 3;
    expect(validator.isObject(anArray)).toBeFalsy();
  });
  it('should return false if it is a function', () => {
    const myFunc = () => { };
    expect(validator.isObject(myFunc)).toBeFalsy();
  });
  it('should return true if it is a boolean', () => {
    const bool = true;
    expect(validator.isObject(bool)).toBeFalsy();
  });
});

describe('isString()', () => {
  it('returns true if it is a string', () => {
    const string = 'this is a string';
    expect(validator.isString(string)).toBeTruthy();
  });
  it('returns false if it is a number', () => {
    const number = 4;
    expect(validator.isString(number)).toBeFalsy();
  });
  it('returns false if it is an object', () => {
    const emptyObject = {};
    expect(validator.isString(emptyObject)).toBeFalsy();
  });
  it('returns false if it is an array', () => {
    const emptyArray = [];
    expect(validator.isString(emptyArray)).toBeFalsy();
  });
  it('returns false if it is a boolean', () => {
    const bool = false;
    expect(validator.isString(bool)).toBeFalsy();
  });
  it('should return false if it is a function', () => {
    const myFunc = () => { };
    expect(validator.isString(myFunc)).toBeFalsy();
  });
  it('should return true if it is a boolean', () => {
    const bool = true;
    expect(validator.isString(bool)).toBeFalsy();
  });
});


describe('isArray()', () => {
  it('should return false if it is an object', () => {
    const anObject = {};
    expect(validator.isArray(anObject)).toBeFalsy();
  });
  it('should return true if it is an array', () => {
    const anArray = [];
    expect(validator.isArray(anArray)).toBeTruthy();
  });
  it('should return false if it is a string', () => {
    const anArray = '';
    expect(validator.isArray(anArray)).toBeFalsy();
  });
  it('should return false if it is a number', () => {
    const anArray = 3;
    expect(validator.isArray(anArray)).toBeFalsy();
  });
  it('should return false if it is a function', () => {
    const myFunc = () => { };
    expect(validator.isArray(myFunc)).toBeFalsy();
  });
  it('should return true if it is a boolean', () => {
    const bool = true;
    expect(validator.isArray(bool)).toBeFalsy();
  });
});

describe('isFunction()', () => {
  it('should return false if it is an object', () => {
    const anObject = {};
    expect(validator.isFunction(anObject)).toBeFalsy();
  });
  it('should return false if it is an array', () => {
    const anArray = [];
    expect(validator.isFunction(anArray)).toBeFalsy();
  });
  it('should return false if it is a string', () => {
    const anArray = '';
    expect(validator.isFunction(anArray)).toBeFalsy();
  });
  it('should return false if it is a number', () => {
    const anArray = 3;
    expect(validator.isFunction(anArray)).toBeFalsy();
  });
  it('should return false if it is a function', () => {
    const myFunc = () => { };
    expect(validator.isFunction(myFunc)).toBeTruthy();
  });
  it('should return true if it is a boolean', () => {
    const bool = true;
    expect(validator.isFunction(bool)).toBeFalsy();
  });
});

describe('isBoolean()', () => {
  it('should return false if it is an object', () => {
    const anObject = {};
    expect(validator.isBoolean(anObject)).toBeFalsy();
  });
  it('should return false if it is an array', () => {
    const anArray = [];
    expect(validator.isBoolean(anArray)).toBeFalsy();
  });
  it('should return false if it is a string', () => {
    const anArray = '';
    expect(validator.isBoolean(anArray)).toBeFalsy();
  });
  it('should return false if it is a number', () => {
    const anArray = 3;
    expect(validator.isBoolean(anArray)).toBeFalsy();
  });
  it('should return false if it is a function', () => {
    const myFunc = () => { };
    expect(validator.isBoolean(myFunc)).toBeFalsy();
  });
  it('should return true if it is a boolean', () => {
    const bool = true;
    expect(validator.isBoolean(bool)).toBeTruthy();
  });
});


describe('isNumber()', () => {
  it('returns true if it is a string', () => {
    const string = 'this is a string';
    expect(validator.isNumber(string)).toBeFalsy();
  });
  it('returns false if it is a number', () => {
    const number = 4;
    expect(validator.isNumber(number)).toBeTruthy();
  });
  it('returns false if it is an object', () => {
    const emptyObject = {};
    expect(validator.isNumber(emptyObject)).toBeFalsy();
  });
  it('returns false if it is an array', () => {
    const emptyArray = [];
    expect(validator.isNumber(emptyArray)).toBeFalsy();
  });
  it('returns false if it is a boolean', () => {
    const bool = false;
    expect(validator.isNumber(bool)).toBeFalsy();
  });
  it('should return false if it is a function', () => {
    const myFunc = () => { };
    expect(validator.isNumber(myFunc)).toBeFalsy();
  });
  it('should return true if it is a boolean', () => {
    const bool = true;
    expect(validator.isNumber(bool)).toBeFalsy();
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