import React from 'react';
import { connect } from 'react-redux';

import PaymentForm from './components/Form';
import InfoBlock from './components/InfoBlock';

function App(props) {
  const paymentType = props.form.control === undefined ? null : props.form.control.values.paymentType;
  console.log(props.form)
  return (
    <React.Fragment>
      <div className='form-container'>
        <PaymentForm />
      </div>
      {paymentType === 'perMonth' ?
        <InfoBlock tax={13} sum={40000} isTaxed={true}/>
        : ''}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  const {
    form
  } = state;
  const {
    tax,
  } = state.control;

  return {
    form,
    tax,
  };
}

export default connect(mapStateToProps)(App);
