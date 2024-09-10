import React from 'react'
import { useNavigate } from "react-router-dom";
import navitateimg from '../../../assets/products/navidium-shipping-icon.jpg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas)
const AddOrder = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='border-line mb-4'></div>
            <div className='col-md-6'>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Add Order Note</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='How Can We Help You'></textarea>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='text-md-end  text-start tittle-2'>
                    <p>TOTAL: 241.25</p>
                    <span>Shipping & taxes calculated at checkout</span>
                    <div className='row mt-3'>
                        {/* <div className='col-md-3'>
                            <div className='image-holder'>
                                <img src={navitateimg} className='navidium-img' />
                                <div className='img-fa-overlay'>
                                    <FontAwesomeIcon icon="fa-solid fa-circle-check" className='fa-icon' />
                                </div>
                            </div>
                        </div> */}
                        {/* <div className='col-md-6'>
                            <div className='d-flex'>
                                <p className='navidium'>Navidium Shipping Protection </p>
                                <FontAwesomeIcon icon="fa-solid fa-circle-question" className='ms-3' />
                            </div>
                            <p className='demage'>from Damage, Loss & Theft for $5.25 USD<br />
                                Get peace of mind with Delivery Guarantee in the event your delivery is damaged, stolen, or lost during transit.</p>
                        </div> */}
                        {/* <div className='col-md-3'>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"  />

                            </div>
                        </div> */}
                    </div>
                    <div class="outer mt-3"><div class="button" onClick={() => navigate("/address")}><div class="text"> <p class="" >CHECK OUT</p></div></div></div>
                </div>
            </div>
        </>
    )
}

export default AddOrder;