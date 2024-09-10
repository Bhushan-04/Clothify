import React from 'react'
import HowToWearBanner from './HowToWearBanner/HowToWearBanner.js';
import HowToWearText from './HowToWearText/HowToWearText.js';
import Collection from '../Blog/Collection/Collection.js';
import FeaturedCategory from './FeaturedCategory/FeaturedCategory.js'


const HowToWear = () => {
    return (
        <div>
            <HowToWearBanner />
            <HowToWearText />
            {/* <Collection /> */}
            {/* <FeaturedCategory/> */}

        </div>
    )
}

export default HowToWear;