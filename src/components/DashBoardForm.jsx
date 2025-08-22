import React ,{ useState,useCallback, useEffect }from 'react'
import DashBoardFootBox from './DashBoardFootBox';
import DashBoardOrderItem from './DashBoardOrderItem';
import { dashBoardFootBoxData } from "../../data";
const DashBoardForm = ({ switchComponent, pros}) => {
  
  

  const currentDate = new Date();
  const dateString=currentDate.toDateString();
  let orderCount= window.myDataTemOrders.length;
  let totalSpent=0;
  function myCountCal(item) {
        totalSpent += item.Total;
    }
  window.myDataTemOrders.forEach(myCountCal);

  return (
    <div className='container dashBoar'>
      <div className='cards grid dashUserInfo' >

         <div className="card flex">
            <div className='box flexBeTween accountInfo'>
              <h4>Account Info</h4>
              <i className="fa-light fa-person"></i>
              </div> 
              <h2>jht</h2>
              <h6>Member since {dateString}</h6>
         </div>
      
         <div className='card flex'>
            <div className='box flexBeTween totalOrders'>
              <h4>Total Orders</h4>
              <i className="fa-regular fa-box"></i>
              </div> 
              <h2>{orderCount}</h2>
              <h6>All time orders</h6>
          </div>
          <div className='card flex'>
            <div className='box flexBeTween totalSpent'>
              <h4>Total Spent</h4>
              <i className="fa-regular fa-box-open"></i>
              </div> 
              <h2>${totalSpent}</h2>
              <h6>Lifetime Value </h6>
           </div> 
             <div className='card flex'>
            <div className='box flexBeTween totalSpent'>
              <h4>Member Status</h4>
              <i className="fa-regular fa-star"></i>
              </div> 
              <h2>Gold</h2>
              <h6>15% off all orders </h6>
           </div>    
      </div> 
      <div>
         <div className='box textAligeLeft'></div>
         <h4>Recent Orders</h4>
         <p>Track your recent purchases and order status</p>
         <div className='cards flex' id="caedsRecentOrders">  
           {window.myDataTemOrders.map((order) =>(
            <DashBoardOrderItem key={order.id}  
             orderId={order.id}
             orderDate={order.date.toString()}
             value={order.Total}
           />) ) 
           }
        </div>
       </div>    
     
      <div className='cards flex-row dashBoardFoot'>
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