import React from 'react';
import { connect } from 'react-redux';

import PaymentForm from './components/Form';
import InfoBlock from './components/InfoBlock';

const mapTypeToSalary = {
  'perMonth': 40000,
  'perHour': 400,
  'perDay': 1500,
  'defaultPay': false,
};

function App(props) {
  const paymentType = props.form.control === undefined ? null : props.form.control.values.paymentType;
  let salary = paymentType && mapTypeToSalary[paymentType];

  return (
    <React.Fragment>
      <div className='form-container'>
        <PaymentForm salaryByType={salary} />
      </div>
      {paymentType === 'perMonth' ?
        <InfoBlock
          tax={props.tax}
          sum={props.form.control.values.payroll}
          isTaxed={props.form.control.values.isTaxed}
        />
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
