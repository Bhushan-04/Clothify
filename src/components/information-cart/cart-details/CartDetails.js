import React from "react";
import "./cartdetails.css";

import Estimate from "./Estimate";
import AddOrder from "./AddOrder";
import ProductCard from "./ProductCard";
import hippikart_01 from "../../../assets/hippkart_01.png";
import hippikart_0 from "../../../assets/hippkart_0.png"
import profileimg from '../../../assets/products/BLACK_1.jpg';
import "../../User/cart.css";
import { useNavigate } from "react-router-dom";

const CartDetails = () => {

  const navigate = useNavigate();

  return (
    <>
      <section className="cart-information">
        <div className="container">
          <div className="row pro-detail">
            <div className="col-md-7 mx-auto">
              <div className="heading-holder text-center">
                <h4>CART</h4>
                <p>Spend 28.00 more and get free shipping!</p>
              </div>

              <div className="product">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <span class="Cart__HeadItem Heading">Product</span>
                  </div>
                  <div className="col-md-2 col-3">
                    <span class="Cart__HeadItem  ">Quantity</span>
                  </div>
                  <div className=" col-md-2 col-3">
                    <span class="Cart__HeadItem text-end">Total</span>
                  </div>
                </div>
              </div>


              <div className="product-card mt-4">
                <ProductCard />
              </div>
              <div className="row">
                <AddOrder />
              </div>
              {/* <div className='row'>
                          <Estimate/>
                            </div> */}
            </div>

            
            <div className="col-md-4 cart-section">
              <div className='select-product mt-5 ms-md-2 ms-0' >

                
                <div className="input-group">
                  <input type="text" class="form-control mt-2" id="Address" placeholder="Gift card or discount code" />
                  <div className="input-group-text">
                    <div className='btn btn-apply'>Apply</div>
                  </div>
                </div>

                <div className='d-flex mt-5'>
                  <div className='total '>
                    <h4 className='mb-2'>Price Details(1-Item)</h4>
                    <h4>Total MRP</h4>
                    <h4>Convinenience Fees <span>Konw More</span></h4>
                    <h5>Total</h5>
                  </div>

                  <div className='calculate-total'>
                    <h3 className='mb-2'></h3>
                    <h4>45</h4>
                    <h4>14</h4>
                    <h5>255.41</h5>
                  </div>
                </div>
                <div className='button-continue'>
                  <button className='btn btn-cont' onClick={() => navigate("/Payment")}>Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartDetails;
