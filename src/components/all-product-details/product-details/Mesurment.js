import React from 'react'
import './productdetails.css'
import measureimg from '../../../assets/products/measurement.jpg';
import logoenvelopimg from  '../../../assets/products/logo-envelop.jpg';
const Mesurment = () => {
  return (
    <>
    <div className='row mt-4'>
        <div className='col-md-6'>
        <div className='img-holder'>
            <img src={measureimg} className='img-tshirt ' alt=''/>
        </div>
        </div>
        <div className='col-md-6'>
        <div className='img-holder'>
            <img src={logoenvelopimg} className='img-tshirt ' alt=''/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Mesurment