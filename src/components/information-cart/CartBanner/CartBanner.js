import React from 'react'
import '../CartBanner/CartBanner.css'
import cartbanner2 from './image/cartbanner2.jpg'

function CartBanner(props) {
    const tabname = props.tabname;
    const tabname2 = props.tabname2;
    return (
        <section className="cart-Banner">
            <div className='container-fluid p-0'>
                <div className='row ms-0 me-0'>
                    <div className='col-md-12 p-0'>
                        <div className='cart-banner-img'>
                            {/* <img src={cartbanner2} alt='...' className='img-fluid cart-banner-img1' /> */}
                        </div>
                        {/* <div className='title-cart-banner text-center'>
                            <h5 className='check mt-4'>Checkout</h5>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">{tabname}</li>
                                    <li className="breadcrumb-item active" aria-current="page">{tabname2}</li>
                                </ol>
                            </nav>
                        </div> */}
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default CartBanner