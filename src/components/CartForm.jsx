import React from 'react';
// import App from '../App';
import DashBoardForm from './DashBoardForm';
import CartItem from './CartItem';
import LogInForm from './LogInForm';
import { useState , useCallback } from 'react';
import {blankCartSup, getOrderTotalItemCount} from './ContentCard';
// ==================================
const CartForm = ({switchComponent}) => {
    const taxRate=0.18;
var orderSum = 0;
var orderItemCount = 0;
var orderTax = 0;
var orderTotal = orderSum - orderSum * taxRate ;
 var orderCount = 0;
const updateData =() =>{
function myCountCal(item) {
     orderCount += item.count;
     orderSum +=  item.sum;
     }
    window.myDataNewOrderdetails.forEach(myCountCal);

   orderTax =Math.round( orderSum * taxRate * 100) / 100;
   const temOrderSum = Math.round(orderSum * 100) / 100;
    orderTotal = temOrderSum + orderTax ;
    return [orderCount,temOrderSum ,orderTax,orderTotal];
}
const configdata = updateData();
  // const [CurrentComponent, setCurrentComponent] = useState((swith) => ThemeCards );
const [itemConfig, setItemConfig] = useState({isChange:false, orderCoutP:configdata[0], orderSumP: configdata[1],orderTaxP:configdata[2], OrderTotalP:configdata[3]});

const handleItemConfig =(config) =>{  
  setItemConfig(config);
}
// =============handle Check Out=================
const clearWorkPlace = () =>{
const transtToOrders =(item) => {
    window.myDataOrders.push(item);

  }
 window.myDataTemOrders.forEach(transtToOrders);
  window.myDataTemOrders = [];
  window.myDataNewOrderdetails = [];
  blankCartSup();
}
const handleCheckOut =() =>{
  const currentDate = new Date();
  let currentDateStr = currentDate.toDateString();  
  function generateRandomId() {
  return Math.floor(Math.random() * 1000000000); // Generates a number between 0 and 999999
}
const id = generateRandomId();
let workOrder ={};
    workOrder.id=id;
    // workOrder.customer= window.currentUser;
    workOrder.date=currentDate;
    workOrder.Total=orderTotal;
    workOrder.ordeDetails= window.myDataNewOrderdetails;
window.myDataTemOrders.push(workOrder);
console.log("window.myDataOrders",window.window.myDataTemOrders);
if (window.myKnapsackData.isLogIn ===false) {
   switchComponent(LogInForm, {component: "LogIn", mpros: {isLogIn: false, sourceItemId: "navLogIn",itemText: "Log In"  }});

} else {
  switchComponent (DashBoardForm, {component: "DashBoard", mpros: { isLogIn: false, sourceItemId:"dashBoard", itemText: "Dash Board" }});                 
  const myTimeout = setTimeout(clearWorkPlace, 2000);

}}
// ==========================================
  return (
    <div className='container cart'>
     <button>Continue Shopping</button>  
     <h2>Shopping Cart</h2>
     <div className='cards cart'>
          <div className='card items' id="cardCart">
            { window.myDataNewOrderdetails.map((link)=> (
              <CartItem  key={link.id} 
              itemId={link.id}
              imageSourceP={link.imageSrc}
              itemTitleP={link.productTitle}
              themeP={link.theme}
               priceP={link.price}
               itemCountP={link.count}
               itemsSumP={link.sum}
               handleItemConfigF={handleItemConfig}
               config={itemConfig}
               />
            ))}
          
          </div>
       

        <div className='cards orderSum' id="cardsOrderSum">
          <div className='card orderSumFlex' id="cardOrderSum">
          
                  <h3>Order Summary</h3>
                <div className='flexrowstart'>
                            
                   <a>SubTotal ({itemConfig.orderCoutP} Items)</a>
                   <a>${itemConfig.orderSumP}</a>
                </div>              
                <div className='flexrowstart'>
                  <a>Shipping </a>
                   <a>Free</a>
                </div>                
                <div className='flexrowstart'>
                    <a>Tax </a>
                    <a>${itemConfig.orderTaxP}</a>
                </div>              
           </div>
              <div className='sumTotal'>
                    <div className="flexrowstart">
                    <h4>Tota </h4>
                    <h4>${itemConfig.OrderTotalP}</h4>
                   </div>
                      { window.myDataNewOrderdetails.length > 0 ? ( 
                      <button onClick={handleCheckOut}>Proceed To Check OUt </button> ) : (
                     <button disabled >Proceed To Check OUt </button>
                     )
                     }
              </div>

        </div>
          
              
        
      </div>

    </div>
  );
}

export default CartForm;