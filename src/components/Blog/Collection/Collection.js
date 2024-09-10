import React from 'react'
import '../Collection/Collection.css'
import green from "../../../assets/green.webp";
import green1 from "../../../assets/green1.webp";
import white from "../../../assets/white.webp";
import white1 from "../../../assets/white1.webp";
import skirt from "../../../assets/skirt.webp";
import white3 from "../../../assets/white3.webp";
import white4 from "../../../assets/white4.webp";

const Collection = () => {
    function changeImage(e) {
        e.target.style.display = "opacity:none";
    }
    return (
        <>
            <section className="grid p-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="grid1 col-md-6 col-lg-6 col-xxl-3 mt-3">
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
                                </div>
                            </div>
                        </div>
                        <div className="grid2 col-md-6 col-lg-6 col-xxl-3 mt-3">
                            <div className="green-img">
                                <img src={white1} alt="..." className="img1" />
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
                                </div>
                            </div>
                        </div>
                        <div className="grid3 col-md-6 col-lg-6 col-xxl-3 mt-3">
                            <div className="grid-main3">
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
                                </div>
                            </div>
                        </div>
                        <div className="grid4 col-md-6 col-lg-6 col-xxl-3 mt-3">
                            <img src={white4} alt="..." className="img1" />
                            <img src={white} alt="..." className="img2" />
                            <div className="grid-main4">
                                <h2 class="ProductItem__Title Heading text-center mt-3">
                                    <a href="/collections/womens-short-sleeve/products/unisex-french-terry-box-tee">
                                        WOMENS SHORT SLEEVE V NECK
                                    </a>
                                </h2>
                                <div class="ProductItem__PriceList  Heading prize_tag_minHeight text-center">
                                    <span class="ProductItem__Price Price Text--subdued">
                                        RS. 4,900.00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="outer mt-5 ">
                        <div class="view-button">
                            <div class="text-view">View all Product</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Collection;


