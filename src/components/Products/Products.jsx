import "./Products.scss";
import Product from "./Product/Product";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";


const Products = ({ products = [], innerPage, headingText, layout, Pproducts = false }) => {
    const [productsData,setProductsData] = useState([]);
    const [selected,setselected] = useState('women');
    const navigate = useNavigate();
    const [choiseGender,setGender] = useState('1')
    useEffect(()=> {
        if(Pproducts) {
            setProductsData(products['women']);
        }
        else{
            setProductsData(products);
        }
    },[products]);
    return (
        <>
            <div className="products-container">
                {!innerPage && <div className="MVHeading">{headingText}</div>}
                <div className={`products ${innerPage ? "innerPage" : ""}`}>
                    {Pproducts && (
                        <header class="SectionHeader SectionHeader--center">
                        <div class="Container">
                            <span class="Heading">DISCOVER COLORS OF OUR SHORT SLEEVE COLLECTIONS</span>
                        <div class="TabList" role="tablist">
                            <button class="Heading" style={selected=='women' ? {borderBottomWidth: '1px'} : {borderBottomWidth : 0}} aria-selected="true" role="tab" onClick={()=>{setProductsData(products['women']);setselected('women'); }}>FOR WOMEN</button>
                            
                            <button class="Heading" style={selected=='men' ? {borderBottomWidth: '1px'} : {borderBottomWidth : 0}} aria-selected="false" role="tab" onClick={()=>{setProductsData(products['men']);setselected('men');setGender('2');}}>FOR MEN</button>
                        </div>
                        </div>
                    </header>
                    )}
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper2"
                        breakpoints={{
                            0: {slidesPerView: 1},
                            480: {slidesPerView: 1},
                            640: { slidesPerView: 2},
                            1024: { slidesPerView: 4},
                        }}
                        style={{paddingBottom: '20px'}}
                    >
                        {productsData.map((element,index) => {
                            return (
                                <SwiperSlide key={index}><Product type={choiseGender} {...element} /></SwiperSlide>
                        )})}
                    </Swiper>
                    {Pproducts && (
                        // <div className="justify-content-center">
                        // <button className="btn btn-outline-success" onClick={()=> navigate("/category/" + 1, { state: { category: selected, data : productsData } })}>Shop Now</button>
                        // </div>

                        <div className="justify-content-center">
                            <button className="btn btn-outline-success" onClick={()=> navigate("/mens", { state: { category: selected, data : productsData } })}>Shop Now</button>
                        </div>
                    )}
                </div>
            </div>
        </>

    );
};

export default Products;

