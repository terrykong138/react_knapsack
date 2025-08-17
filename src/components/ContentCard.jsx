import React from 'react';
 import { useState,useCallback } from 'react';
import ViewDetails from './ViewDetails';
const ContentCard = ( {switchComponentEnd, configEnd,imageSrcP, productTypeP, isInStockP, productTitleP, productDescriptionP, reviewsCountP,  keyFeaturesP, priceP } ) => {
   console.log(switchComponentEnd,"contentCardSE");
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
        imageSrc: imageSrcP,
        productType: productTypeP,
        isInStock: isInStockP,
        productTitle: productTitleP,
        productDescription: productDescriptionP,
        keyFeatures: keyFeaturesP,
        reviewsCount: reviewsCountP,
        price: priceP }})}}
            >View Details</button>   
            {isInStockP === true ? (<button id="addToCart"  >Add to Cart</button>):( <button id="addToCart" disabled >Add to Cart</button>)} 
        </div>
    </div>
  );
}

export default ContentCard;