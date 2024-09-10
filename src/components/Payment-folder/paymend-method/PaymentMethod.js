import React from 'react'
import './Paymentmethod.css';
import PaymentTabFirst from '../paymenttab-first/PaymentTabFirst';

const PaymentMethod = () => {
    return (
        <>
            <div className='row paymemt'>
                <div className='col-lg-4 col-md-4'>
                    <div class="d-flex ">
                        <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button class="nav-link active " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Recommended</button>
                            <button class="nav-link " id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Cash On Delivery</button>
                            <button class="nav-link " id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">Credit/DebitCard</button>
                            <button class="nav-link " id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">PhonePay/GooglePay/BHIM UPI</button>
                            <button class="nav-link " id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Paytm/Wallets</button>
                            <button class="nav-link " id="v-pills-Net-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Net" type="button" role="tab" aria-controls="v-pills-Net" aria-selected="false">Net Banking</button>
                            <button class="nav-link " id="v-pills-EMI-tab" data-bs-toggle="pill" data-bs-target="#v-pills-EMI" type="button" role="tab" aria-controls="v-pills-EMI" aria-selected="false">EMI/Pay Later</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8'>
                    <div class="tab-content" id="v-pills-tabContent">
                        <PaymentTabFirst />
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">...</div>
                        <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
                        <div class="tab-pane fade" id="v-pills-Net" role="tabpanel" aria-labelledby="v-pills-Net-tab" tabindex="0">...</div>
                        <div class="tab-pane fade" id="v-pills-EMI" role="tabpanel" aria-labelledby="v-pills-EMI-tab" tabindex="0">...</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaymentMethod