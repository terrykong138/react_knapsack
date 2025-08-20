import React from 'react';
// import App from '../App';
import CartItem from './CartItem';
import { useState } from 'react';
import {getOrderTotalItemCount} from './ContentCard';
// ==================================
const CartForm = (switchComponent) => {
    const taxRate=0.18;
var orderSum = 0;
var orderItemCount = 0;
var orderTax = 0;
var orderTotal = orderSum - orderSum * taxRate ;
 var orderCount = 0;
const updateData =() =>{
function myCountCal(item) {
     orderCount += item.count;
     orderSum += item.sum;
     }
    window.myDataNewOrderdetails.forEach(myCountCal);

   orderTax = orderSum * taxRate;
    orderTotal = orderSum - orderTax ;
    // return [orderCount,orderSum,orderTax,orderTotal]
}
updateData();
  // const [CurrentComponent, setCurrentComponent] = useState((swith) => ThemeCards );
const [itemConfig, setItemConfig] = useState({isChange:false, orderCoutP:orderCount, orderSumP: orderSum,orderTaxP:orderTax, OrderTotalP:orderTotal });

const handleItemConfig =(config) =>{  
  setItemConfig(config);
}
// ==============================

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
          <div className='cards orderSum' id="cardOrderSum">
              <div className='card orderSum' id="cardOrderSum">
                <h3>Order Summary</h3>
                <a>SubTotal({itemConfig.orderCoutP} Items)</a>
                <a>#{itemConfig.orderSumP}</a>
                <a>Shipping</a>
                <a>Free</a>
                <a>Tax</a>
            <a>${itemConfig.orderTaxP}</a>
              </div>
              <div className='box sumTotal'>
                <div className="box flex">
                  <a>Total</a>
                <a>${itemConfig.OrderTotalP}</a>
                </div>
                <button>Proceed To Checkout</button>

              </div>
          </div>
     </div>

    </div>
  );
}

export default CartForm;