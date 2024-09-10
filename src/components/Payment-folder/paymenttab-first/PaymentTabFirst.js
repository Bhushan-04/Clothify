import React from 'react'
import payimg from '../../../assets/logo/paytm.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas)
const PaymentTabFirst = () => {
    return (
        <>
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                <div className='text-holder'>
                    <h3>Recommended Payment Option</h3>
                    <div className='border-bottom'>
                        <div class="form-check  d-flex my-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked />
                            <label class="form-check-label" for="flexRadioDefault4">
                                Cash On Delivery
                            </label>
                            <label className="form-check-label free-rs" for="flexRadioDefault4">
                                <img src={payimg} className='img-pay' />
                            </label>
                        </div>

                    </div>
                    <div className=' border-bottom'>
                        <div class="form-check d-flex my-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Google Pay
                            </label>
                            <label className="form-check-label free-rs" for="flexRadioDefault2">
                                <img src={payimg} className='img-pay' />
                            </label>
                        </div>

                    </div>

                    <div class="form-check d-flex my-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
                        <label className="form-check-label" for="flexRadioDefault3">
                            Paytm (Wallet,PostPaid )
                        </label>

                        <label className="form-check-label free-rs" for="flexRadioDefault3">
                            <img src={payimg} className='img-pay' />
                        </label>

                    </div>

                </div>
            </div>
        </>
    )
}

export default PaymentTabFirst