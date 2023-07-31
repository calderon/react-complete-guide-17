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
  }

  return {
    fieldValue,
    isFieldChanged,
    isFieldValid: !isFieldInvalid,
    fieldChangeHandler,
    fieldBlurHandler,
    fieldReset
  }
};

export default useField;
