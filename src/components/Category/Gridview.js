import React from "react";
// import "./GridPage.scss";
import "../Category/GridPage/GridPage.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import product3 from "../../../assets/product3.webp";
import green from "../../assets/green.webp";
import green1 from "../../assets/green1.webp";
import white from "../../assets/white.webp";
import white1 from "../../assets/white1.webp";
import skirt from "../../assets/skirt.webp";
import white3 from "../../assets/white3.webp";
import white4 from "../../assets/white4.webp";
import white6 from "../../assets/white6.webp";
import white7 from "../../assets/white7.webp";
import grid1 from "../../assets/grid1.png";
import dummy1 from "../../assets/dummy1.webp";
import dummy2 from "../../assets/dummy2.jpg";
import dummy3 from "../../assets/dummy3.jpg";
import dummy4 from "../../assets/dummy4.jpg";
import dummy5 from "../../assets/dummy5.jpg";

//import grid1 from "../../../assets/grid1.png";
library.add(fas);

const Gridview = () => {
  function changeImage(e) {
    e.target.style.display = "opacity:none";
  }
  return (
    <>


      {/* <section className="search-bar-main-content">
        <div className="title-div">
            <p className="title-women">WOMENS ALL PRODUCTS | QUALITY & LONGEVITY</p>
        </div>
        
      </section> */}


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
          <div className="d-flex">
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
                  {" "}
                  <img src={dummy5} alt="..." className="dummy-d" />
                  <p> Womens Short Sleeves V Neck</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-5"></hr>
          <div class="outer">
            <div class="button">
              <div class="text">
                {" "}
                <p className="">See results</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="grid p-5">
        <div className="container-fluid">
          <div className="row">
            <div className="grid1 col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6  mt-3">
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

            <div className="grid2 col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6   mt-3">
              <div className="green-img">
                <img src={skirt} alt="..." className="img1" />
                <img src={white} alt="..." className="img2" />
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

            <div className="grid3 col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6   mt-3">
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

            <div className="grid1 col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6  mt-3">
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

            <div className="grid2 col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6   mt-3">
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

            <div className="grid3 col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6   mt-3">
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




          </div>
        </div>
      </section>
    </>
  );
};
export default Gridview;
