import React, { useCallback, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";

import Listview from "../Listview";
import Gridview from "../Gridview";

import "./Filter.scss";
import grid2 from "../../../assets/grid2.png";

import grid1 from "../../../assets/grid1.png";
import dummy1 from "../../../assets/dummy1.webp";
import dummy2 from "../../../assets/dummy2.jpg";
import dummy3 from "../../../assets/dummy3.jpg";
import dummy4 from "../../../assets/dummy4.jpg";
import dummy5 from "../../../assets/dummy5.jpg";
import Drawer from "./Drawer";
library.add(fas);
export default function Filter() {
  const navigate = useNavigate();
  const [fliterShow, setFillterShow] = useState(false);
  const [fliterColor, setFillterColor] = useState([]);
  const ColorData = ["red", "white", "blue", "aqua", "green", "yellow"];
  const setFillterFunc = useCallback(() => {
    setFillterShow(!fliterShow);
  });
  const setFillterColorFunc = useCallback((color) => {
    console.log(color);
    if (fliterColor.includes(color)) {
      setFillterColor((OldfliterShow) =>
        OldfliterShow.filter((item) => item !== color)
      );
    } else {
      setFillterColor((OldfliterShow) => [...OldfliterShow, color]);
    }
  });
  return (
    <>
      {/* <section className="search-bar-main-content">
        <div className="title-div">
          <p className="title-women">WOMENS ALL PRODUCTS | QUALITY & LONGEVITY</p>
        </div>

        <div className="container-fluid">
          <div className="main">
            <div className="row">
              <nav class="navbar ">
                <div class="container-fluid">



                  <div className="vertical1">
                    <a class="navbar-brand">

                      <div className="grid-vert-tab-sec">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                          <li class="nav-item ms-2" role="presentation">
                            <div class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><FontAwesomeIcon icon="fa-solid fa-border-all" /></div>
                      <img
                        src={grid1}
                        alt="..."
                        className="img-fluid img1 me-3"
                        onClick={() => navigate("/gridpage")}
                      ></img>
                    </a>
                  </div>
                  <form class="d-flex" role="search">
                    <ul class="nav justify-content-end ">
                      <li class="nav-item dropdown my-auto">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <p className="mt-2">
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

                          <li class="nav-item ms-2" role="presentation">
                            <div class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><FontAwesomeIcon icon="fa-solid fa-table-cells" />
                            </div>
                          </li>

                          <li class="nav-item ms-2" role="presentation">
                            <form class="d-flex" role="search">
                              <ul class="nav justify-content-end ">
                                <li class="nav-item dropdown my-auto">
                                  <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <p className="">
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

                                <li class="nav-item">
                                  <button
                                    class="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight"
                                  >
                                    <p className="filter mt-2">Filter</p>
                                  </button>
                                </li>
                              </ul>
                            </form>  
                          </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">                                
                          <Listview/>
                          </div>

                          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                             <Gridview/>
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
      </section> */}

      {/* Offcanvas */}

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
          <div className="d-flex ">
            <div className="d-flex just">
              <div class="form-check me-3">
                <input
                  class="form-check-input age1"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault0.1"
                />
              </div>

              <div class="form-check me-3">
                <input
                  class="form-check-input age2"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault0.2"
                />
              </div>

              <div class="form-check me-3">
                <input
                  class="form-check-input age3"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault0.3"
                />
              </div>
              <div class="form-check me-3">
                <input
                  class="form-check-input age4"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault0.4"
                />
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
                  {" "}
                  <img src={dummy5} alt="..." className="dummy-d" />
                  <p> Womens Short Sleeves V Neck</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-5"></hr>
          <div className="see result">
            <button type="button" class="btn btn-light">
              See Result
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
