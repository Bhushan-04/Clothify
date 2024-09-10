
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";

import "./Cart.scss";

const Cart = ({ title, content }) => {

    <div className="cart-banner">
        <p class="title-women">MEN ALL PRODUCTS | QUALITY &amp; LONGEVITY</p>
    </div>
    const { cartItems, setShowCart, setSignin, cartSubTotal } = useContext(Context);

    const stripePromise = loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    );

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (err) {
            console.log(err);
        }
    };

    let body = '';
    if (content === '1') {
        body = <>
            <div className="p-3">
                <label for="exampleInputEmail1" className="form-label">Enter Mobile Number </label>
                <input type="number" className="form-control" id="exampleInputEmail1" placeholder="+91 000 000 0000" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your details anywhere.</div>
            </div>
        </>
    } else {
        body = <>
            {!cartItems.length && (
                <div className="empty-cart">
                    <BsCartX />
                    <span>No products in the cart.</span>
                    <button className="return-cta" onClick={() => { }}>
                        RETURN TO SHOP
                    </button>
                </div>
            )}

            {!!cartItems.length && (
                <>
                    <CartItem />
                    
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="text total">
                                &#8377;{cartSubTotal}
                            </span>
                        </div>
                        <div className="button">
                            <button
                                className="checkout-cta"
                                onClick={handlePayment}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    }
    return (
        <div className="cart-panel">
            {content === '1' ?
                <div className="opac-layer" onClick={() => setSignin(false)}></div>
                :
                <div className="opac-layer" onClick={() => setShowCart(false)}></div>
            }
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">{content === '1' ? title : 'Shopping Cart'}</span>
                    {content === '1' ?
                        <span
                            className="close-btn"
                            onClick={() => setSignin(false)}
                        >
                            <MdClose className="close-btn" />
                            <span className="text">close</span>
                        </span>
                        :
                        <span
                            className="close-btn"
                            onClick={() => setShowCart(false)}
                        >
                            <MdClose className="close-btn" />
                            <span className="text">close</span>
                        </span>
                    }
                </div>
                {body}


            </div>
        </div>

    );
};

export default Cart;
