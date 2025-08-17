import React from 'react';
import {  useState, useCallback } from 'react';
import { productsInfos } from '../../data';
import ContentCard from './ContentCard';
const ContentCards = ({ switchComponent ,config}) => {
  console.log(switchComponent,"contentCards", config, "configCD");
  return (
    <div>
     {productsInfos.map((productsInfoP) => (
         
        <ContentCard  key={productsInfoP.id} 
        imageSrcP={productsInfoP.imageSrc }
          isInStockP={productsInfoP.isInStock} 
          keyFeaturesP={productsInfoP.keyFeatures}
          priceP={productsInfoP.price} 
          productDescriptionP={productsInfoP.productDescription} 
          reviewsCountP={productsInfoP.reviewsCount}
          productTypeP={productsInfoP.productType}
          switchComponentEnd={switchComponent}
          configEnd={config}
         />
     ))}
    </div>
  );
}

export default ContentCards;