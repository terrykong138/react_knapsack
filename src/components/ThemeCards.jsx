import React from 'react';
import { productsInfos } from '../../data';
import ContentCard from './ContentCard';

const ThemeCards = ({switchComponent, config}) => {
  console.log(switchComponent,"Themecards");
    const productsSelect = (product) => {
    return product.productType === config.component;
}
    const themeProducts = productsInfos.filter(productsSelect);
  return (
     <div>
     {themeProducts.map((productsInfoP) => (
        <ContentCard key={productsInfoP.id} 
        idP={productsInfoP.id} 
        switchComponentEnd={switchComponent}
        imageSrcP={productsInfoP.imageSrc }
          isInStockP={productsInfoP.isInStock} 
          productTitleP={productsInfoP.productTitle}
          keyFeaturesP={productsInfoP.keyFeatures}
          priceP={productsInfoP.price} 
          productDescriptionP={productsInfoP.productDescription} 
          reviewsCountP={productsInfoP.reviewsCount}
          productTypeP={productsInfoP.productType}
         />
     )) }
    </div>
  );
}

export default ThemeCards;