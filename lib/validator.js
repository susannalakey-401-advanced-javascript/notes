class Validator {
  constructor(schema) {
    this.schema = schema;
  }

  validate(objectToValidate) {
    const schemaKeys = Object.keys(this.schema);
    const isValid = schemaKeys.every(key => {
      let type = this.schema[key].type;
      let input = objectToValidate[key];
      return this.isValidType(input, type);
    });
    const required = this.isRequired(objectToValidate);

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
      return this.isArray(input); //field.valueType
    }
    if (type === 'function') {
      return this.isFunction(input);
    }
    if (type === 'boolean') {
      return this.isBoolean(input);
    }
    if (type === 'number') {
      return this.isNumber(input);
    }
  }

  isObject(input) {
    return typeof (input) === 'object' && Array.isArray(input) === false ? true : false;
  }

  isString(input) {
    return typeof (input) === 'string';
  }

  isArray(input) {
    return Array.isArray(input); // check that typeof val === valueType
  }

  isFunction(input) {
    return typeof (input) === 'function';
  }

  isBoolean(input) {
    return typeof (input) === 'boolean';
  }

  isNumber(input) {
    return typeof (input) === 'number';
  }
}

module.exports = Validator;