import React, { useRef, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';

import Switch from './form/Switch';
import FormInput from './form/FormInput';
import InfoCircle from './form/InfoCircle';

const Form = (props) => {
  const salary = props.salaryByType;
  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if(salary) {
        props.change('payroll', salary);
      }
    }
  });

  return (
    <React.Fragment>
    <label className='form-container__label form-container__label_gray'>Сумма</label>
      <form>
        <div className='form-container__radio'>
          <label className='form-container__label'>
            <Field
              name='paymentType'
              component='input'
              type='radio'
              value='perMonth'
            />{' '}
            Оклад за месяц
          </label>
          <div>
            <label>
              <Field
                name='paymentType'
                component='input'
                type='radio'
                value='defaultPay'
             />{' '}
              МРОТ
            </label>
            <InfoCircle />
          </div>
          <label className='form-container__label'>
            <Field
              name='paymentType'
              component='input'
              type='radio'
              value='perDay'
            />{' '}
            Оплата за день
          </label> 
          <label className='form-container__label'>
            <Field
              name='paymentType'
              component='input'
              type='radio'
              value='perHour'
            />{' '}
            Оплата за час
          </label>
        </div>
        <div className={`form-container-payment ${!salary ? 'hidden' : ''}`}>
          <Field
            name='isTaxed'
            id='tax'
            component={Switch}
            type='checkbox'
          />{' '}
          <Field
            name='payroll'
            component={FormInput}
            type='text'
          />
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
    payroll: '50000',
  },
})(Form);
