import React from 'react';
import { productsInfos } from '../../data';
import ContentCard from './ContentCard';
const ThemeCards = ({switchComponent, theme}) => {
    const productsSelect = (product) => {
    return product.productType === theme.component;
}
    const themeProducts = productsInfos.filter(productsSelect);
//  console.log(themeProducts);
  return (
     <div>
     {themeProducts.map((productsInfoP) => (
        <ContentCard key={productsInfoP.id} 
        switchComponentEnd={switchComponent}
        imageSrcP={productsInfoP.imageSrc }
          isInStockP={productsInfoP.isInStock} 
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