import React from 'react'
import './productdetails.css'
import cheakimg from '../../../assets/products/BLACK_1.jpg';
import cheakimg1 from '../../../assets/products/BLACK-2.jpg';
import cheakimg2 from '../../../assets/products/FORESTGREEN.jpg';
import cheakimg3 from '../../../assets/products/BLACK-3.jpg';
import { Link } from "react-router-dom";
const BuyIt = () => {
    return (
        <>
            <div className='row mt-4'>
                <div className='text-holder'>
                    <h4>Buy it With:</h4>
                </div>
                <div className='col-md-3 col-sm-6 col-12'>
                    <Link to="/category">
                        <div className='img-holder'>
                            <img src={cheakimg} className='img-measure ' alt='' />
                        </div>
                        <p className='name-shirt'>Womens Long Sleeve Crew Neck</p>
                    </Link>
                </div>
                <div className='col-md-3 col-sm-6 col-12'>
                    <Link to="/category">
                        <div className='img-holder'>
                            <img src={cheakimg} className='img-measure ' alt='' />
                        </div>
                        <p className='name-shirt'>Womens Long Sleeve Crew Neck</p>
                    </Link>
                </div>
                <div className='col-md-3 col-sm-6 col-12'>
                    <Link to="/mens">
                        <div className='img-holder'>
                            <img src={cheakimg2} className='img-measure ' alt='' />
                        </div>
                        <p className='name-shirt'>Mens Short Sleeve V Neck</p>
                    </Link>
                </div>
                <div className='col-md-3 col-sm-6 col-12'>
                    <Link to="/category">
                        <div className='img-holder'>
                            <img src={cheakimg} className='img-measure ' alt='' />
                        </div>
                        <p className='name-shirt'>Womens Long Sleeve Crew Neck</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BuyIt