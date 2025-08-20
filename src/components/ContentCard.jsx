import React from 'react';
 import { useState,useCallback } from 'react';
import ViewDetails from './ViewDetails';
import Navbar from './Navbar';
import {productsInfos} from "../../data";
// ============================================


// ==============================================
const changeCartSup = (number) => {
     const navCartSup = document.getElementById("cartSup");
    //  console.log(navCartSup,"cartSup",number,"number");
    if (number !== 0) {
      navCartSup.textContent=number.toString();
    }else navCartSup.textContent="";
     
     navCartSup.style.color="red";
}

const blankCartSup = () => {
    const navCartSup = document.getElementById("cartSup")
     navCartSup.textContent="";
    
}

const appendNewOrderItem = (productId, workProductInfosP, productCount) => {
       let   newOrderItem = {};
          newOrderItem.id =productId;
           newOrderItem.imageSrc=workProductInfosP.imageSrc;
          newOrderItem.productTitle =workProductInfosP.productTitle;
          newOrderItem.theme = workProductInfosP.productType;
            newOrderItem.price = workProductInfosP.price;
           newOrderItem.count = productCount;
           newOrderItem.sum = workProductInfosP.price * productCount;
           window.myDataNewOrderdetails.push(newOrderItem);
           console.log(window.myDataNewOrderdetails)


}
// Suppose window.myDataNewOrderdetails.length  > 0
const updateNewOrderItemCount = (productId,countP) => {
   
  
   const productsSelect = (product) => {
    return product.id === productId;
    }
    let  workOrderItem = window.myDataNewOrderdetails.find(productsSelect);
    if (workOrderItem !== undefined) {
        let index = window.myDataNewOrderdetails.indexOf(workOrderItem);
        window.myDataNewOrderdetails[index].count = window.myDataNewOrderdetails[index].count+countP;
        window.myDataNewOrderdetails[index].sum =  window.myDataNewOrderdetails[index].price * window.myDataNewOrderdetails[index].count ;
        return  window.myDataNewOrderdetails[index].count;
      } else  return -1;
    }
  const getNewOrderItemCount = (productId) => {
     if (window.myDataNewOrderdetails.length  > 0){
       const productsSelect = (product) => {
    return product.id === productId;
    }
     let workOrderItem = window.myDataNewOrderdetails.find(productsSelect);
     console.log("workOrderItem ", workOrderItem  );
     if (workOrderItem !== undefined) {
      return workOrderItem.count;
     } else return 0;

  } else return 0;
}
const getOrderTotalItemCount = () => {
  if (window.myDataNewOrderdetails.length >0) {
    let orderCount = 0;
    function myCountCal(item) {
     orderCount += item.count;
    }
    window.myDataNewOrderdetails.forEach(myCountCal);
    return orderCount ; 
  } else return 0 ;

  }



const ContentCard = ( {switchComponentEnd, configEnd, idP, imageSrcP, productTypeP, isInStockP, productTitleP, productDescriptionP, reviewsCountP, keyFeaturesP, priceP } ) => {
   console.log({productTitleP},"productTitleP", productTypeP," productTypeP" ,"idP",idP);
//    const handleReplaceC = () =>{
//       switchComponentEnd(ViewDetails,{component: "ViewDetails", mpros: {
// imageSrc: imageSrcP,
// productType: productTypeP,
// isInStock: isInStockP,
// productTitle: productTitleP,
// productDescription: productDescriptionP,
// keyFeatures: reviewsCountP,
// reviewsCount: keyFeaturesP,
// price: priceP }})
//    }

const handleAddToCart = () => {
//  console.log("window.myDataNewOrderdetails",window.myDataNewOrderdetails);
  // window.myDataNewOrderItems.push({idP}); 
  const productsSelect = (product) => {
    return product.id === idP;
    }
  let workProductInfos=productsInfos.find(productsSelect);
     
         
   if (window.myDataNewOrderdetails.length  > 0){
     if (updateNewOrderItemCount(idP,1) === -1) {
         appendNewOrderItem  (idP, workProductInfos, 1);
      }
    
} else {
    appendNewOrderItem (idP, workProductInfos, 1);
     
  }
  console.log("window.myDataNewOrderItems",window.myDataNewOrderItems);
  let itemCount = getOrderTotalItemCount();
  if (itemCount > 0) {
    changeCartSup(itemCount);
  } ;  
  console.log("window.myDataNewOrderdetails",window.myDataNewOrderdetails); 
}
    return (
    <div className='card'>
        <div className='box-image'>
            <img src={imageSrcP} alt={productTitleP} />
            <p>{productTypeP}</p>
            {isInStockP === true ? (<p>In Stock</p>):(<p>Out Of Stock</p>)} 
        </div>
        <div className='box-info'>
            <h3>{productTitleP}</h3>
            <p>{productDescriptionP}</p>
            <p className='appraise'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </p>
            <p>{keyFeaturesP[0]} Capacity</p>
            <p>{keyFeaturesP[1]}</p>
            <h2>${priceP}</h2> 
        </div>
        <div>
            {/* +++++++++++++++++= */}
            <button id="viewDetails" onClick={() =>{
     switchComponentEnd(ViewDetails, {component: "ViewDetails", mpros: {
        id: idP,
        imageSrc: imageSrcP,
        productType: productTypeP,
        isInStock: isInStockP,
        productTitle: productTitleP,
        productDescription: productDescriptionP,
        keyFeatures: keyFeaturesP,
        reviewsCount: reviewsCountP,
        price: priceP }})}}
            >View Details</button>   
            {isInStockP === true ? (<button id="addToCart" onClick={handleAddToCart} >Add to Cart</button>):( <button id="addToCart" disabled >Add to Cart</button>)} 
        </div>
    </div>
  );
}

export default ContentCard;
export {changeCartSup ,blankCartSup, updateNewOrderItemCount, getNewOrderItemCount, getOrderTotalItemCount } ;