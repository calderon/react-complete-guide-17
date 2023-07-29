import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [isNameChanged, setNameChanged] = useState(false);

  const nameIsValid = name.trim() !== '';
  const isNameInvalid = !nameIsValid && isNameChanged;

  const isFormValid = nameIsValid;

  const nameChangeHandler = (evt) => {
    setName(evt.target.value);
  };

  const nameBlurHandler = (evt) => {
    setNameChanged(true);
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    setNameChanged(true);

    if (!isFormValid) {
      return;
    }

    console.log(name);
    setName('');
  };

  const formClass = () => {
    const classes = ['form-control'];

    if (!isFormValid && isNameChanged) {
      classes.push('invalid')
    }

    return classes.join(' ');
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClass()}>
        <label htmlFor='name'>Your Name</label>
        <input id='name'
               type='text'
               onChange={nameChangeHandler}
               onBlur={nameBlurHandler}
               value={name} />
      </div>

      {isNameInvalid && <p style={{ 'color': 'red'}}>Not valid</p>}

      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
