import * as React from 'react';

interface Props {
  input: Object;
  meta: Object;
  type: string;
}

const FormInput: React.FC<Props> = (props): JSX.Element => {
  const { type, value, name, ...other}: Record<string, any> = props.input;

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
