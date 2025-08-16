import React from 'react'

const ViewDetails = ({switchComponent,pros}) => {
//   {imageSrcV, productTypeV, isInStockV, productTitleV, reviewsCountV,productDescriptionV, keyFeaturesV, priceV }
   console.log(pros);
return (
      <div className='card'>
        <button><i class="fa-solid fa-arrow-left"></i>Back to Products</button>
        <div className='box-image'>
            <img src={pros.imageSrc} alt={pros.productTitle} />
            <p>{pros.productType}</p>
            <p>{pros.isInStock}</p>
        </div>
        <div className='box viewDetailsInfo'>
            <h3>{pros.productTitle}</h3>
            <p className='appraise'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                （4.5 out of 5 stars）|{pros.reviewsCount} reviews </p>
            <h2 className='priceTag'>${pros.price}</h2>  
            <h3>Description</h3>
            <p>{pros.productDescription}</p>
            <h3>Key Features</h3>
            <div className='box-keyFeatures'>
                <div>
                    <p><i class="fa-solid fa-check"></i>{pros.keyFeatures[0]} Capacity</p>
                    <p><i class="fa-solid fa-check"></i>{pros.keyFeatures[1]}</p>
                </div>
                <div>
                    <p><i class="fa-solid fa-check"></i>{proskeyFeatures[2]}</p>
                    <p><i class="fa-solid fa-check"></i>{pros.keyFeatures[3]}</p>
                </div>
            </div> 
            <div>
                <h3>Quantity:<a>-</a><a id='buyCount'>1</a><a>+</a></h3>
            </div>
            
        </div>
        <div>
            <button id="addToCart"><i class="fa-regular fa-cart-shopping"></i>Add to Cart</button>
        </div>
        <div className='box viewDetailsFoot'>
            <div className='box favorable'>
                <i class="fa-regular fa-truck"></i>
                <h3>Free Shipping</h3>
                <p>Free shipping on orders over $75</p>
            </div>
            <div className='box favorable'>
                <i class="fa-regular fa-shield"></i>
                <h3>Warranty</h3>
                <p>2-year manufacturer warranty included</p>
            </div>
            <div className='box favorable'>
                <i class="fa-solid fa-arrow-rotate-left"></i>
                <h3>Easy Returns</h3>
                <p>30-day hassle-free return policy</p>
            </div>
        </div>
    </div>
  );
}

export default ViewDetails;