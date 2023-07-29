import { useState } from "react";
import * as EmailValidator from 'email-validator';

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [isNameChanged, setNameChanged] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailChanged, setEmailChanged] = useState(false);

  const nameIsValid = name.trim() !== '';
  const isNameInvalid = !nameIsValid && isNameChanged;
  const emailIsValid = EmailValidator.validate(email)
  const isEmailInvalid = !emailIsValid && isEmailChanged;

  const isFormValid = nameIsValid && emailIsValid;

  const nameChangeHandler = (evt) => {
    setName(evt.target.value);
  };

  const nameBlurHandler = (evt) => {
    setNameChanged(true);
  };

  const emailChangeHandler = (evt) => {
    setEmail(evt.target.value);
  };

  const emailBlurHandler = (evt) => {
    setEmailChanged(true);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    setNameChanged(true);
    setEmailChanged(true);

    if (!isFormValid) {
      return;
    }
  };

  const nameFormClass = () => {
    const classes = ['form-control'];

    if (isNameInvalid) {
      classes.push('invalid')
    }

    return classes.join(' ');
  };

  const emailFormClass = () => {
    const classes = ['form-control'];

    if (isEmailInvalid) {
      classes.push('invalid')
    }

    return classes.join(' ');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameFormClass()}>
        <label htmlFor='name'>Your Name</label>
        <input id='name'
               type='text'
               onChange={nameChangeHandler}
               onBlur={nameBlurHandler}
               value={name} />
        {isNameInvalid && <p style={{ 'color': 'red'}}>Not valid</p>}
      </div>

      <div className={emailFormClass()}>
        <label htmlFor='email'>Your E-mail</label>
        <input id='email'
               type='email'
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler}
               value={email} />
        {isEmailInvalid && <p style={{ 'color': 'red'}}>Not valid</p>}
      </div>

      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
