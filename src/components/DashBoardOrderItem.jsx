import React from 'react'

const DashBoardOrderItem = ( {orderId, orderDate, value}) => {

    // {orderId, orderDate, title, value}
  return (
    <div className='card flex-row'>
        <div className='box flex-column'>
         <h3>{orderId}</h3>
        <h5>{orderDate}</h5>
        </div>
        {/* <div className='box flex-column'>
            <h3>{prosP.title}</h3>
            <h5>Processing</h5>
        </div> */}
         <div className='box flex-column'>
            <h3>{value}</h3>
            <button>Tarck Order</button>
        </div>

       
    </div>

  );
}

export default DashBoardOrderItem;