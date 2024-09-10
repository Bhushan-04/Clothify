import React from 'react'
import '../HowToWearBanner/HowToWearBanner.css'
import wearbanner from '../image/wear-banner.jpg'

function HowToWearBanner() {
    return (
        <section className="Wear-Banner">
            <div className='container-fluid p-0'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='main-banner-img'>
                            <img src={wearbanner} alt='...' className='img-fluid wear-banner-img' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HowToWearBanner;  
