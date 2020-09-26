import React from 'react';
import { Field, reduxForm } from 'redux-form';

import renderSwitchCheckField from './form/Switch';
import InfoCircle from './form/InfoCircle';

const Form = () => {
  return (
    <React.Fragment>
    <label className='form-container__label form-container__label_gray'>Сумма</label>
      <form>
        <div className='form-container__radio'>
          <label className='form-container__label'>
            <Field name='paymentType' component='input' type='radio' value='perMonth' />{' '}
            Оклад за месяц            
          </label>
          <label className='form-container__label'>
            <Field name='paymentType' component='input' type='radio' value='defaultPay' />{' '}
            МРОТ
            <InfoCircle />
          </label> 
          <label className='form-container__label'>
            <Field name='paymentType' component='input' type='radio' value='perDay' />{' '}
            Оплата за день
          </label> 
          <label className='form-container__label'>
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
    </React.Fragment> 
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
