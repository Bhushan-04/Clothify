import { useEffect, useState } from "react";

import Product from "../Products/Product/Product";
import { useLocation } from "react-router-dom";
import "./Category.scss";
import "./SingleCategoy.scss";
import BannerImg from "../../assets/product1.jpg";
import BannerImg2 from "../../assets/product2.webp";
import BannerImg3 from "../../assets/product3.webp";
import product3 from "../../assets/product3.webp";
import product4 from "../../assets/product4.jpg";
import green from "../../assets/green.webp";
import green1 from "../../assets/green1.webp";
import white from "../../assets/white.webp";
import white1 from "../../assets/white1.webp";
import white3 from "../../assets/white.webp";
import white4 from "../../assets/white4.webp";
import white6 from "../../assets/white6.webp";
import white7 from "../../assets/white7.webp";
import skirt from "../../assets/skirt.webp";


const Listview = () => {
  function changeImage(e) {
    e.target.style.display = "opacity:none";
  }
  return (
    <>
      

      <section className="layout">
        <div className="container-fluid">
          <div className="col-md-12">
            <div className="row">      
              <div className=" col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5 ">
                <div className="green-img">
                  <img
                    src={green1}
                    alt="..."
                    className="img1"
                    onMouseEnter={changeImage}
                  />
                  <img
                    src={green}
                    alt="..."
                    className="img2"
                    onMouseEnter={changeImage}
                  />
                  <div className="grid-main2">
                    <h2 class="ProductItem__Title Heading text-center mt-3">
                      <a href="/collections/womens-short-sleeve/products/unisex-french-terry-box-tee">
                        Unisex French Terry Box Tee
                      </a>
                    </h2>
                    <div class="ProductItem__PriceList  Heading prize_tag_minHeight text-center">
                      <span class="ProductItem__Price Price Text--subdued">
                        Rs. 10,000.00
                      </span>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div class="form-check me-3">
                        <input
                          class="form-check-input age1"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>

                      <div class="form-check me-3">
                        <input
                          class="form-check-input age2"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                      </div>

                      <div class="form-check me-3">
                        <input
                          class="form-check-input age3"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                      </div>
                      <div class="form-check me-3">
                        <input
                          class="form-check-input age4"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6  col-lg-6  col-xl-6  col-xxl-6 mt-5">
                <div className="green-img">
                  <img src={skirt} alt="..." className="img1" />
                  <img src={green} alt="..." className="img2" />
                  <div className="grid-main2">
                    <h2 class="ProductItem__Title Heading text-center mt-3">
                      <a href="/collections/womens-short-sleeve/products/unisex-french-terry-box-tee">
                        SHORT BOX TEE
                      </a>
                    </h2>
                    <div class="ProductItem__PriceList  Heading prize_tag_minHeight text-center">
                      <span class="ProductItem__Price Price Text--subdued">
                        RS. 4,900.00
                      </span>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div class="form-check me-3">
                        <input
                          class="form-check-input age1"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>

                      <div class="form-check me-3">
                        <input
                          class="form-check-input age2"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                      </div>

                      <div class="form-check me-3">
                        <input
                          class="form-check-input age3"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                      </div>
                      <div class="form-check me-3">
                        <input
                          class="form-check-input age4"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6  col-lg-6 col-xl-6   col-xxl-6 mt-5">
                <div className="green-img">
                  <img src={white3} alt="..." className="img1" />
                  <img src={skirt} alt="..." className="img2" />
                  <div className="grid-main3">
                    <h2 class="ProductItem__Title Heading text-center mt-3">
                      <a href="/collections/womens-short-sleeve/products/unisex-french-terry-box-tee">
                        WOMENS DEEP V-NECK T-SHIRT
                      </a>
                    </h2>
                    <div class="ProductItem__PriceList  Heading prize_tag_minHeight text-center">
                      <span class="ProductItem__Price Price Text--subdued">
                        RS. 4,900.00
                      </span>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div class="form-check me-3">
                        <input
                          class="form-check-input age1"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>

                      <div class="form-check me-3">
                        <input
                          class="form-check-input age2"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                      </div>

                      <div class="form-check me-3">
                        <input
                          class="form-check-input age3"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                      </div>
                      <div class="form-check me-3">
                        <input
                          class="form-check-input age4"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6  col-lg-6  col-xl-6  col-xxl-6 mt-5">
                <div className="green-img">
                  <img
                    src={white4}
                    alt="..."
                    className="img1"
                    onMouseEnter={changeImage}
                  />
                  <img
                    src={white6}
                    alt="..."
                    className="img2"
                    onMouseEnter={changeImage}
                  />
                  <div className="grid-main2">
                    <h2 class="ProductItem__Title Heading text-center mt-3">
                      <a href="/collections/womens-short-sleeve/products/unisex-french-terry-box-tee">
                        Unisex French Terry Box Tee
                      </a>
                    </h2>
                    <div class="ProductItem__PriceList  Heading prize_tag_minHeight text-center">
                      <span class="ProductItem__Price Price Text--subdued">
                        Rs. 10,000.00
                      </span>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div class="form-check me-3">
                        <input
                          class="form-check-input age1"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>

                      <div class="form-check me-3">
                        <input
                          class="form-check-input age2"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                      </div>

                      <div class="form-check me-3">
                        <input
                          class="form-check-input age3"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                      </div>
                      <div class="form-check me-3">
                        <input
                          class="form-check-input age4"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6  col-lg-6   col-xl-6  col-xxl-6 mt-5">
                <div className="green-img">
                  <img src={white1} alt="..." className="img1" />
                  <img src={white7} alt="..." className="img2" />
                  <div className="grid-main2">
                    <h2 class="ProductItem__Title Heading text-center mt-3">
                      <a href="/collections/womens-short-sleeve/products/unisex-french-terry-box-tee">
                        SHORT BOX TEE
                      </a>
                    </h2>
                    <div class="ProductItem__PriceList  Heading prize_tag_minHeight text-center">
                      <span class="ProductItem__Price Price Text--subdued">
                        RS. 4,900.00
                      </span>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div class="form-check me-3">
                        <input
                          class="form-check-input age1"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>

                      <div class="form-check me-3">
                        <input
                          class="form-check-input age2"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                      </div>

                      <div class="form-check me-3">
                        <input
                          class="form-check-input age3"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                      </div>
                      <div class="form-check me-3">
                        <input
                          class="form-check-input age4"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Listview;
