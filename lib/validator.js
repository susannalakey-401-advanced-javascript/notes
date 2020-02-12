class Validator {
  constructor(schema) {
    this.schema = schema;
  }



  // Things we want to be able to validate
  // Is the object we’re trying to validate actually an object?
  // Are all “required” properties present and do they have values?
  // For any property that specifies a type, does the value match that type?

  validate(objectToValidate) {
    // if (this.isObject(objectToValidate)) {

  };

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