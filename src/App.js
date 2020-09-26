import React from 'react';
import { connect } from 'react-redux';

import PaymentForm from './components/Form';
import InfoBlock from './components/InfoBlock';

function App(props) {
  const paymentType = props.form.control === undefined ? null : props.form.control.values.paymentType;
  
  return (
    <div>
      <PaymentForm />
      {paymentType === 'perMonth' ?
        <InfoBlock tax={props.tax} sum={1} isTaxed={true}/>
        : ''}
    </div>
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
