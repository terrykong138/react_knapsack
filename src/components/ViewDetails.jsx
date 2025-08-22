import React from 'react';
 import { useState,useCallback } from 'react';
 import {changeCartSup , blankCartSup, getOrderTotalItemCount, updateNewOrderItemCount,appendNewOrderItem } from  './ContentCard';
import {productsInfos} from "../../data";
const ViewDetails = ({switchComponent, config}) => {
//   {imageSrcV, productTypeV, isInStockV, productTitleV, reviewsCountV,productDescriptionV, keyFeaturesV, priceV }
    console.log(config,"ViewDetails pros" );
    const productId = config.mpros.id;
    console.log(productId,"ViewDetails config.mpros.id");

    const changeItemCount =(number) =>{
    const itemElement = document.getElementById("buyCount");
    itemElement.textContent = number.toString();
            
    }
    const getItemCount = () =>{
        const itemElement = document.getElementById("buyCount");
        if (itemElement !== undefined ) {
            if (itemElement.textContent !== "")
            return Number(itemElement.textContent);
        }  else return 0;
    
    }
   const handleAddItems = () => {
                let originItemCount = getItemCount()+1;
                changeItemCount(originItemCount);
                }

 const handleMinusItems = () => {

         let originItemCount = getItemCount();
         if (originItemCount > 0) {
            originItemCount= originItemCount-1;
             changeItemCount(originItemCount);
         }
 }

const handleAddtoCart = () => {
    let itemCount =  getItemCount();
    const productsSelect = (product) => {
            return product.id === productId;
            }
    const workProductInfos = productsInfos.find(productsSelect);
    if (itemCount > 0 ) {
      if (window.myDataNewOrderdetails.length  > 0) {
        let ItemTotalCount = updateNewOrderItemCount(productId,itemCount);
        if ( ItemTotalCount !== -1) {
           changeCartSup(ItemTotalCount ); 
        }else appendNewOrderItem  (productId, workProductInfos, itemCount);
       } else  appendNewOrderItem  (productId, workProductInfos, itemCount);
    };
  console.log("window.myDataNewOrderItems",window.myDataNewOrderItems);
  let workItemCount = getOrderTotalItemCount();
  if (workItemCount > 0) {
    changeCartSup(workItemCount);
   } ;  
  console.log("window.myDataNewOrderdetails",window.myDataNewOrderdetails); 
}

return (
      <div className='card viewDetails'>
        {/* <button><i className="fa-solid fa-arrow-left"></i>Back to Products</button> */}
        <div className='box-image'>
            <img src={config.mpros.imageSrc} alt={config.mpros.productTitle} />
            <p className='p-productType'>{config.mpros.productType}</p>
            <p className='p-isInStock'>{config.mpros.isInStock}</p>
        </div>
        <div className='box viewDetailsInfo'>
            <h3>{config.mpros.productTitle}</h3>
            <p className='appraise'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                （4.5 out of 5 stars）|{config.mpros.reviewsCount} reviews </p>
            <h2 className='priceTag'>${config.mpros.price}</h2>  
            <h3>Description</h3>
            <p>{config.mpros.productDescription}</p>
            <h3>Key Features</h3>
            <div className='box-keyFeatures'>
                <div>
                    <p><i className="fa-solid fa-check"></i>{config.mpros.keyFeatures[0]} Capacity</p>
                    <p><i className="fa-solid fa-check"></i>{config.mpros.keyFeatures[1]}</p>
                </div>
                <div>
                    <p><i className="fa-solid fa-check"></i>{config.mpros.keyFeatures[2]}</p>
                    <p><i className="fa-solid fa-check"></i>{config.mpros.keyFeatures[3]}</p>
                </div>
            </div> 
            <div>
                <h3>Quantity:<button className='btn-midSize' onClick={ handleMinusItems}>-</button>
                <a id='buyCount'>0</a><button className='btn-midSize' onClick={ handleAddItems}>+</button></h3>
            </div>
            
        </div>
        <div>
            {config.mpros.isInStock === true ? ( 
                <button className="addToCartBtn" onClick={handleAddtoCart}><i className="fa-regular fa-cart-shopping"></i>Add to Cart</button> ) : (
                    <button className="addToCartBtn" disabled ><i className="fa-regular fa-cart-shopping"></i>Add to Cart</button> 
                )
            }          
        </div>
        <div className='box viewDetailsFoot'>
            <div className='box favorable'>
                <i className="fa-regular fa-truck"></i>
                <h3>Free Shipping</h3>
                <p>Free shipping on orders over $75</p>
            </div>
            <div className='box favorable'>
                <i className="fa-regular fa-shield"></i>
                <h3>Warranty</h3>
                <p>2-year manufacturer warranty included</p>
            </div>
            <div className='box favorable'>
                <i className="fa-solid fa-arrow-rotate-left"></i>
                <h3>Easy Returns</h3>
                <p>30-day hassle-free return policy</p>
            </div>
        </div>
    </div>
  );
}

export default ViewDetails;