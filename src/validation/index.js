// Returns true if pass the tests false otherwise
const validateEmail = email => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validateRequired = field => {
  const condition = field == null || field == undefined || field.length === 0;
  return !condition;
};

const validateFloat = field => {
  return !isNaN(parseFloat(field));
};

const validateInteger = field => {
  return !isNaN(parseInt(field));
}

const validateNonEmptyArray = field => {
  return field.length > 0;
}

const v = {
  required: {
    fn: validateRequired,
    message: 'is required'
  },
  email: {
    fn: validateEmail,
    message: 'must be a valid email'
  },
  number: {
    fn: validateFloat,
    message: 'must be a number'
  },
  integer: {
    fn: validateInteger,
    message: 'must be an integer'
  },
  nonEmptyArray: {
    fn: validateNonEmptyArray,
    message: 'must not be empty'
  }
};

/**
 * @param array fields: fields to validate
 * @param array validation: validation field specification
 */
export const validateFields = (fields, validation) => {
  let errors = [];
  for(let idx in validation){
    if(v[validation[idx].type]){
      if(!v[validation[idx].type].fn(fields[validation[idx].field])){
        if(validation[idx].message){
          errors.push(`${validation[idx].message}`)
        }else{
          errors.push(`${v[validation[idx.type]].message}`)
        }
      }
    }
  }
  return errors;
}