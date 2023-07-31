import { useState } from "react";

const useField = (validation) => {
  const [fieldValue, setFieldValue] = useState('');
  const [isFieldChanged, setFieldChanged] = useState(false);

  const fieldIsValid = validation(fieldValue);
  const isFieldInvalid = !fieldIsValid && isFieldChanged;

  const fieldChangeHandler = (evt) => {
    setFieldValue(evt.target.value);
  };

  const fieldBlurHandler = (evt) => {
    setFieldChanged(true);
  };

  const fieldReset = () => {
    setFieldValue('');
    setFieldChanged(false);    
  };

  const fieldClasses = () => {
    const classes = ['form-control'];

    if (isFieldInvalid) {
      classes.push('invalid')
    }

    return classes.join(' ');
  };

  return {
    fieldValue,
    isFieldChanged,
    isFieldValid: !isFieldInvalid,
    fieldChangeHandler,
    fieldBlurHandler,
    fieldReset,
    fieldClasses: fieldClasses()
  }
};

export default useField;
