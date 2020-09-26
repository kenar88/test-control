import React from 'react';

const InfoBlock = (props) => {
  const { tax, sum, isTaxed } = props;
  const getPayroll = (initialPay, curentTax, taxed) => {
    const calculatedTax = +(Number(initialPay) * Number(curentTax) / 100).toFixed();
    const payroll = {
      employeePayment: initialPay - calculatedTax,
      tax: calculatedTax,
      totalSum: initialPay,
    }
    console.log(initialPay, calculatedTax)
    if (taxed) {
      payroll.employeePayment = initialPay;
      payroll.totalSum = initialPay + calculatedTax;
    }

    return payroll;
  };
  const payroll = getPayroll(sum, tax, isTaxed);

  return (
    <div className='info-container'>
      <p><b>{`${payroll.employeePayment} ₽`}</b> сотрудник будет получать на руки</p>
      <p><b>{`${payroll.tax} ₽`}</b> НДФЛ, 13% от оклада</p>
      <p><b>{`${payroll.totalSum} ₽`}</b> за сотрудника в месяц</p>
    </div>
  );
}

export default InfoBlock;
