import React from 'react'
import CartBanner from '../shipping-product/cart-banner/CartBanner'
import NavBreadLink from '../shipping-product/nav-bread-folder/NavBreadLink'
import '../User/cart.css'
import PaymentMethod from './paymend-method/PaymentMethod'
import PriceDetails from './price-details/PriceDetails'
const Payment = () => {
    return (
        <>
           <CartBanner/>
            <section className='cart-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xxl-8 col-xl-8 col-lg-9 col-md-12'>
                         <NavBreadLink/>
                      
                         <PaymentMethod/>
                    
                  
                        </div>
                        {/* <div className='col-lg-1'>
                            </div> */}
                        <div className=' col-xxl-4 col-xl-4 col-lg-3 col-md-12'>
                         <PriceDetails/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Payment