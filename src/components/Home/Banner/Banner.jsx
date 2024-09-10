import React, { useState, useEffect } from "react";

import "./Banner.scss";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { loadStripe } from "@stripe/stripe-js";
import "swiper/css/autoplay";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import Slide1 from "../../../assets/home-banner/Fashion1.jpg";
import Slide2 from "../../../assets/home-banner/Fashion3.jpg";
import Slide3 from "../../../assets/home-banner/Fashion4.jpg";
import BannerLeft from "../../../assets/banner-image-left.png";
import BannerRight from "../../../assets/banner-image-right.png";
import BannerRight1 from "../../../assets/home-banner/pexels-rfera-432059-removebg-preview(1).jpg";
import BannerRight2 from "../../../assets/home-banner/Banner-2.jpg";
import BannerRight3 from "../../../assets/home-banner/Banner-3.jpg";
import { getBannerApi } from "../../api/Apis";
import axios from "axios";

const Banner = (slide) => {
  const navigate = useNavigate();
  const imageUrl = "http://hippikart.profcymadev.in:4000/";
  // const imageUrl = process.env.PUBLIC_URL;
  // const imageUrl = loadStripe(process.env.PUBLIC_URL);
  // console.log(imageUrl);
  const [data, setData] = useState();
  const getData = async () => {
    await getBannerApi()
      .then((res) => {
        // console.log(res.data.data.blog);
        setData(res.data.data);
        // console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
      autoplay={{ delay: 4000 }}
    >
      {/* {data?.map((data) => (
        <SwiperSlide
          className=""
          key={data.id}
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/category/2`, { state: { category: "MEN" } })
          }
        >
          <div className="hero-banner2 bann-hide-mob">
            <div className="row">
              <div className="col-4">
                <img
                  alt=""
                  className="banner-img"
                  src={imageUrl + data.banner}
                />
              </div>
              <div className="col-4">
                <div className="card bg-transparent">
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <p className="banner-title">Set Your Style</p>
                    <p className="banner-head">{data.name}</p>
                    <p className="banner-desc">
                      This we will dynamically add from Category page, if you
                      need content you can refer Pantaloon kids section
                    </p>
                    <div className="d-flex justify-content-evenly w-100 align-items-center">
                      <button className="btn btn-outline-warning btn-sm">
                        <span>Shop Women</span>
                      </button>
                      <button className="btn btn-outline-warning btn-sm">
                        <span>Shop Men</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <img
                  alt=""
                  className="banner-img"
                  src={imageUrl + data.banner}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))} */}

      {/* <img
            className="banner-img bann-show-mob"
            src={
              "https://g3fashion.cdn.imgeng.in/upload/admin/slider/1683177844_women-inter-(2).jpg"
            }
            alt="slide2"
          />
          <img className="banner-img" src={Slide1} /> */}

      {/* {data?.map((data) => (
        <SwiperSlide
          key={data.id}
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/category/2`, { state: { category: "MEN" } })
          }
        >
          <div className="hero-banner">
            <div className="content">
              <div className="text-content">
                <h1>{data.name}</h1>
                <p>Get exclusive shopping with affordable products</p>
                <div className="ctas">
                  <div className="banner-cta">Read More</div>
                  <div className="banner-cta v2">Shop Now</div>
                </div>
              </div>
              <img className="banner-img" src={imageUrl + data.banner} />
            </div>
          </div>
        </SwiperSlide>
      ))} */}

      {/* {data?.map((data) => ( */}
      
      <SwiperSlide>
      <Link to="/mens">
        <img className="banner-img" src={BannerRight1} /> </Link>       
      </SwiperSlide>

      <SwiperSlide>
      <Link to="/category">
        <img className="banner-img" src={BannerRight2} /></Link>        
      </SwiperSlide>

      <SwiperSlide>
      <Link to="/mens">
        <img className="banner-img" src={BannerRight3} /> </Link>

      </SwiperSlide>

      {/* <SwiperSlide>
        <div className="hero-banner">
          <div className="content">
            <div className="text-content">
              <h1>Fashion</h1>
              <p>Get exclusive shopping with affordable products</p>
              <div className="ctas">
                <div className="banner-cta">Read More</div>
                <div className="banner-cta v2">Shop Now</div>
              </div>
            </div>

            <img className="banner-img" src={BannerRight1} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-banner">
          <div className="content">
            <div className="text-content">
              <h1>Fashion</h1>
              <p>Get exclusive shopping with affordable products</p>
              <div className="ctas">
                <div className="banner-cta">Read More</div>
                <div className="banner-cta v2">Shop Now</div>
              </div>
            </div>

            <img className="banner-img" src={BannerRight2} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero-banner">
          <div className="content">
            <div className="text-content">
              <h1>Fashion</h1>
              <p>Get exclusive shopping with affordable products</p>
              <div className="ctas">
                <div className="banner-cta">Read More</div>
                <div className="banner-cta v2">Shop Now</div>
              </div>
            </div>

            <img className="banner-img" src={BannerRight3} />
          </div>
        </div>
      </SwiperSlide> */}

      {/* <SwiperSlide>
          <div className="hero-banner">
            <div className="content">
              <div className="text-content">
               
                <h1>Fashion</h1>
                <p>Get exclusive shopping with affordable products</p>
                <div className="ctas">
                  <div className="banner-cta">Read More</div>
                  <div className="banner-cta v2">Shop Now</div>
                </div>
              </div>
              
              <img className="banner-img" src={Slide2} />
            </div>
          </div>
        </SwiperSlide> */}

      {/* <SwiperSlide >
          <div className="hero-banner">
            <div className="content">
              <div className="text-content">
                
                <h1>Fashion</h1>
                <p>Get exclusive shopping with affordable products</p>
                <div className="ctas">
                  <div className="banner-cta">Read More</div>
                  <div className="banner-cta v2">Shop Now</div>
                </div>
              </div>
             
              <img className="banner-img" src={Slide3} />
            </div>
          </div>
        </SwiperSlide> */}

      {/* ))} */}

      {/* <img
            className="banner-img"
            src={
              "https://g3fashion.cdn.imgeng.in/upload/admin/slider/1683177844_women-inter-(2).jpg"
            }
            alt="slide2"
          /> */}

      {/* {data?.map((data) => (
        <SwiperSlide
          key={data.id}
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/category/2`, { state: { category: "MEN" } })
          }
        >
          <div className="hero-banner">
            <div className="content">
              <div className="text-content">
                <h1>SALES</h1>
                <h2>{data.name}</h2>
                <p>Get exclusive shopping with affordable products</p>
                <div className="ctas">
                  <div className="banner-cta">Read More</div>
                  <div className="banner-cta v2">Shop Now</div>
                </div>
              </div>
              <img className="banner-img" src={imageUrl + data.banner} />
            </div>
          </div>
        </SwiperSlide>
      ))} */}
      {/* <img className="banner-img" src={Slide2} alt="slide3" /> */}
    </Swiper>
  );
};

export default Banner;
