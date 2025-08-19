import React from 'react'
import DashBoardFootBox from './DashBoardFootBox';
import { dashBoardFootBoxData } from "../../data";
const DashBoardForm = () => {
  return (
    <div className='container dashBoar'>
      <div className='cards flex'>
         <div className="card flex">
            <div className='box flex'>
              <h4>Account Info</h4>
              <i></i>
              </div> 
              <h2>{userName}</h2>
              <h4>Member since <data value={signUpDate}></data></h4>
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