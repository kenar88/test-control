import React from 'react';

const InfoBlock = (props) => {
  const { tax, sum, isTaxed } = props;
  const getPayroll = (initialPay, curentTax, taxed) => {
    const calculatedTax = (Number(initialPay) * curentTax / 100).toFixed(2);
    const payroll = {
      employeePayment: initialPay - calculatedTax,
      tax: calculatedTax,
      totalSum: initialPay,
    }
    if (taxed) {
      payroll.employeePayment = initialPay;
      payroll.totalSum = initialPay + calculatedTax;
    }

    return payroll;
  };
  const payroll = getPayroll(sum, tax, isTaxed);

  return (
    <div>
      <p>{`${payroll.employeePayment} ₽`} сотрудник будет получать на руки</p>
      <p>{`${payroll.tax} ₽`} НДФЛ, 13% от оклада</p>
      <p>{`${payroll.totalSum} ₽`} за сотрудника в месяц</p>
    </div>
  );
}

export default InfoBlock;
