import React from 'react'

const DashBoardFootBox = ({titleP, paragraphP,buttonTextP}) => {
  return (
    <div className='box-flex dashBoardFootBox'>
       <h3>{titleP}</h3>
       <p>{paragraphP}</p>
       <button>{buttonTextP}</button>
    </div>
  );
}

export default DashBoardFootBox;