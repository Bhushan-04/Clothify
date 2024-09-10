import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Mens.css';
import { useLocation } from "react-router-dom";



import black1 from "../../../assets/black1.webp";
import black2 from "../../../assets/black2.webp";
import blue1 from "../../../assets/blue1.webp";
import blue2 from "../../../assets/blue2.webp";
import black3 from "../../../assets/black3.webp";
import black4 from "../../../assets/black4.webp";
// import blue1 from "../../../assets/blue1.webp";
import black5 from "../../../assets/black5.webp";
import black6 from "../../../assets/black6.webp";

import dummy1 from "../../../assets/dummy1.png";
import dummy2 from "../../../assets/dummy2.png";
import dummy3 from "../../../assets/dummy3.png";
import dummy4 from "../../../assets/dummy4.png";
import dummy5 from "../../../assets/dummy5.jpg";
// import Filter from "./Filter/Filter";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Mens = () => {
  function changeImage(e) {
    e.target.style.display = "opacity:none";
  }
  return (
    <>
      {/*
  <Filter /> */}
      <div className="da">
      <section className="search-bar-main-content">
        <div className="title-div">
          <p className="title-women">
            MEN ALL PRODUCTS | QUALITY & LONGEVITY
          </p>
        </div>

        <div className="container-fluid">
          <div className="main">
            <div className="row">
              <nav class="navbar">
                <div class="container-fluid p-0 ">
                  <div className="vertical1111">
                    <a class="navbar-brand m-0">
                      <div className="grid-vert-tab-sec">
                        <ul
                          class="nav nav-pills mb-3 catnav"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li
                            class="nav-item my-auto d-flex firstcol"
                            role="presentation"
                          >
                            <div
                              class="nav-link active ms-2 me-2"
                              id="pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-home"
                              type="button"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                            >
                              <FontAwesomeIcon icon="fa-solid fa-border-all" />
                            </div>

                            <div
                              class="nav-link ms-2 me-2"
                              id="pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-profile"
                              type="button"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                            >
                              <FontAwesomeIcon icon="fa-solid fa-table-cells" />
                            </div>
                          </li>

                          {/* <li class="nav-item ms-2" role="presentation">
                        
                      </li> */}

                          <li class="nav-item my-auto" role="presentation">
                            <form class="d-flex" role="search">
                              <ul class="nav justify-content-end ">
                                <li class="nav-item dropdown my-auto firstcol">
                                  <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <p className="mt-1">
                                      SORT
                                      <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                                    </p>
                                  </a>
                                  <ul class="dropdown-menu dropdown-menu-dark">
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        FEATURED
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        BEST SELLING
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        PRICE LOW TO HIGH
                                      </a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item" href="#">
                                        PRICE HIGH TO LOW
                                      </a>
                                    </li>
                                  </ul>
                                </li>

                                <li class="nav-item firstcol">
                                  <button
                                    class="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight"
                                  >
                                    <p className="filter">Filter</p>
                                  </button>
                                </li>
                              </ul>
                            </form>
                          </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                            tabindex="0"
                          >
                            <section className="layout">
                              <div className="container-fluid">
                                <div className="col-md-12">
                                  <div className="row">
                                    <div className=" col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-5 ">
                                    <Link to="/all-product-details-man">
                                      <div className="green-img">
                                        <img
                                          src={black1}
                                          alt="..."
                                          className="img1"
                                          onMouseEnter={changeImage}
                                        />
                                        <img
                                          src={black2}
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
                                          <div className="d-flex justify-content-center ">
                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input radio-btn-1"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  Black
                                                </p>
                                              </div>
                                            </div>

                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input  radio-btn-2"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  yellow
                                                </p>
                                              </div>
                                            </div>

                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input  radio-btn-3"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  purple
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      </Link>
                                    </div>
                                    <div className="col-md-6  col-lg-6  col-xl-6  col-xxl-6 mt-5">
                                    <Link to="/all-product-details-man">
                                      <div className="green-img">
                                        <img
                                          src={blue1}
                                          alt="..."
                                          className="img1"
                                        />
                                        <img
                                          src={blue2}
                                          alt="..."
                                          className="img2"
                                        />
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
                                          <div className="d-flex justify-content-center ">
                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input radio-btn-1"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  Black
                                                </p>
                                              </div>
                                            </div>

                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input  radio-btn-2"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  yellow
                                                </p>
                                              </div>
                                            </div>

                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input  radio-btn-3"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  purple
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      </Link>
                                    </div>
                                    <div className="col-md-6  col-lg-6 col-xl-6   col-xxl-6 mt-5">
                                    <Link to="/all-product-details-man">
                                      <div className="green-img">
                                        <img
                                          src={black3}
                                          alt="..."
                                          className="img1"
                                        />
                                        <img
                                          src={black4}
                                          alt="..."
                                          className="img2"
                                        />
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
                                          <div className="d-flex justify-content-center ">
                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input radio-btn-1"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  Black
                                                </p>
                                              </div>
                                            </div>

                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input  radio-btn-2"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  yellow
                                                </p>
                                              </div>
                                            </div>

                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input  radio-btn-3"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  purple
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      </Link>
                                    </div>
                                    <div className="col-md-6  col-lg-6  col-xl-6  col-xxl-6 mt-5">
                                      <Link to="/all-product-details-man">
                                      <div className="green-img">
                                        <img
                                          src={blue1}
                                          alt="..."
                                          className="img1"
                                          onMouseEnter={changeImage}
                                        />
                                        <img
                                          src={black1}
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
                                          <div className="d-flex justify-content-center ">
                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input radio-btn-1"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  Black
                                                </p>
                                              </div>
                                            </div>

                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input  radio-btn-2"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  yellow
                                                </p>
                                              </div>
                                            </div>

                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input  radio-btn-3"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  purple
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      </Link>
                                    </div>
                                    <div className="col-md-6  col-lg-6   col-xl-6  col-xxl-6 mt-5">
                                      <div className="green-img">
                                        <img
                                          src={black5}
                                          alt="..."
                                          className="img1"
                                        />
                                        <img
                                          src={black6}
                                          alt="..."
                                          className="img2"
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
                                          <div className="d-flex justify-content-center ">
                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input radio-btn-1"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  Black
                                                </p>
                                              </div>
                                            </div>

                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input  radio-btn-2"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  yellow
                                                </p>
                                              </div>
                                            </div>

                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input  radio-btn-3"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  purple
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* <div className="grid-main2">
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
                                          <div className="d-flex justify-content-center ">
                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input radio-btn-1"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  Black
                                                </p>
                                              </div>
                                            </div>

                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input  radio-btn-2"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  yellow
                                                </p>
                                              </div>
                                            </div>

                                            <div className="radio-section mt-3">
                                              <div class="form-check me-2">
                                                <input
                                                  class="form-check-input  radio-btn-3"
                                                  type="radio"
                                                  name="flexRadioDefault"
                                                  id=""
                                                />
                                                <p className="color-name">
                                                  purple
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>

                          <div
                            class="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                            tabindex="0"
                          >
                            <section className="grid p-5">
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="grid1 col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6  mt-3">
                                    <Link to="/all-product-details-man">
                                    <div className="green-img">
                                      <img
                                        src={black1}
                                        alt="..."
                                        className="img1"
                                        onMouseEnter={changeImage}
                                      />
                                      <img
                                        src={black2}
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
                                        <div className="d-flex justify-content-center ">
                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input radio-btn-1"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                Black
                                              </p>
                                            </div>
                                          </div>

                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input  radio-btn-2"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                yellow
                                              </p>
                                            </div>
                                          </div>

                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input  radio-btn-3"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                purple
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </Link>
                                  </div>

                                  <div className="grid2 col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6   mt-3">
                                  <Link to="/all-product-details-man">
                                    <div className="green-img">
                                      <img
                                        src={blue1}
                                        alt="..."
                                        className="img1"
                                      />
                                      <img
                                        src={blue2}
                                        alt="..."
                                        className="img2"
                                      />
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
                                        <div className="d-flex justify-content-center ">
                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input radio-btn-1"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                Black
                                              </p>
                                            </div>
                                          </div>

                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input  radio-btn-2"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                yellow
                                              </p>
                                            </div>
                                          </div>

                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input  radio-btn-3"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                purple
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </Link>
                                  </div>

                                  <div className="grid3 col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6   mt-3">
                                  <Link to="/all-product-details-man">
                                    <div className="green-img">
                                      <img
                                        src={black3}
                                        alt="..."
                                        className="img1"
                                      />
                                      <img
                                        src={black4}
                                        alt="..."
                                        className="img2"
                                      />
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
                                        <div className="d-flex justify-content-center ">
                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input radio-btn-1"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                Black
                                              </p>
                                            </div>
                                          </div>

                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input  radio-btn-2"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                yellow
                                              </p>
                                            </div>
                                          </div>

                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input  radio-btn-3"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                purple
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </Link>
                                  </div>

                                  <div className="grid1 col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6  mt-3">
                                  <Link to="/all-product-details-man">
                                    <div className="green-img">
                                      <img
                                        src={blue1}
                                        alt="..."
                                        className="img1"
                                        onMouseEnter={changeImage}
                                      />
                                      <img
                                        src={blue2}
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
                                        <div className="d-flex justify-content-center ">
                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input radio-btn-1"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                Black
                                              </p>
                                            </div>
                                          </div>

                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input  radio-btn-2"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                yellow
                                              </p>
                                            </div>
                                          </div>

                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input  radio-btn-3"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                purple
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </Link>
                                  </div>

                                  <div className="grid2 col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6   mt-3">
                                  <Link to="/all-product-details-man">
                                    <div className="green-img">
                                      <img
                                        src={black5}
                                        alt="..."
                                        className="img1"
                                      />
                                      <img
                                        src={black6}
                                        alt="..."
                                        className="img2"
                                      />
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
                                        <div className="d-flex justify-content-center ">
                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input radio-btn-1"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                Black
                                              </p>
                                            </div>
                                          </div>

                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input  radio-btn-2"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                yellow
                                              </p>
                                            </div>
                                          </div>

                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input  radio-btn-3"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                purple
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </Link>
                                  </div>

                                  <div className="grid3 col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6   mt-3">
                                    <Link to="/all-product-details-man">
                                    <div className="green-img">
                                      <img
                                        src={black1}
                                        alt="..."
                                        className="img1"
                                      />
                                      <img
                                        src={black2}
                                        alt="..."
                                        className="img2"
                                      />
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
                                        <div className="d-flex justify-content-center ">
                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input radio-btn-1"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                Black
                                              </p>
                                            </div>
                                          </div>

                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input  radio-btn-2"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                yellow
                                              </p>
                                            </div>
                                          </div>

                                          <div className="radio-section mt-3">
                                            <div class="form-check me-2">
                                              <input
                                                class="form-check-input  radio-btn-3"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id=""
                                              />
                                              <p className="color-name">
                                                purple
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="grid-off-start">
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">
                <p className="f mt-2"> Filters</p>
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <hr className="horizental-h"></hr>
            <div class="offcanvas-body">
              <p className="color">color</p>
              <div className="d-flex justify-content-center ">
                <div className="radio-section mt-3">
                  <div class="form-check me-3">
                    <input
                      class="form-check-input radio-btn-4"
                      type="radio"
                      name="flexRadioDefault"
                      id=""
                    />
                    <p className="color-name">Black</p>
                  </div>
                </div>

                <div className="radio-section mt-3">
                  <div class="form-check me-3">
                    <input
                      class="form-check-input  radio-btn-5"
                      type="radio"
                      name="flexRadioDefault"
                      id=""
                    />
                    <p className="color-name">yellow</p>
                  </div>
                </div>

                <div className="radio-section mt-3">
                  <div class="form-check me-3">
                    <input
                      class="form-check-input  radio-btn-6"
                      type="radio"
                      name="flexRadioDefault"
                      id=""
                    />
                    <p className="color-name">purple</p>
                  </div>
                </div>
                <div className="radio-section mt-3">
                  <div class="form-check me-3">
                    <input
                      class="form-check-input  radio-btn-7"
                      type="radio"
                      name="flexRadioDefault"
                      id=""
                    />
                    <p className="color-name">red</p>
                  </div>
                </div>
              </div>
              <p className="product mt-4"> Product style</p>
              <div className="col-md-12">
                <div className="dummy-tshirt">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={dummy1} alt="..." className="dummy" />
                      <p className="">
                        Unisex
                        <br />
                        French
                        <br />
                        Terry Box
                        <br />
                        Tee
                      </p>
                    </div>
                    <div className="col-md-4">
                      <img src={dummy2} alt="..." className="dummy" />
                      <p>Womens Box Tee</p>
                    </div>
                    <div className="col-md-4">
                      <img src={dummy3} alt="..." className="dummy" />
                      <p>Womens deep V neck Tshirt</p>
                    </div>
                    <div className="col-md-5">
                      <img src={dummy4} alt="..." className="dummy-d" />
                      <p>Womens Short Sleevs Crew Neck</p>
                    </div>
                    <div className="col-md-4">
                      <img src={dummy5} alt="..." className="dummy-d" />
                      <p> Womens Short Sleeves V Neck</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-5"></hr>
              <div class="outer ">
                <div class="button">
                  <div class="text">
                    <p class="">See Result</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Mens;
