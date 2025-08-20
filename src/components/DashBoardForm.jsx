import React ,{ useState,useCallback, useEffect }from 'react'
import DashBoardFootBox from './DashBoardFootBox';
import DashBoardOrderItem from './DashBoardOrderItem';
import { dashBoardFootBoxData } from "../../data";
const DashBoardForm = ({ switchComponent, pros}) => {
  
  

  const currentDate = new Date();
  const dateString=currentDate.toDateString();
  let orderCount= window.myDataOrders.length;
  let totalSpent=0;
  function myCountCal(item) {
        totalSpent += item.Total;
    }
  window.myDataOrders.forEach(myCountCal);

  return (
    <div className='container dashBoar'>
      <div className='cards flex'>
         <div className="card flex">
            <div className='box flex'>
              <h4>Account Info</h4>
              <i></i>
              </div> 
              <h2>jht</h2>
              <h4>Member since {dateString}</h4>
         </div>
      
         <div className='cards flex'>
            <div className='box flex'>
              <h4>Total Orders</h4>
              <i></i>
              </div> 
              <h2>{orderCount}</h2>
              <h4>All time orders</h4>
          </div>
          <div className='cards flex'>
            <div className='box flex'>
              <h4>Total Spent</h4>
              <i></i>
              </div> 
              <h2>${totalSpent}</h2>
              <h4>Lifetime Value </h4>
           </div>     
      </div>    
      <div className='cards flex' id="caedsRecentOrders">  
           {window.myDataOrders.map((order) =>(
            <DashBoardOrderItem key={order.id}  
             orderId={order.id}
             orderDate={order.date.toString()}
             value={order.Total}
           />) ) 
           }
      </div>
      <div>
        {dashBoardFootBoxData.map((link) =>(
          <DashBoardFootBox key={link.id} titleP={link.title} 
           paragraphP={link.papargraph} 
           buttonTextP={link.buttonText}
           />
        ) ) }
      </div>
    </div>
  );
}

export default DashBoardForm;