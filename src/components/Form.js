import React from 'react';
import { Field, reduxForm } from 'redux-form';

import renderSwitchCheckField from './Switch';

const Form = () => {
  return (
    <div>
    <label>Сумма</label>
      <form>
        <div>
          <label style={{display: 'block'}}>
            <Field name='paymentType' component='input' type='radio' value='perMonth' />{' '}
            Оклад за месяц
          </label>
          <label style={{display: 'block'}}>
            <Field name='paymentType' component='input' type='radio' value='defaultPay' />{' '}
            МРОТ
          </label> 
          <label style={{display: 'block'}}>
            <Field name='paymentType' component='input' type='radio' value='perDay' />{' '}
            Оплата за день
          </label> 
          <label style={{display: 'block'}}>
            <Field name='paymentType' component='input' type='radio' value='perHour' />{' '}
            Оплата за час
          </label>
        </div>
        <div>
          <Field name="isTaxed" id="tax" component={renderSwitchCheckField} type="checkbox" />{' '}
        </div>
        <div>
          <Field name="payroll" component="input" type="text" value='40000' />{' '}
          <label>₽</label>
        </div>
      </form>
    </div> 
  );
}

export default reduxForm({
  form: 'control',
  initialValues: {
    paymentType: 'perMonth',
    isTaxed: true,
    payroll: '40000',
  }
})(Form);
