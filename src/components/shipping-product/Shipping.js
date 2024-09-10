import React from 'react'
import Method from './contact-detail/Method';
import CartBanner from '../shipping-product/cart-banner/CartBanner';
import SelectProduct from './select-folder/SelectProduct';
import NavBreadLink from './nav-bread-folder/NavBreadLink';

// import './contactdetails.css'

import '../shipping-product/contact-detail/contactdetails.css';


const Shipping = () => {
 
    return (
        <>
           <CartBanner/>
            <section className='cart-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            
                            <NavBreadLink/>
                            <Method />
                        </div>
                        <div className='col-md-1'>
                          
                        </div>
                        <div className='col-md-5'>
                           <SelectProduct/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shipping