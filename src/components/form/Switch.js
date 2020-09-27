import React from 'react'

const Switch = ({input}) => {
  return (
    <div style={{paddingLeft: 0}} className="custom-control custom-switch">
      <label style={{paddingRight: '40px'}} htmlFor="customSwitch1">Указать с НДФЛ</label>
      <input {...input} type="checkbox" className="custom-control-input" id="customSwitch1"></input>
      <label className="custom-control-label" htmlFor="customSwitch1">Без НДФЛ</label>
    </div>
  );
}

export default Switch;
