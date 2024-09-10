import React from 'react'
import '../BlogBanner/BlogBanner.css'
import blogbanner from '../image/about-banner.png'
import {Link} from "react-router-dom";

function BlogBanner() {
    return (
        <section className="Blog-Banner">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='text-center mb-5 mt-5'>STORIES</h2>
                        <div className='main-banner-img'>
                            <img src={blogbanner} alt='...' className='banner-img' />
                            <div className='text-holder text-center'>
                                <h1 className=''>HOW TO WEAR FRENCH TERRY</h1>
                                <div class="outer">
                                    <div class="button-read-more1">
                                    <Link to="/HowToWear" class="text"> Read More </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default BlogBanner;
