import React from "react";
import { Link } from "react-router-dom";
import "./Whislist.css";
import black1 from "../../../assets/black1.webp";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

const Whislist = () => {
  return (
    <>
      <section class="wishlist-section">
        <div className="container">
          <div className="col-md-12">
            <h1 className="whislist text-center">Wishlist</h1>
            <div className="row wish mt-4">
              <div className="col-md-6   my-auto">
                <div className="d-flex">
                  <div className="font my-auto">
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                  </div>
                  <div className="img-div ms-2">
                    <img class="product-img" src={black1} alt="..."></img>
                  </div>
                  <div className="text my-auto ms-2 mt-4">
                    <p className="paragraph"> T-Shirt With Black Color</p>
                  </div>

                  <div className="view-button my-auto  ms-2">
                    <Link to="/all-product-details-man"> <button type="button paragraph  btn" class="btn black">
                      Quick View
                    </button></Link>
                  </div>
                </div>
              </div>

              <div className=" col-md-6   justify-content-end my-auto">
                <div className="d-flex  align-ddadad">
                  <div className="cash mt-3">
                    <p className="paragraph">Rs.160</p>
                  </div>
                  <div className="stock ms-3 mt-3"><p className="paragraph">In Stock</p></div>
                  <div className="add-cart ms-2 md-4  mt-2">
                    <button type="button" class="btn cart-btn">
                      <p className="paragraph" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalwishlist">Add to cart</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row wish">
              <div className="col-md-6   my-auto">
                <div className="d-flex">
                  <div className="font my-auto">
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                  </div>
                  <div className="img-div ms-2">
                    <img class="product-img" src={black1} alt="..."></img>
                  </div>
                  <div className="text my-auto ms-2 mt-4">
                    <p className="paragraph"> T-Shirt With Black Color</p>
                  </div>
                  <div className="view-button my-auto  ms-2">
                    <Link to="/all-product-details-man"><button type="button paragraph  btn" class="btn black">
                      Quick View
                    </button></Link>
                  </div>
                </div>
              </div>

              <div className=" col-md-6   justify-content-end my-auto">
                <div className="d-flex  align-ddadad">
                  <div className="cash mt-3">
                    <p className="paragraph">Rs.160</p>
                  </div>
                  <div className="stock ms-3 mt-3"><p className="paragraph">In Stock</p></div>
                  <div className="add-cart ms-2 md-4  mt-2">
                    <button type="button" class="btn cart-btn">
                      <p className="paragraph" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalwishlist">Add to cart</p>
                    </button>

                  </div>
                </div>
              </div>
            </div>

            <div className="row wish">
              <div className="col-md-6   my-auto">
                <div className="d-flex ">
                  <div className="font my-auto">
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                  </div>
                  <div className="img-div ms-2">
                    <img class="product-img" src={black1} alt="..."></img>
                  </div>
                  <div className="text my-auto ms-2 mt-4">
                    <p className="paragraph"> T-Shirt With Black Color</p>
                  </div>
                  <div className="view-button my-auto  ms-2">
                    <Link to="/all-product-details-man">  <button type="button paragraph  btn" class="btn black">
                      Quick View
                    </button></Link>
                  </div>
                </div>
              </div>

              <div className=" col-md-6   justify-content-end my-auto">
                <div className="d-flex  align-ddadad">
                  <div className="cash mt-3">
                    <p className="paragraph">Rs.160</p>
                  </div>
                  <div className="stock ms-3 mt-3"><p className="paragraph">In Stock</p></div>
                  <div className="add-cart ms-2 md-4  mt-2">
                    <button type="button" class="btn cart-btn">
                      <p className="paragraph" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalwishlist">Add to cart</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        {/* start modal  */}
        <div className="wishlist-add-popup">

          <div class="modal fade" id="exampleModalwishlist" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Choose your perfect fit</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link "  type="button"  aria-selected="true" role="tab" id="pills-28-tab" data-bs-toggle="pill" data-bs-target="#pills-28">28</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link"  type="button"  aria-selected="true" role="tab" id="pills-30-tab" data-bs-toggle="pill" data-bs-target="#pills-30">30</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link"  type="button"  aria-selected="true" role="tab"
                      id="pills-32-tab" data-bs-toggle="pill" data-bs-target="#pills-32">32</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" type="button"  aria-selected="true" role="tab" id="pills-34-tab" data-bs-toggle="pill" data-bs-target="#pills-34">34</button>
                    </li>       
                    <li class="nav-item" role="presentation">
                      <button class="nav-link"  type="button"  aria-selected="true" role="tab"id="pills-36-tab" data-bs-toggle="pill" data-bs-target="#pills-36">36</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" type="button"  aria-selected="true" role="tab" id="pills-38-tab" data-bs-toggle="pill" data-bs-target="#pills-38">38</button>
                    </li>             
                  </ul>

                  <button className="btn btn-success w-100" data-bs-dismiss="modal">Done</button>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* end modal  */}


      </section>
    </>
  );
};
export default Whislist;
