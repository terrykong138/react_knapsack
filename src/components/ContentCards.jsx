import React from 'react';
import { productsInfos } from '../../data';
import ContentCard from './ContentCard';
const ContentCards = ({switchComponetC}) => {
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
            switchComponent={switchComponetC}
         />
     ))}
    </div>
  );
}

export default ContentCards;