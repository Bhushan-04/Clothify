import React from 'react'
import './productdetails.css'
import ImageZoom from "react-image-zooom";
import { useState, useEffect } from "react";

import tshirtimg from '../../../assets/products/WHITE-1.jpg';
import tshirtimg1 from '../../../assets/products/white-2.jpg';
import tshirtimg2 from '../../../assets/products/WHITE-3.jpg';
import tshirtimg3 from '../../../assets/products/WHITE-4.jpg';
import Mesurment from './Mesurment';
import BuyIt from './BuyIt';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgorganic from '../../../assets/New folder/Organic.png';
import imgart from '../../../assets/New folder/clipart-united.png';
import imgcharity from '../../../assets/New folder/Charity.png';
import imgwash from '../../../assets/New folder/Pre-washed.png';
import wordimg from '../../../assets/logo/wordpress-logo.jpg';
import { useNavigate } from "react-router-dom";
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactImageMagnify from 'react-image-magnify';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';
library.add(fas)


export const ProductDetails = () => {
    const navigate = useNavigate();
    const [imageData, setImageData] = useState(null);

    const baseURL = "https://res.cloudinary.com/<cloud-name>/image";

    const getImages = async () => {
        const res = await fetch(
            "https://res.cloudinary.com/<cloud-name>/image/list/<tag-name>.json"
        );
        const data = await res.json();
        setImageData(data);
    };

    return (
        <>
            <section className='details'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7'>
                            <div className='row'>
                                <div className='col-md-6 mb-4'>
                                    <div className='img-holder' data-bs-toggle="modal" data-bs-target="#productModal">
                                        {/* <img src={tshirtimg} className='img-tshirt mb-2' alt='' /> */}
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: '...',
                                                isFluidWidth: true,
                                                src: tshirtimg
                                            },
                                            largeImage: {
                                                src: tshirtimg,
                                                width: 1200,
                                                height: 1800
                                            }
                                        }} />

                                    </div>
                                </div>
                                <div className='col-md-6 mb-2'>
                                    <div className='img-holder ' data-bs-toggle="modal" data-bs-target="#productModal">
                                        {/* <img src={tshirtimg1} className='img-tshirt mb-2' alt='' /> */}
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: '...',
                                                isFluidWidth: true,
                                                src: tshirtimg1
                                            },
                                            largeImage: {
                                                src: tshirtimg1,
                                                width: 1200,
                                                height: 1800
                                            }
                                        }} />

                                    </div>
                                </div>
                                <div className='col-md-6 mb-2'>
                                    <div className='img-holder' data-bs-toggle="modal" data-bs-target="#productModal">
                                        {/* <img src={tshirtimg2} className='img-tshirt mb-2' alt='' /> */}
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: '...',
                                                isFluidWidth: true,
                                                src: tshirtimg2
                                            },
                                            largeImage: {
                                                src: tshirtimg2,
                                                width: 1200,
                                                height: 1800
                                            }
                                        }} />
                                    </div>
                                </div>
                                <div className='col-md-6 mb-2'>
                                    <div className='img-holder' data-bs-toggle="modal" data-bs-target="#productModal">
                                        {/* <img src={tshirtimg3} className='img-tshirt mb-2' alt='' /> */}
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: '...',
                                                isFluidWidth: true,
                                                src: tshirtimg3
                                            },
                                            largeImage: {
                                                src: tshirtimg3,
                                                width: 1200,
                                                height: 1800
                                            }
                                        }} />                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 mt-lg-0 mt-4'>
                            <section className='select-shirt '>
                                <div className='row'>
                                    <div className='row'>
                                        <div className='heading-holder col-md-12'>
                                            <h4>anayna</h4>
                                            <h4 className='description-class '>Womens Short Sleeve Crew Neck</h4>
                                        </div>
                                        <div className='rupees-holder d-flex mt-2'>
                                            <h4>₹4,000</h4>

                                            <h4 className='not-offer-prise me-2'>MRP ₹4,900</h4>
                                            <h4 className='off-percent'>(9% OFF)</h4>
                                        </div>
                                        <div className='  mt-2 mb-3'>
                                            <p className='tax-text'>inclusive of all taxes</p>
                                        </div>
                                    </div>
                                    {/* <div className='retails-price mt-4'>
                                        <h5>Traditional retail price: $110</h5>
                                    </div> */}
                                    <div className='d-flex'>
                                        <FontAwesomeIcon icon="fa-solid fa-star" className='' />
                                        <FontAwesomeIcon icon="fa-solid fa-star" className='' />
                                        <FontAwesomeIcon icon="fa-solid fa-star" className='' />
                                        <FontAwesomeIcon icon="fa-solid fa-star" className='' />
                                        <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" className='' />
                                        <p>285 Reviews</p>
                                    </div>
                                    <div className='content-holder'>
                                        <p>Dare to dress simply. From morning walks to nights on the town, this high quality,
                                            classic V-neck will be your go-to garment. Slip into soft,
                                            100% organic cotton that's sustainably sourced and know that you've made a choice that's
                                            good for your wardrobe and the world.</p>
                                    </div>
                                    <div class="ProductForm__Option">
                                        {/* <span class="ProductForm__Label"> Color: <span class="ProductForm__SelectedValue">white</span></span> */}
                                    </div>
                                    <div className='radio-section mt-3 '>
                                        <div class="form-check me-2">
                                            <input class="form-check-input radio1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <p className='color-name'>Black</p>
                                        </div>
                                        <div class="form-check me-2">
                                            <input class="form-check-input radio2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <p className='color-name'>Gray</p>
                                        </div>

                                        <div class="form-check me-2">
                                            <input class="form-check-input radio3" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                            <p className='color-name'>Olive</p>
                                        </div>
                                        <div class="form-check me-2">
                                            <input class="form-check-input radio4" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                            <p className='color-name'>Gray</p>
                                        </div>
                                        <div class="form-check me-2">
                                            <input class="form-check-input radio5" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                            <p className='color-name'>Light Green</p>
                                        </div>
                                        <div class="form-check me-2">
                                            <input class="form-check-input radio6" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                                            <p className='color-name'>Black</p>
                                        </div>

                                        <div class="form-check me-2">
                                            <input class="form-check-input radio7" type="radio" name="flexRadioDefault" id="flexRadioDefault7" />
                                            <p className='color-name'>Black</p>
                                        </div>
                                        <div class="form-check me-2">
                                            <input class="form-check-input radio8" type="radio" name="flexRadioDefault" id="flexRadioDefault8" />
                                            <p className='color-name'>Black</p>
                                        </div>
                                    </div>
                                    <div className='radio-section mt-3'>
                                        <div class="form-check me-2">
                                            <input class="form-check-input radio9" type="radio" name="flexRadioDefault" id="flexRadioDefault9" />
                                            <p className='color-name'>Black</p>
                                        </div>

                                        <div class="form-check me-2">
                                            <input class="form-check-input radio10" type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
                                            <p className='color-name'>Black</p>
                                        </div>

                                        <div class="form-check me-2">
                                            <input class="form-check-input radio11" type="radio" name="flexRadioDefault" id="flexRadioDefault11" />
                                            <p className='color-name'>Black</p>
                                        </div>
                                        <div class="form-check me-2">
                                            <input class="form-check-input radio12" type="radio" name="flexRadioDefault" id="flexRadioDefault12" />
                                            <p className='color-name'>Black</p>
                                        </div>
                                        <div class="form-check me-2">
                                            <input class="form-check-input radio13" type="radio" name="flexRadioDefault" id="flexRadioDefault13" />
                                            <p className='color-name'>Black</p>
                                        </div>
                                        <div class="form-check me-2">
                                            <input class="form-check-input radio14" type="radio" name="flexRadioDefault" id="flexRadioDefault14" />
                                            <p className='color-name'>Black</p>
                                        </div>

                                        <div class="form-check me-2">
                                            <input class="form-check-input radio15" type="radio" name="flexRadioDefault" id="flexRadioDefault15" />
                                            <p className='color-name'>Black</p>
                                        </div>
                                        <div class="form-check me-2">
                                            <input class="form-check-input radio16" type="radio" name="flexRadioDefault" id="flexRadioDefault16" />
                                            <p className='color-name'>Black</p>
                                        </div>
                                    </div>
                                    <div className='radio-section mt-3'>
                                        <div class="form-check me-2">
                                            <input class="form-check-input radio17" type="radio" name="flexRadioDefault" id="flexRadioDefault17" />
                                            <p className='color-name'>Black</p>
                                        </div>
                                    </div>
                                    <div className='size-select mt-4'>
                                        {/* <h6>Natalia Is 5'-10’’ measurements: 32’’ 24.5’’ 35’’ and is wearing a </h6>
                                        <h6>medium.</h6> */}
                                        <h6>Size:</h6>
                                    </div>


                                    <ul class="nav nav-pills shirt-size-div mb-3" id="pills-tab" role="tablist">

                                        <li class="nav-item" role="presentation">
                                            <div className='hover-xxs-show'>
                                                <div className='hover-xxs'>
                                                    <p className='ps-2'>Body Measurement:To Fit Bust - 28.0in</p>
                                                    <span className='ps-2'>The model (height 5'8) is wearing a size S</span>
                                                </div>

                                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" >XXS</button>
                                            </div>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <div className='hover-xxs-show'>
                                                <div className='hover-xxs'>
                                                    <p className='ps-2'>Body Measurement:To Fit Bust - 30.0in</p>
                                                    <span className='ps-2'>The model (height 5'8) is wearing a size S</span>
                                                </div>

                                                <button class="nav-link " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">XS</button>
                                            </div>
                                        </li>

                                        <li class="nav-item " role="presentation">
                                            <div className='hover-xxs-show'>
                                                <div className='hover-xxs'>
                                                    <p className='ps-2'>Body Measurement:To Fit Bust - 32.0in</p>
                                                    <span className='ps-2'>The model (height 5'8) is wearing a size S</span>
                                                </div>
                                                <button class="nav-link " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">S</button>
                                            </div>
                                        </li>

                                        <li class="nav-item " role="presentation">
                                            <div className='hover-xxs-show'>
                                                <div className='hover-xxs'>
                                                    <p className='ps-2'>Body Measurement:To Fit Bust - 34.0in</p>
                                                    <span className='ps-2'>The model (height 5'8) is wearing a size S</span>
                                                </div>
                                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab"
                                                    aria-controls="pills-contact" aria-selected="false">M</button>
                                            </div>
                                        </li>

                                        <li class="nav-item " role="presentation">
                                            <div className='hover-xxs-show'>
                                                <div className='hover-xxs'>
                                                    <p className='ps-2'>Body Measurement:To Fit Bust - 36.0in</p>
                                                    <span className='ps-2'>The model (height 5'8) is wearing a size S</span>
                                                </div>
                                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">L</button>
                                            </div>
                                        </li>

                                        <li class="nav-item " role="presentation">
                                            <div className='hover-xxs-show'>
                                                <div className='hover-xxs'>
                                                    <p className='ps-2'>Body Measurement:To Fit Bust - 38.0in</p>
                                                    <span className='ps-2'>The model (height 5'8) is wearing a size S</span>
                                                </div>
                                                <button class="nav-link " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Xl</button>
                                            </div>
                                        </li>

                                        <li class="nav-item " role="presentation">
                                            <div className='hover-xxs-show'>
                                                <div className='hover-xxs'>
                                                    <p className='ps-2'>Body Measurement:To Fit Bust - 40.0in</p>
                                                    <span className='ps-2'>The model (height 5'8) is wearing a size S</span>
                                                </div>
                                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">XXL</button>
                                            </div>
                                        </li>

                                    </ul>


                                    <div className='row mt-3'>
                                        <div className='col-md-12 '>



                                            {/* <div className='col-md-3'> */}
                                            <div className='d-flex addcart-btn-sec  mt-2'>
                                                <div className="select-product-div me-4">
                                                    <h6 className="pro-name">Quantity:</h6>
                                                    <div className="d-flex add-cart-box">
                                                        <button className="minus btn">-</button>
                                                        <div className="quantity">1
                                                        </div>
                                                        <button className="add btn">+</button>
                                                    </div>
                                                </div>
                                                <div className='mt-4'>
                                                    <button className='btn btn-success' onClick={() => navigate("/wishlist")}>Wishlist</button>
                                                </div>


                                                <div className='mt-4 ms-2'>
                                                    {/* <button className='btn notify-btn' ></button> */}
                                                    <button type="button" class="btn  notify-btn " data-bs-toggle="modal" data-bs-target="#notifyModal">
                                                        Notify
                                                    </button>
                                                </div>
                                            </div>
                                            {/* <div className=' '>
                                                <button className='btn btn-find' data-bs-toggle="modal" data-bs-target="#findchart"><FontAwesomeIcon icon="fa-solid fa-star" className='me-3' />Find My Fit</button>
                                            </div> */}
                                            {/* </div> */}
                                        </div>
                                        <div className='bg-clr mt-4'>
                                            {/* <h6 className='size-btn p-1 mt-2'>SELECT SIZE</h6> */}
                                        </div>

                                        <div className='col-lg-3 col-md-6 col-6 text-center'>
                                            <div className='image-holder '>
                                                <img src={imgart} className='organic-img' />
                                            </div>
                                            <p>Made in U.S.A.</p>
                                        </div>
                                        <div className='col-lg-3 col-md-6  col-6 text-center'>
                                            <div className='image-holder'>
                                                <img src={imgorganic} className='organic-img' />
                                            </div>
                                            <p>Organic Cotton</p>
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-6 text-center'>
                                            <div className='image-holder'>
                                                <img src={imgcharity} className='organic-img' />
                                            </div>
                                            <p>1% to Charity.</p>
                                        </div>
                                        <div className='col-lg-3 col-md-6 col-6 text-center'>
                                            <div className='image-holder'>
                                                <img src={imgwash} className='organic-img' />
                                            </div>
                                            <p>Pre-Washed Pre-Shrunk</p>
                                        </div>
                                    </div>

                                </div >
                                {/*-- Modal --*/}
                                {/* <div className="modal fade" id="findchart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title text-center" id="exampleModalLabel"><img src={wordimg} className='word-img' />Fit Advisor</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className='text-holder'>
                                                    <h5>Enter your <span>details</span> below<br />to begin a size recommendation</h5>
                                                    <form class="row g-3 mt-3">

                                                        <div class="col-8">
                                                            <label for="inputAddress" class="form-label">Height</label>
                                                            <div className='d-flex'>
                                                                <input type="text" class="form-control me-2" id="inputAddress" placeholder="1234 Main St" />
                                                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-2'>
                                                            <div className="toggle-switch">
                                                                <div class="form-check form-switch mt-5">

                                                                    <input class="form-check-input switch" type="checkbox" role="switch" id="flexSwitchCheckChecked" />

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-8">
                                                            <label for="inputAddress" class="form-label">Weight</label>
                                                            <input type="text" class="form-control" id="inputAddress" placeholder="lps" />
                                                        </div>
                                                        <div className='col-md-2'>
                                                            <div className="toggle-switch">
                                                                <div class="form-check form-switch mt-5">
                                                                    <input class="form-check-input switch" type="checkbox" role="switch" id="flexSwitchCheckChecked" />

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-10">
                                                            <label for="inputAddress" class="form-label"> Age</label>
                                                            <input type="text" class="form-control" id="inputAddress" placeholder="year" />
                                                        </div>
                                                        <div className='button-post text-center'>
                                                            <button className='btn btn-Countinue'>Countinue</button>
                                                        </div>
                                                    </form>
                                                    <div class="mt-3">
                                                        <p className='privacy'>Privacy Policy</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div> */}
                            </section >
                        </div>
                        <div className='col-lg-7'>
                            <Mesurment />
                            <BuyIt />
                        </div>
                        <div className='col-lg-5 select-shirt'>
                            <div className='row mt-3 mb-4'>
                                <div className='col-md-12'>
                                    <div class="input-group check-pro-input  mb-3">
                                        <input type="text" class="form-control" placeholder="Enter Pincode" aria-label="" aria-describedby="button-addon2" />
                                        <button class="btn btn-success" type="button" id="button-addon2">Check</button>
                                    </div>
                                </div>
                                <div className='more-offer'>
                                    <h5>More Offers-</h5>
                                </div>
                                <div className='col-md-6'>
                                    <div className='heading-off'>
                                        <h6>WELCOME 10-10% OFF ON FIRST PURCHASE</h6>
                                        <p>WELCOME10, Save ₹82.90 extra</p>
                                        <p>Login & Apply code - WELCOME 10 at checkout. Get 10% OFF on your 1st purchase. Offer valid only on 1st purchase</p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='heading-off'>
                                        <h6>WELCOME 10-10% OFF ON FIRST PURCHASE</h6>
                                        <p>WELCOME10, Save ₹82.90 extra</p>
                                        <p>Login & Apply code - WELCOME 10 at checkout. Get 10% OFF on your 1st purchase. Offer valid only on 1st purchase</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                OVERVIEW
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <ul>
                                                    <li>100% pre-shrunk organic cotton, GOTS certified</li>
                                                    <li>Made in the USA, Los Angeles</li>
                                                    <li>Luxury finishing, soft and breathable on skin</li>
                                                    <li>Color retention up to 100 washes</li>
                                                    <li>Shape retention engineering</li>
                                                </ul>
                                                <p>Dare to dress simply. From morning walks to nights on the town, this high quality, classic V-neck will be your go-to garment.
                                                    Slip into soft, 100% organic cotton that's sustainably sourced and know that you've made a choice that's good for your wardrobe and the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                SUSTAINABILITY

                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <h6>Our Organic Cotton has the GOTS:</h6>
                                                <p>GOTS stands for Global Organic Textile Standard. It is a third-party certification program guaranteeing that fabric and clothing are environmentally friendly, organic, and fair trade for every step of the process. This means that from harvesting cotton to creating the cloth, every single step was done with great care for the earth, the workforce, and the product itself.</p>
                                                <h6>Manufacturing:</h6>
                                                <p>We make all our handcrafted garments locally in California and our workers receive a fair wage for their labor. Our commitment to our workers means no corners are cut in creating high quality luxury garments.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                FIT & SIZE CHART

                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <ul>
                                                    <li>Designed for women to mimic the proportions of a traditional men's T-shirt</li>
                                                    <li>Tailored with dropped shoulders, slightly lengthened sleeves and a clean neckline that conveys a laid-back tomboy look and attitude</li>
                                                    <li>Choose a larger size for a loose, casual fit or a small size for a stylish fitted look</li>
                                                    <li>When between sizes, order a size up</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="hreadingfour">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                SHIPPING & RETURNS
                                            </button>
                                        </h2>
                                        <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="hreadingfour" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <ul>
                                                    <li>All orders are shipped from Los Angeles, California</li>
                                                    <li>Free returns and exchanges on all orders</li>
                                                    <li>International shipments subject to additional fees</li>
                                                    <li>We accept T-shirts returns within 100 days of your order receipt.</li>
                                                </ul>
                                                <div className='more-detais'>
                                                    <h5>More details on shipping</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*product modal start*/}
                <div className='product-modal'>
                    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <img src={tshirtimg} className=" banner1-img me-2" alt="..." />
                                    <img src={tshirtimg1} className="  banner1-img me-2" alt="..." />
                                    <img src={tshirtimg2} className="  banner1-img me-2" alt="..." />
                                    <img src={tshirtimg3} className="  banner1-img me-2" alt="..." />
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <Swiper
                                        // install Swiper modules
                                        modules={[Pagination, Navigation, Autoplay,]}
                                        spaceBetween={10}
                                        slidesPerView={1}
                                        navigation={true}
                                        // pagination={{ clickable: true }}

                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={() => console.log('slide change')}
                                    // autoplay={{
                                    //     delay: 2500,
                                    //     disableOnInteraction: false,
                                    //     loop: true,
                                    //     // pauseOnMouseEnter: true,
                                    // }}
                                    >
                                        <SwiperSlide>
                                            <div class=" banner-slider ">
                                                <ReactImageMagnify {...{
                                                    smallImage: {
                                                        alt: '...',
                                                        isFluidWidth: true,
                                                        src: tshirtimg
                                                    },
                                                    largeImage: {
                                                        src: tshirtimg,
                                                        width: 1200,
                                                        height: 1800
                                                    }
                                                }} />


                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class=" banner-slider ">
                                                {/* <img src={tshirtimg1} class=" w-100 " alt="..." /> */}
                                                {/* <ReactImageMagnify {...{
                                                    smallImage: {
                                                        alt: '...',
                                                        isFluidWidth: true,
                                                        src: tshirtimg1
                                                    },
                                                    largeImage: {
                                                        src: tshirtimg1,
                                                        width: 1200,
                                                        height: 1800
                                                    }
                                                }} /> */}



                                            </div>

                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class=" banner-slider ">
                                                <img src={tshirtimg2} class=" w-100 " alt="..." />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div class=" banner-slider ">
                                                <img src={tshirtimg3} class=" w-100 " alt="..." />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Notify madal start */}
                <div className='notify-modal'>
                    <div class="modal fade" id="notifyModal" tabindex="-1" aria-labelledby="notifyModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="notifyModalLabel">Please select your size</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active me-2" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">XXL</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link me-2" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">XXS</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">L</button>
                                        </li>
                                    </ul>
                                    <div className='mt-5'>
                                        <p>Get notified once product is back in stock.</p>
                                    </div>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control me-3" placeholder="Enter your email ID" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button class="btn submit-button" type="submit" id="button-addon2">Submit</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </>
    )
}

export default ProductDetails;