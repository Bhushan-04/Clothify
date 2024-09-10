import React from 'react'
import '../FeaturedCategory/FeaturedCategory.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from './image/img1.webp';
import img2 from './image/img2.webp';
import img3 from './image/img3.webp';
import img4 from './image/img4.webp';
import img5 from './image/img5.webp';
import img6 from './image/img6.webp';
import img7 from './image/img7.webp';
import img8 from './image/img8.webp';


function FeaturedCategory() {
    return (
        <section className="Featured-Category">
            <div className='container-fluid'>
                <div className='row'>
                    <div className=''>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={4}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}                        >
                            <SwiperSlide>
                                <div className='featured-card'>
                                    <div className='feature-parent'>
                                        <div className='d-flex '>
                                            <div className='div-1 bd-bot'>
                                                <img className='model-img' src={img1} />
                                            </div>
                                            <div className='div-2 bd-bot'>
                                                <img className='model-img' src={img2} />
                                            </div>
                                            <div className='div-3 bd-bot'>
                                                <img className='model-img' src={img3} />
                                            </div>
                                            <div className='div-4 bd-bot'>
                                                <img className='model-img' src={img4} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <p>card body</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='featured-card'>
                                    <div className='feature-parent'>
                                        <div className='d-flex '>
                                            <div className='div-1 bd-bot'>
                                                <img className='model-img' src={img5} />
                                            </div>
                                            <div className='div-2 bd-bot'>
                                                <img className='model-img' src={img6} />
                                            </div>
                                            <div className='div-3 bd-bot'>
                                                <img className='model-img' src={img7} />
                                            </div>
                                            <div className='div-4 bd-bot'>
                                                <img className='model-img' src={img8} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <p>card body</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='featured-card'>
                                    <div className='feature-parent'>
                                        <div className='d-flex '>
                                            <div className='div-1 bd-bot'>
                                                <img className='model-img' src={img1} />
                                            </div>
                                            <div className='div-2 bd-bot'>
                                                <img className='model-img' src={img2} />
                                            </div>
                                            <div className='div-3 bd-bot'>
                                                <img className='model-img' src={img3} />
                                            </div>
                                            <div className='div-4 bd-bot'>
                                                <img className='model-img' src={img4} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <p>card body</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className='featured-card'>
                                    <div className='feature-parent'>
                                        <div className='d-flex '>
                                            <div className='div-1 bd-bot'>
                                                <img className='model-img' src={img5} />
                                            </div>
                                            <div className='div-2 bd-bot'>
                                                <img className='model-img' src={img6} />
                                            </div>
                                            <div className='div-3 bd-bot'>
                                                <img className='model-img' src={img7} />
                                            </div>
                                            <div className='div-4 bd-bot'>
                                                <img className='model-img' src={img8} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <p>card body</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            ...
                        </Swiper>

                        {/* <div className='featured-card'>
                                    <div className='feature-parent'>
                                        <div className='d-flex '>
                                            <div className='div-1 bd-bot'>
                                                <img className='model-img' src={img1} />
                                            </div>
                                            <div className='div-2 bd-bot'>
                                                <img className='model-img' src={img2} />
                                            </div>
                                            <div className='div-3 bd-bot'>
                                                <img className='model-img' src={img3} />
                                            </div>
                                            <div className='div-4 bd-bot'>
                                                <img className='model-img' src={img4} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <p>card body</p>
                                    </div>
                                </div> */}


                    </div>
                </div>
            </div>
        </section>
    );
}
export default FeaturedCategory;  
