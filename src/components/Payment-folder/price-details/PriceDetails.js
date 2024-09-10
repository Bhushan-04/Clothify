import React from 'react'
import '../paymend-method/Paymentmethod.css'
const PriceDetails = () => {
    return (
        <>
            <div className='seclect-product mt-5'>
                <h4 className='mb-2'>Price Details(1-Item)</h4>
                <div className='row mt-5'>
                    <div className='total col-6'>
                        <h4>Total MRP</h4>
                        <h4>Discount on MRP</h4>
                        <h4>Convinenience Fees <span>Konw More</span></h4>
                    </div>

                    <div className='calculate-total col-6'>
                        <h4>45</h4>
                        <h4>23</h4>
                        <h4>14</h4>
                    </div>
                </div>
                <div className='row  border-top'>
                    <div className='total col-6 mt-2'>
                        <h5>Total</h5>
                    </div>
                    <div className='calculate-total col-6 mt-2'>
                        <h5>255.41</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceDetails