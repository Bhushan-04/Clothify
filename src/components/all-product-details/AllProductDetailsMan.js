import React from 'react'
import ProductDetailsMan from './product-details/ProductDetailsMan';
import ReviewsText from './Reviews/ReviewsText/ReviewsText';
import RecentlyViewMan from './recently-view/RecentlyViewMan';

const AllProductDetailsMan = () => {
  return (
    <>
        <ProductDetailsMan/>
       <ReviewsText/>
       <RecentlyViewMan/>
    </>
  )
}

export default AllProductDetailsMan;
