import * as EmailValidator from 'email-validator';
import useField from "../hooks/use-field";

const BasicForm = (props) => {
  const {
    fieldValue: firstName,
    isFieldValid: isFirstNameValid,
    fieldChangeHandler: firstNameChangeHandler,
    fieldBlurHandler: firstNameBlurHandler,
    fieldReset: firstNameReset,
    fieldClasses: firstNameFormClass,
  } = useField((fieldValue) => {
    return fieldValue.trim() !== '';
  });

  const {
    fieldValue: lastName,
    isFieldValid: isLastNameValid,
    fieldChangeHandler: lastNameChangeHandler,
    fieldBlurHandler: lastNameBlurHandler,
    fieldReset: lastNameReset,
    fieldClasses: lastNameFormClass,
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

  const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid;

  const formSubmitHandler = (evt) => {
    evt.preventDefault();

    if (!isFormValid) {
      return;
    }

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameFormClass}>
          <label htmlFor='first-name'>First Name</label>
          <input id='first-name'
                 type='text'
                 value={firstName}
                 onChange={firstNameChangeHandler}
                 onBlur={firstNameBlurHandler} />
        </div>
        <div className={lastNameFormClass}>
          <label htmlFor='last-name'>Last Name</label>
          <input id='last-name'
                 type='text'
                 value={lastName}
                 onChange={lastNameChangeHandler}
                 onBlur={lastNameBlurHandler} />
        </div>
      </div>
      <div className={emailFormClass}>
        <label htmlFor='email'>E-Mail Address</label>
        <input id='email'
               type='email'
               value={email}
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler} />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
