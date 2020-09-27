import * as React from 'react';

interface Props {
  tax: number;
  sum: string;
  isTaxed: boolean;
}

const InfoBlock: React.FC<Props> = (props): JSX.Element => {
  const { tax, sum, isTaxed } = props;
  const getPayroll = (initialPay: number, curentTax: number, taxed: boolean): Object => {
    const calculatedTax: number = +(Number(initialPay) * Number(curentTax) / 100).toFixed();
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
  const payroll: Record<string, any> = getPayroll(Number(sum), tax, isTaxed);

  return (
    <div className='info-container'>
      <p><b>{`${payroll.employeePayment} ₽`}</b> сотрудник будет получать на руки</p>
      <p><b>{`${payroll.tax} ₽`}</b> НДФЛ, 13% от оклада</p>
      <p><b>{`${payroll.totalSum} ₽`}</b> за сотрудника в месяц</p>
    </div>
  );
}

export default InfoBlock;
