import React from 'react'
import '../HowToWearText/HowToWear.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// library.add(fas,)
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import boyimg from '../image/boyimg.webp'
import girlimg2 from '../image/girlimg2.webp'
import girlimg from '../image/girlimg.webp'
import img10 from '../image/img10.webp'
import img11 from '../image/img11.webp'

function HowToWearText() {
    return (
        <section className="Wear-text">
            <div className='container '>
                <div className='row'>
                    <div className='col-md-6 text-center mt-5 mb-5'>
                        <img src={boyimg} alt='...' className='girl-img1 ' />
                    </div>
                    <div className='col-md-6 mt-5'>
                        <h5 className='text-start'>ESSENTIAL FRENCH TERRY PIECES</h5>
                        <p className=' text-center mt-4'>French terry is the perfect material for nearly any occasion. You will love how it feels against your skin and can easily dress it up or down. Here are a few essential French terry pieces to add to your capsule wardrobe that will quickly become your go-to's:</p>
                        <ul>
                            <li>T-shirts - A French terry t-shirt is a must-have item in your clothing arsenal. This elevated basic made of soft and comfortable 100% organic cotton fits any outfit you can dream up. Try pairing a classic French terry box tee with a cozy cardigan and some jeans in winter for a stylish and comfortable winter outfit. Or, wear it on its own with some shorts during the warmer months for a casual and relaxed look. No matter how you style it, a French terry t-shirt is a versatile and comfortable choice for everyday wear. </li>
                            <li>Shorts - Made from soft and breathable French terry, a pair of French terry shorts will keep you relaxed and comfortable no matter what you do. Whether you're hitting the gym, running errands, or lounging at home, French terry shorts are a comfortable and stylish choice.  </li>
                            <li>Pants - French terry is also an excellent material for pants. From joggers to track pants, the options are endless. Similar to French terry shorts, a cozy pair of French terry pants is perfect for lounging, fitness, and day-to-day activities. </li>
                            <li>Sweatshirt - A classic French terry sweatshirt is an essential component for a year-round wardrobe you will never get tired of. The soft French terry material is warm enough to layer outdoors and cool enough to lounge in during any season. </li>
                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <h5>BEST TIME TO WEAR FRENCH TERRY </h5>
                            <p>French terry is suitable for all weather conditions and seasons. Its durability, breathability, and warmth make it far superior to other fabrics for any occasion. Some of the best times to wear French terry include lounging, working out, and running errands, among other day-to-day activities. </p>
                            <p>Lounging </p>
                            <p>The luxurious softness of French terry makes it perfect for lounging around the house. The fabric is also breathable and absorbent, making it an excellent choice for relaxing on warm days, and the perfect fabric to wear directly on the skin. French terry is a cozy and stylish option, whether you’re lounging on the couch, taking a break from your smart-working day, or simply enjoying a quiet moment at home. </p>
                            <p>Working Out </p>
                            <p>French terry is also an optimal material to wear during exercise. Not only is it breathable and comfortable, but it’s also moisture-wicking. This makes it perfect for any physical activity, from a brisk walk to a high-intensity workout. Plus, you can wear it repeatedly without worrying about losing its shape. </p>
                            <p>To take your workout attire to the next level, try pairing your workout clothes with a French terry sweater or joggers as an outer layer when leaving the gym. This will add an extra layer of warmth and style, making it the perfect outfit for a post-workout outing. </p>
                            <p>Running Errands </p>
                            <p>While it is often associated with loungewear and relaxation, the right pieces of French terry clothing can be comfortable and presentable outside the house. For example, a high-quality Unisex French terry sweatshirt paired with jeans or leggings is a casual yet stylish outfit that is perfect for running errands or grabbing a coffee with friends. Along with keeping you cozy and dry throughout the day, it can easily withstand the wear and tear of daily life.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='text-center mt-5 mb-5'>
                            <img src={girlimg2} alt='...' className='girl-img1' />
                        </div>
                    </div>
                    <div className='col-md-6 mt-md-5 mt-mb-5'>
                        <div className='text-center'>
                            <img src={girlimg} alt='...' className='girl-img1 ' />
                        </div>
                    </div>
                    <div className='col-md-6 mt-md-5 mt-mb-5'>
                        <p>Tips for Experiencing the Benefits of French Terry </p>
                        <p>Taking good care of your organic cotton French terry clothing will ensure you can enjoy it for years to come. This luxurious fabric offers unmatched comfort and flexibility, making it a popular choice for loungewear and casual clothing. To ensure that your French terry garments stay soft and comfortable, it is essential to follow these care instructions:</p>
                        <ul>
                            <li>Always wash your French terry clothing in cold water using a gentle detergent. Hot water can cause the fabric to shrink and lose its shape, while harsh detergents can strip away its natural oils and softness.</li>
                            <li>Avoid using fabric softeners or dryer sheets when washing French terry, as these products can leave a waxy residue on the fabric, making it feel stiff and uncomfortable.</li>
                            <li>When drying your French terry clothing, it is best to air dry it on a flat surface instead of hanging it to dry, as this can cause the fabric to stretch and lose its shape. If you must use a dryer, use the lowest heat setting and remove the clothing as soon as it is dry to prevent excessive shrinkage.</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* User section */}
            <div className='container-fluid p-0'>
                <div className='user-section mt-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 pt-5'>
                                <div className='main-girl-class'>
                                    <img src={img10} alt='...' className='girl-img ' />
                                </div>
                                <h5 className='mt-3'>OUR STORY - INTERVIEW BY JOSHUA KATCHER</h5>
                            </div>
                            <div className='col-md-6 pt-5'>
                                <div className='main-girl-class'>
                                    <img src={img11} alt='...' className='girl-img ' />
                                </div>
                                <h5 className='mt-3'>THINK BEFORE YOU BUY: THE IMPACT OF ONLINE SHOPPING RETURNS</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
export default HowToWearText;  