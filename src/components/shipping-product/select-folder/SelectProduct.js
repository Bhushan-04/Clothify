import React from 'react'
import profileimg from '../../../assets/products/BLACK_1.jpg';
import { useNavigate } from "react-router-dom";
import "../../User/cart.css";
const SelectProduct = () => {
    const navigate = useNavigate();
    return (
        <div className=' '>
            <div className='select-product mt-5 ms-md-2 ms-0' >

                <div className='d-flex mt-4'>
                    <div className='image-holder'>
                        <img src={profileimg} className='img-4' alt='image_name'/>
                        <div className='gray-bg'>
                            <span>2</span>
                        </div>
                    </div>
                    <div className='name-holder ms-2'>
                        <h4>Womens Short Sleeve V Neck</h4>
                        <span>Estimate Delivery by 29 june</span>
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
    )
}

export default SelectProduct