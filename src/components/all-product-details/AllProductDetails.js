import React from 'react'
import  ProductDetails from './product-details/ProductDetails';
import ReviewsText from './Reviews/ReviewsText/ReviewsText';
import RecentlyView from './recently-view/RecentlyView';
const AllProductDetails = () => {
  return (
    <>
     <ProductDetails/>
    <ReviewsText/>
   <RecentlyView/>
    </>
  )
}

export default AllProductDetails;