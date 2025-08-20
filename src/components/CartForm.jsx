import React from 'react';
// import App from '../App';
import CartItem from './CartItem';
// ==================================
const CartForm = (switchComponent) => {
const taxRate=0.18;
var orderSum = 0;
var orderItemCount = 0;
var orderTax = 0;
var orderTotal = orderSum - orderSum * taxRate ;
 var orderCout = 0;
function myCountCal(item) {
    orderCout += item.count;
    orderSum += item.sum;
}
window.myDataNewOrderdetails.forEach(myCountCal);
orderTax = orderSum * taxRate;
orderTotal = orderSum - orderTax ;

  return (
    <div className='container cart'>
     <button>Continue Shopping</button>  
     <h2>Shopping Cart</h2>
     <div className='cards cart'>
          <div className='card items' id="cardCart">
            { window.myDataNewOrderdetails.map((link)=> (
              <CartItem  key={link.id} 
              imageSourceP={link.imageSrc}
              itemTitleP={link.productTitle}
              themeP={link.theme}
               priceP={link.price}
               itemCountP={link.count}
               itemsSumP={link.sum}
               />
            ))}
          
          </div>
          <div className='cards orderSum' id="cardOrderSum">
              <div className='card orderSum' id="cardOrderSum">
                <h3>Order Summary</h3>
                <a>SubTotal({orderCout} )</a>
                <a>#{orderSum}</a>
                <a>Shipping</a>
                <a>Free</a>
                <a>Tax</a>
            <a>${orderTax}</a>
              </div>
              <div className='box sumTotal'>
                <div className="box flex">
                  <a>Total</a>
                <a>${orderTotal}</a>
                </div>
                <button>Proceed To Checkout</button>

              </div>
          </div>
     </div>

    </div>
  );
}

export default CartForm;