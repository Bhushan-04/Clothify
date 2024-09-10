import React from 'react'
import CartDetails from './cart-details/CartDetails'
import CartBanner from './CartBanner/CartBanner'
import RecentlyView from '../all-product-details/recently-view/RecentlyView'

const Information = () => {
  return (
    <>
    <CartBanner />
    <CartDetails/>
    <RecentlyView/>
    </>
  )
}

export default Information