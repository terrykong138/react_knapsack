import React from 'react'

const Orderbox = ({oderNum, itemTitle, orderDate,processingState, orderValue }) => {
  return (
    <div className='box flex-row-between'>
        <div className='box flex-collum' > 
            <h3>{oderNum}</h3>
           
            <i><Date>{orderDate}</Date></i>
        </div>
        <div className='box flex-collum'>
             <h3>{itemTitle}</h3>
            <a>{processingState}</a>
        </div>   
        <div className='box flex-collum'>
        <h3>${orderValue}</h3>
         <a><i>Track Order</i></a>
        </div> 
    </div>
  )
}

export default Orderbox