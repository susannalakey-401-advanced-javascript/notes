class Validator {
  constructor(schema) {
    this.schema = schema;
  }



  // Things we want to be able to validate
  // Is the object we’re trying to validate actually an object?
  // Are all “required” properties present and do they have values?
  // For any property that specifies a type, does the value match that type?

  // const validObject = {
  //   action: 'add',
  //   payload: 'This is a really cool thing that I wanted to remember for later',
  // };

  // const schema = {
  //   action: { type: 'string', required: true },
  //   payload: { type: 'string', required: false },

  // };


  validate(objectToValidate) {
    const schemaKeys = Object.keys(this.schema);
    const isValid = schemaKeys.every(key => {
      let type = this.schema[key].type;
      let input = objectToValidate[key];
      return this.isValidType(input, type);
    });
    const required = this.isRequired(objectToValidate);

    console.log('required', required);

    if (!isValid) {
      return false;
    }

    if (!required) {
      return false;
    }

    if (!this.isObject(objectToValidate)) {
      return false;
    }
    return true;
  }

  isRequired(objectToCheck) {
    const schemaKeys = Object.keys(this.schema);
    // if schema key is required then check that it is present in objectToCheck
    return schemaKeys.every(key => this.schema[key].required ? objectToCheck[key] : false);
  }


  // check all types (string, object, etc)
  isValidType(input, type) {
    if (type === 'string') {
      return this.isString(input);
    }
    if (type === 'object') {
      return this.isObject(input);
    }
    if (type === 'array') {
      return this.isArray(input);
    }
  }

  isObject(input) {
    return typeof (input) === 'object' && Array.isArray(input) === false ? true : false;
  }

  isString(input) {
    return typeof (input) === 'string';
  }

  // write tests
  isArray(input) {
    return Array.isArray(input);
  }
}


module.exports = Validator;