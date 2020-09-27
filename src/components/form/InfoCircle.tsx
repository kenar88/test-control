import React, { useState } from 'react';

const info: string = `МРОТ- минимальный размер оплаты труда. Разный для разных регионов`;

const InfoCircle: React.FC = (): JSX.Element => {
  const [clicked, setState] = useState(false);
  const infoCircleState: JSX.Element = clicked ? (
    <React.Fragment>
        <div className='circle__before-cross'></div>
        <div className='circle__after-cross'></div>
    </React.Fragment>
  ) : <div className='circle__before-info'>i</div>;

  return (
    <React.Fragment>
      <div
        onClick={() => setState(!clicked)}
        data-tooltip={info}
        className={`circle ${clicked ? 'visible-tooltip' : ''}`}
      >
        {infoCircleState}
      </div>
    </React.Fragment>
  );
}

export default InfoCircle;
