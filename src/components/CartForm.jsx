import React from 'react';

const CartForm = () => {
  return (
    <div className='container cart'>
     <button>Continue Shopping</button>  
     <h2>Shopping Cart</h2>
     <div className='cards cart'>
          <div className='card items' id="cardCart">
            
          
          </div>
          <div className='cards orderSum' id="cardOrderSum">
              <div className='card orderSum' id="cardOrderSum">
                <h3>Order Summary</h3>
                <a>SubTotal( <a id="oSitemCount">5</a>)</a>
                <a>#<a id="oDsubTotal">629.95</a></a>
                <a>Shipping</a>
                <a>Free</a>
                <a>Tax</a>
                <a>$<a id="taxCount">50.4</a></a>
              </div>
              <div className='box sumTotal'>
                <div class="box flex">
                  <a>Total</a>
                <a>$<a id="oderTotal">680.35</a></a>
                </div>
                <button>Proceed To Checkout</button>

              </div>
          </div>
     </div>

    </div>
  );
}

export default CartForm;