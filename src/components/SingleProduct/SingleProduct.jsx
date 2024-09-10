import React, { useState } from 'react';
// import { Context } from "../../utils/context";
// import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
import Accordion from 'react-bootstrap/Accordion';
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
    FaHeart,
} from "react-icons/fa";
import "./SingleProduct.scss";
// import BannerImg3 from "../../assets/product3.webp";
import ProductModal from "./ProductModal/ProductModal";
import { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai'

const SingleProduct = () => {
    const [imagesData, setimagesData] = useState([]);
    const [show, setShow] = useState(false);
    const [ProductColor, setProductColor] = useState();
    const [ProductSize, setProductSize] = useState();
    const [imageIndex, setimageIndex] = useState(0);
    const [product, setProduct] = useState({
        name: 'MOONVELLY',
        desc: 'Men Solid Polo Neck White T-Shirt',
        price: '600',
        ratting: 5,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        color: ['red', 'white', 'blue', 'green', 'yellow'],
        available_colors: {
            'red': [require('../../assets/products/tshirt-red1.jpeg'), require('../../assets/products/tshirt-red2.jpeg')],
            'white': [require('../../assets/products/tshirt-white1.jpeg'), require('../../assets/products/tshirt-white2.jpeg'), require('../../assets/products/tshirt-white3.jpeg')],
            'blue': [require('../../assets/products/tshirt-blue1.jpeg'), require('../../assets/products/tshirt-blue2.jpeg'), require('../../assets/products/tshirt-blue3.jpeg')],
            'green': [require('../../assets/products/tshirt-green1.jpeg'), require('../../assets/products/tshirt-green2.jpeg')],
            'yellow': [require('../../assets/products/tshirt-yellow1.jpeg'), require('../../assets/products/tshirt-yellow2.jpeg'), require('../../assets/products/tshirt-yellow3.jpeg')],
        }
    })
    const getImagesFunc = (color) => {
        setimagesData(product.available_colors[color]);
        setProductColor(product.available_colors[color]);
    }
    // const [quantity, setQuantity] = useState(1);
    // const { id } = useParams();
    // const { handleAddToCart } = useContext(Context);
    // const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

    // const decrement = () => {
    //     setQuantity((prevState) => {
    //         if (prevState === 1) return 1;
    //         return prevState - 1;
    //     });
    // };
    // const increment = () => {
    //     setQuantity((prevState) => prevState + 1);
    // };

    // if (!data) return;
    // const product = data?.data?.[0]?.attributes;
    const showimageModal = (imageIndex) => {
        setShow(!show)
        setimageIndex(imageIndex)
    }
    useEffect(() => {
        getImagesFunc(product.color[0]);
        setProductSize(product.sizes[0]);
        setProductColor(product.color[0]);
    }, [product])
    return (
        <>

            <div className="single-product-main-content">
                        <div className="layout px-0 pt-2 layout 0 sm:pt-10 sm:px-6 ipad-top-padding-6">
                            <ol role="list" style={{paddingLeft: '0'}} className="items-center hidden space-x-0 sm:flex sm:space-x-0 ipad-br-font">
                                <li>
                                    <div className="flex items-center text-xs sm:text-sm ipad-text-sm">
                                        <a href="/men/innerwear" className="font-normal hover:text-gray-900 text-gray-400">Innerwear</a>
                                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" className="flex-shrink-0 w-4 h-4 ml-0 text-gray-300 sm:ml-0">
                                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center text-xs sm:text-sm ipad-text-sm">
                                        <a href="/men/vests" className="font-normal hover:text-gray-900 text-gray-400">Vests</a>
                                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" className="flex-shrink-0 w-4 h-4 ml-0 text-gray-300 sm:ml-0">
                                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center text-xs sm:text-sm ipad-text-sm">
                                        <a href="/men/vest-packs" className="font-normal hover:text-gray-900 text-gray-400">Bamboo Vest Packs</a>
                                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" className="flex-shrink-0 w-4 h-4 ml-0 text-gray-300 sm:ml-0">
                                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center text-xs sm:text-sm ipad-text-sm">
                                        <p className="font-normal hover:text-gray-900 text-black mb-0 font-semibold">MOONVILIE, Bright White</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                <div className="layout">
                    <div className="single-product-page row">
                        <div className="col-lg-7">
                            <div className="row">
                                {imagesData.map((element, index) => (
                                    <div className="left col-lg-6 m-1" style={{ backgroundImage: "url(" + element + ")", backgroundPosition: 'center', backgroundSize: 'cover' }} onClick={() => showimageModal(index)}></div>
                                ))}
                            </div>
                        </div>
                        <div className="right col-lg-5">
                            <span className="name">{product.name}</span>
                            <span className="desc">{product.desc}</span>
                            <div className="rattingContainer">
                                <div className="overallRating"> 4.1 <AiFillStar style={{ marginBottom: 3, color: 'rgb(5, 127, 113)' }} /><span className=""> | 626 Ratings</span></div>
                            </div>
                            <span className="price">&#8377;{product.price} MRP <span className='priceoff'>( Rs. 1 OFF)</span></span>
                            <span className="includingTaxs mb-3">Including All Taxes</span>
                            <span className="sizing">SELECT SIZE <span className='sizeSpan'>SIZE CHART {`>`}</span></span>

                            <div className="p-2 d-flex flex-wrap w-100 justify-content-start colors mb-0">
                                <span className="desc w-100">CHOOSE COLOR</span>
                                {product.color.map((element, index) => (
                                    <button className="color-btn btn btn-transparent" title='magenta' style={ProductColor === element ? { borderColor: '#088b4cd5' } : { borderColor: '#e2e2e2' }} key={index} onClick={() => getImagesFunc(element)}><span className="colors-cont" style={{ background: `${element}` }}></span></button>
                                ))}
                                <span className="desc w-100 mt-2">SELECT SIZE</span>
                                <div className="col-lg-12 d-flex align-items-center justify-content-start">
                                    {product.sizes.map((element, index) => (
                                        <span className="SizeBox" style={ProductSize === element ? { borderColor: '#088b4cd5' } : { borderColor: '#e2e2e2' }} key={index} onClick={() => setProductSize(element)}>{element}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="footer_logos_grid  mobileHide Grid--center paddingTop20px">
                                <div className="Grid__Cell 1/2--phone 1/2--tablet 1/4--lap-and-up paddingZero centerAlign">
                                    <img data-src="https://cdn.shopify.com/s/files/1/0038/1111/5123/files/Made_in_USA.png?v=1660672087" className="Image--fadeIn product_icons Image--lazyLoaded" loading="lazy" alt="Made In USA" width="180x180" height="180x180" src="https://cdn.shopify.com/s/files/1/0038/1111/5123/files/Made_in_USA.png?v=1660672087" />
                                    <p className="product_text">Made in U.S.A.</p>
                                </div>

                                <div className="Grid__Cell 1/2--phone 1/2--tablet 1/4--lap-and-up paddingZero centerAlign">
                                    <img data-src="https://cdn.shopify.com/s/files/1/0038/1111/5123/files/Organic_cotton.png?v=1660672087" className="Image--fadeIn product_icons Image--lazyLoaded" loading="lazy" alt="Organic Cotton" width="180x480" height="180x480" src="https://cdn.shopify.com/s/files/1/0038/1111/5123/files/Organic_cotton.png?v=1660672087" />
                                    <p className="product_text">Organic Cotton</p>
                                </div>

                                <div className="Grid__Cell 1/2--phone 1/2--tablet 1/4--lap-and-up paddingZero centerAlign">
                                    <img data-src="https://cdn.shopify.com/s/files/1/0038/1111/5123/files/1_Charity.png?v=1660672087" className="Image--fadeIn product_icons Image--lazyLoaded" loading="lazy" alt="1% to charity" width="180x180" height="180x180" src="https://cdn.shopify.com/s/files/1/0038/1111/5123/files/1_Charity.png?v=1660672087" />
                                    <p className="product_text" style={{ padding: '0px 4px' }}>1% to Charity</p>
                                </div>

                                <div className="Grid__Cell 1/2--phone 1/2--tablet 1/4--lap-and-up paddingZero centerAlign">
                                    <img data-src="https://cdn.shopify.com/s/files/1/0038/1111/5123/files/Pre_washed.png?v=1660672087" loading="lazy" alt="Pre Washed Pre Shrunk" className="Image--fadeIn product_icons Image--lazyLoaded" width="180x180" height="180x180" src="https://cdn.shopify.com/s/files/1/0038/1111/5123/files/Pre_washed.png?v=1660672087" />
                                    <p className="product_text">Pre-Washed Pre-Shrunk</p>
                                </div>
                            </div>
                            <div className="cart-buttons col-12 mt-1">
                                {/* <div className="quantity-buttons">
                                <span 
                                    // onClick={decrement}
                                    >-</span>
                                <span>12</span>
                                <span 
                                    // onClick={increment}
                                    >+</span>
                            </div> */}

                                <button
                                    className="add-to-cart-button"
                                // onClick={() => {
                                //     handleAddToCart(data?.data?.[0], quantity);
                                //     setQuantity(1);
                                // }}
                                >
                                    <FaCartPlus size={20} />
                                    <span>ADD TO CART</span>
                                </button>
                                <button className="add-to-wishlist-button btn"
                                // onClick={() => {
                                //     handleAddToCart(data?.data?.[0], quantity);
                                //     setQuantity(1);
                                // }}
                                >
                                    <FaHeart size={20} />
                                    <span>WISHLIST</span>
                                </button>
                            </div>
                            <span className="divider" />
                            <div className="ability">
                                <div className="pincodeDelivery mt-1">
                                    <h6>
                                        Delivery Options &nbsp;&nbsp;
                                        <svg className='truck-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                            <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" />
                                        </svg>
                                    </h6>
                                    <p className="pinCodeSuccess mt-1">Please enter PIN code to check delivery time &amp; Pay on Delivery Availability</p>
                                    <div className="d-flex">
                                        <form autoComplete="off">
                                            <input type="text" placeholder="Enter pincode" className="pincode-code" value="" name="pincode" />
                                            <input type="submit" className="pincode-check" value="Check" />
                                        </form>
                                    </div>
                                    <p className="pinCodeFails tetx-sm text-danger">Unfortunately we do not ship to your pincode</p>
                                </div>
                            </div>

                            <div className="offer-container">
                                <h6>MORE OFFERS </h6>
                                <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                                    <div className="swiper-button-prev swiper-button-disabled swiper-button-lock"></div>
                                    <div className="swiper-button-next swiper-button-disabled swiper-button-lock"></div>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide h-auto px-0 z-1 swiper-slide-active" style={{ width: '138.903px', marginRight: '4px' }}>
                                            <div className="inline-flex flex-col w-full h-full text-left cursor-pointer">
                                                <div className="relative h-full group">
                                                    <div className="h-full p-2 cursor-pointer promo-bg sm:p-3">
                                                        <h3 className="text-xs font-bold text-left text-black uppercase break-word-text">WELCOME10 - 10% OFF on first purchase</h3>
                                                        <span><p className="mt-1 font-normal text-left text-brown-light text-12 break-word-text">WELCOME10, Save ₹82.90 extra</p>
                                                        </span><p className="mt-1 font-normal text-left text-brown-light text-12 break-word-text">Login &amp; Apply code - WELCOME10 at checkout. Get 10% OFF on your 1st purchase. Offer valid only on 1st purchase</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide h-auto px-0 z-1 swiper-slide-active" style={{ width: '138.903px', marginRight: '4px' }}>
                                            <div className="inline-flex flex-col w-full h-full text-left cursor-pointer">
                                                <div className="relative h-full group">
                                                    <div className="h-full p-2 cursor-pointer promo-bg sm:p-3">
                                                        <h3 className="text-xs font-bold text-left text-black uppercase break-word-text">WELCOME10 - 10% OFF on first purchase</h3>
                                                        <span><p className="mt-1 font-normal text-left text-brown-light text-12 break-word-text">WELCOME10, Save ₹82.90 extra</p>
                                                        </span><p className="mt-1 font-normal text-left text-brown-light text-12 break-word-text">Login &amp; Apply code - WELCOME10 at checkout. Get 10% OFF on your 1st purchase. Offer valid only on 1st purchase</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <span className="divider" /> */}
                            <Accordion defaultActiveKey="0" className='mt-3'>
                                <Accordion.Item eventKey="0" className="product-details mt-4">
                                    <Accordion.Header><h6>PRODUCT DETAILS </h6></Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Crop regular top</li><li>Solid&nbsp;</li>
                                            <li>Round neck, sleeveless, no sleeves&nbsp;</li>
                                            <li>Knitted cotton</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className="sizeDesc">
                                    <Accordion.Header><h6>Size &amp; Fit</h6></Accordion.Header>
                                    <Accordion.Body>
                                        <p>The model (height 5'8) is wearing a size S</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="sizeDesc">
                                    <Accordion.Header><h6>Size &amp; Fit</h6></Accordion.Header>
                                    <Accordion.Body>
                                        <p>The model (height 5'8) is wearing a size S</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className="MaterialCare">
                                    <Accordion.Header><h6>Material &amp; Care</h6></Accordion.Header>
                                    <Accordion.Body>
                                        <p>97% Cotton 3% Spandex<br />Machine Wash</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className="sizeFitDesc">
                                    <Accordion.Header><h6>Material &amp; Care</h6></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="SpecificationsBox">
                                            <div className="col-6 Boxes">
                                                <div className="BoxTitle">Sleeve Length</div>
                                                <div className="BoxValue">Sleeveless</div>
                                            </div>
                                            <div className="col-6 Boxes">
                                                <div className="BoxTitle">Neck</div>
                                                <div className="BoxValue">Round Neck</div>
                                            </div>
                                        </div>
                                        <div className="SpecificationsBox">
                                            <div className="col-6 Boxes">
                                                <div className="BoxTitle">Type</div>
                                                <div className="BoxValue">Regular</div>
                                            </div>
                                            <div className="Boxes">
                                                <div className="BoxTitle">Print or Pattern Type</div>
                                                <div className="BoxValue">Solid</div>
                                            </div>
                                        </div>
                                        <div className="SpecificationsBox">
                                            <div className="Boxes">
                                                <div className="BoxTitle">Sleeve Styling</div>
                                                <div className="BoxValue">No Sleeves</div>
                                            </div>
                                            <div className="Boxes">
                                                <div className="BoxTitle">Transparency</div>
                                                <div className="BoxValue">Opaque</div>
                                            </div>
                                        </div>
                                        <div className="SpecificationsBox">
                                            <div className="Boxes">
                                                <div className="BoxTitle">Length</div>
                                                <div className="BoxValue">Crop</div>
                                            </div>
                                            <div className="Boxes">
                                                <div className="BoxTitle">Fabric Type</div>
                                                <div className="BoxValue">Cotton</div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <div className="info-item mt-4">
                                <span className="text-bold">
                                    Category:{" "}
                                    <span>Printed T-shirt</span>
                                </span>
                                <span className="text-bold">
                                    Share:
                                    <span className="social-icons">
                                        <FaFacebookF size={16} />
                                        <FaTwitter size={16} />
                                        <FaInstagram size={16} />
                                        <FaLinkedinIn size={16} />
                                        <FaPinterest size={16} />
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <RelatedProducts
                        productId={'2'}
                        categoryId={'3'}
                    />
                </div>
                <ProductModal show={show} showimageModal={showimageModal} images={imagesData} index={imageIndex} />
            </div>
        </>
    );
};

export default SingleProduct;
