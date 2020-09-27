import React from 'react';

const FormInput = (props) => {
  const { type, value, name, ...other} = props.input;

  return (
    <React.Fragment>
      <input
        className='form-container-payment__input'
        type={type}
        value={value}
        name={name}
        {...other} />
      <label>₽</label>
    </React.Fragment>
  );
}

export default FormInput;
