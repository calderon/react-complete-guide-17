import * as EmailValidator from 'email-validator';
import useField from "../hooks/use-field";

const SimpleInput = (props) => {
  const {
    fieldValue: name,
    isFieldValid: isNameValid,
    fieldChangeHandler: nameChangeHandler,
    fieldBlurHandler: nameBlurHandler,
    fieldReset: nameReset,
    fieldClasses: nameFormClass,
  } = useField((fieldValue) => {
    return fieldValue.trim() !== '';
  });

  const {
    fieldValue: email,
    isFieldValid: isEmailValid,
    fieldChangeHandler: emailChangeHandler,
    fieldBlurHandler: emailBlurHandler,
    fieldReset: emailReset,
    fieldClasses: emailFormClass,
  } = useField((fieldValue) => {
    return EmailValidator.validate(fieldValue);
  });

  const isFormValid = isNameValid && isEmailValid;

  const formSubmitHandler = (evt) => {
    evt.preventDefault();

    if (!isFormValid) {
      return;
    }

    nameReset();
    emailReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameFormClass}>
        <label htmlFor='name'>Your Name</label>
        <input id='name'
               type='text'
               onChange={nameChangeHandler}
               onBlur={nameBlurHandler}
               value={name} />
        {!isNameValid && <p style={{ 'color': 'red'}}>Not valid</p>}
      </div>

      <div className={emailFormClass}>
        <label htmlFor='email'>Your E-mail</label>
        <input id='email'
               type='email'
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler}
               value={email} />
        {!isEmailValid && <p style={{ 'color': 'red'}}>Not valid</p>}
      </div>

      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
