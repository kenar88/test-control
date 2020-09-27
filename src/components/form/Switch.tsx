import * as React from 'react'

interface Props {
  input: string;
}

const Switch: React.FC<Props> = ({ input }): JSX.Element => {
  return (
    <div style={{paddingLeft: 0}} className='custom-control custom-switch'>
      <label
        className='controll-label'
        style={{paddingRight: '42px'}}
        htmlFor='customSwitch1'
      >
        Указать с НДФЛ
      </label>
      <input
        {...input}
        type='checkbox'
        className='custom-control-input'
        id='customSwitch1'
      />
      <label
        className='custom-control-label controll-label'
        htmlFor='customSwitch1'
      >
        Без НДФЛ
      </label>
    </div>
  );
}

export default Switch;
