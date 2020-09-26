import React from 'react';

const InfoCircle = () => {
  return (
    <React.Fragment>
      <div className="circle">
        <div className="circle__before-cross"></div>
        <div className="circle__after-cross"></div>
      </div>
      <div className="circle">
        <div className="circle__before-info">i</div>
      </div>
    </React.Fragment>
  );
}

export default InfoCircle;
