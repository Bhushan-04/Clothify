import React from 'react'
import './Recently.css';
import manimg1 from '../../../assets/products/men1.jpg';
import manimg2 from '../../../assets/products/men-2.jpg';
import { Link } from "react-router-dom";
const RecentlyViewMan = () => {
    return (
        <>
            <section className='recently'>
                <div className='container-fluid'>
                    <div className='row product-img'>
                        <div className='col-md-11 '>
                            <div className='heading-holder text-center mb-5'>
                                <h2>YOU MAY ALSO LIKED</h2>
                            </div>
                            <div className='row'>
                                <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6'>
                                    <Link to="/mens">
                                        <div className='image-holder'>
                                            <img src={manimg1} className='img-1' />
                                            <div className='image-overlay'>
                                                <img src={manimg2} className='img-2' />
                                            </div>
                                        </div></Link>
                                    <div className='mt-4'>
                                        <p>MENS SHORT SLEEVE HENLEY CURVED HEM<br /> ₹68.00</p>
                                    </div>
                                </div>
                                <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6'>
                                <Link to="/mens">  <div className='image-holder'>
                                        <img src={manimg1} className='img-1' />
                                        <div className='image-overlay'>
                                            <img src={manimg2} className='img-2' />
                                        </div>
                                    </div></Link>
                                    <div className='mt-4'>
                                        <p>MENS SHORT SLEEVE HENLEY CURVED HEM<br /> ₹68.00</p>
                                    </div>
                                </div>
                                <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6'>
                                <Link to="/mens">   <div className='image-holder'>
                                        <img src={manimg1} className='img-1' />
                                        <div className='image-overlay'>
                                            <img src={manimg2} className='img-2' />
                                        </div>
                                    </div></Link>
                                    <div className='mt-4'>
                                        <p>MENS SHORT SLEEVE HENLEY CURVED HEM<br /> ₹68.00</p>
                                    </div>
                                </div>
                                <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6'>
                                <Link to="/mens">   <div className='image-holder'>
                                        <img src={manimg1} className='img-1' />
                                        <div className='image-overlay'>
                                            <img src={manimg2} className='img-2' />
                                        </div>
                                    </div></Link>
                                    <div className='mt-4'>
                                        <p>MENS SHORT SLEEVE HENLEY CURVED HEM<br /> ₹68.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RecentlyViewMan


