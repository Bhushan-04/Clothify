import { useEffect, useState, useContext } from 'react';
import './cart.css';
import profileimg from "../../assets/logo/profile-img.png";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";
import './Login.scss';


const Cart = () => {

    const navigate = useNavigate();



    return (
        <>
            {/* <CartBanner />
            <section className='cart-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='hide-order'>

                            </div>

                            <nav aria-label="breadcrumb ">
                                <ol className="breadcrumb mt-5">
                                    <li className="breadcrumb-item active" onClick={() => navigate("/cart")}>Cart</li> */}
                                    {/* <li className="breadcrumb-item " aria-current="page" onClick={() => navigate("/information")}>Information</li> */}
                                    {/* <li className="breadcrumb-item " aria-current="page" onClick={() => navigate("/Shipping")}>Shipping</li>
                                    <li className="breadcrumb-item " aria-current="page">Payment</li>
                                </ol>
                            </nav>
                            <CartForm />
                            <hr />
                            <SocialFooter />
                        </div> */}
                        {/* <div className='col-lg-6'>
                            <div className='select-product mt-5'>
                                <div className='d-flex '>
                                    <div className='image-holder'>
                                        <img src={profileimg} className='img-4' />
                                        <div className='gray-bg'>
                                            <span>2</span>
                                        </div>
                                    </div>
                                    <div className='name-holder ms-2'>
                                        <h4>Womens Short Sleeve V Neck</h4>
                                        <span>white / S</span>
                                    </div>
                                    <div className='price-holder'>
                                        <h5>₹9,800.00</h5>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <input type="text" class="form-control mt-2" id="Address" placeholder="Gift card or discount code" />
                                    <div className="input-group-text">
                                        <div className='btn btn-apply'>Apply</div>
                                    </div>
                                </div>
                                <div className='d-flex mt-5'>
                                    <div className='total'>
                                        <h4>Subtotal</h4>
                                        <h4>Shipping</h4>
                                        <h5>Total</h5>
                                    </div>
                                    <div className='calculate-total'>
                                        <h3>₹9,800.00</h3>
                                        <h4>Calculated at next step</h4>
                                        <h5> <span>INR</span> ₹9,800.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </section> */}
        </>
    );
}

export default Cart;