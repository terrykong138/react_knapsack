import React from 'react';
import {blankCartSup} from './ContentCard';
import HomeComponent from './HomeComponent'
const LogOut = ({switchComponent}) => {
  const handleLogOut = () => {
if (typeof window.myDataOrders !== "undefined"){
      window.myDataOrders=[];
  };
  if (typeof window.myDataTemOrders !== "undefined"){
      window.myDataTemOrders=[];
  };
  
  if (typeof window.myDataNewOrderItems !== "undefined"){
      window.myDataNewOrderItems = [];
      
    };
  if (typeof  window.myDataNewOrderdetails  !== "undefined"){
      window.myDataNewOrderdetails = [];
      
    };
  blankCartSup();
   switchComponent(HomeComponent,{component: "Home",  mpros: {isLogIn: false, sourceItemId: "logOutBt", itemText: "Log out"  }});    
  }

  return (
    <div className='form logOut'>
        <button id="logOutBt" onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default LogOut