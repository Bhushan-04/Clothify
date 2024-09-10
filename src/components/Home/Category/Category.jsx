import { useNavigate } from "react-router-dom";
import "./Category.scss";
import BannerImg from "../../../assets/box-left.png";
import BannerImg2 from "../../../assets/mediaRight.png";
import BoxImage from "../../../assets/category.png";
import Box2Image from "../../../assets/slide2.png";
import New1Image from "../../../assets/new1.png";
import New2Image from "../../../assets/new2.png";
import New3Image from "../../../assets/new3.png";

const Category = ({ layout, categories }) => {
  const navigate = useNavigate();
  return (
    <>
      {layout === "01" && (
        <div className="offerView ">
          <div className="row bg-brand py-1 shadow-box ms-0 me-0">
            <div class="col-sm-6 mb-3 mb-sm-0 divide" data-aos="fade-in">
              <div
                className="text-none pointer"
                onClick={() =>
                  navigate(`/all-product-details`, { state: { category: "MEN" } })
                }
              >
                <div class=" bg-transparent mx-auto">
                  <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <p className="heading text-444">Free Shipping Over ₹99</p>
                    <p className="sub-heading text-444">
                      Plus, two-day delivery on thousand of items.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-3 mb-sm-0" data-aos="fade-in">
              <div
                className="text-none pointer"
                onClick={() =>
                  navigate(`/all-product-details`, { state: { category: "MEN" } })
                }
              >
                <div class=" bg-transparent mx-auto">
                  <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <p className="heading text-444">Amazing Value Everyday</p>
                    <p className="sub-heading text-444">
                      Plus, two-day delivery on thousand of items.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {layout === "02" && (
        <div className="container">
          <div className="row justify-content-center mt-5 mb-4">
            <div class="col-md-3 col-lg-4 mb-3 mb-sm-0" data-aos="fade-in">
              <div
                className="text-none pointer"
                onClick={() =>
                  navigate(`/Mens`, { state: { category: "MEN" } })
                }
              >
                <div class="">
                  <div className="d-flex flex-column justify-content-center align-items-center text-center coupon-section">
                    <p className="heading">Get 10% Off</p>
                    <p className="sub-heading">On orders over $39</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-lg-4 mb-3 mb-sm-0" data-aos="fade-in">
              <div
                className="text-none pointer"
                onClick={() =>
                  navigate(`/Mens`, { state: { category: "MEN" } })
                }
              >
                <div class="">
                  <div className="d-flex flex-column justify-content-center align-items-center text-center coupon-section">
                    <p className="heading">Get 20% Off</p>
                    <p className="sub-heading">On orders over $59</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-lg-4 mb-3 mb-sm-0" data-aos="fade-in">
              <div
                className="text-none pointer"
                onClick={() =>
                  navigate(`/Mens`, { state: { category: "MEN" } })
                }
              >
                <div class="">
                  <div className="d-flex flex-column justify-content-center align-items-center text-center coupon-section">
                    <p className="heading">Get 30% Off</p>
                    <p className="sub-heading">On orders over $99</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-md-3 col-lg-3 mb-3 mb-sm-0 text-center" data-aos="fade-in">
                        <div className="text-none pointer" onClick={() => navigate(`/all-product-details`,{ state: {category: 'MEN'}})}>
                            <button className="btn btn-lg btn-code">CODE : DISCOUNT</button>
                        </div>
                    </div> */}
          </div>
        </div>
      )}

      {layout === "03" && (
        <div className="row mb-5">
          {/* <span className="OfferHeading">Exclusive Discount Offerzone</span> */}
          <header class="SectionHeader SectionHeader--center">
            <div class="Container">
              <span class="Heading">WELCOME TO THE OFFER ZONE</span>
              <div class="TabList" role="tablist">
                <span class="Heading mb-5"> GET THE BEST DEALS FOR YOU</span>
              </div>
            </div>
          </header>
          <div
            class="col-sm-12 mb-3 mb-sm-0"
            data-aos="fade-up"
            style={{
              // background:`linear-gradient(328deg, #32571a, #7ebd65),url(${process.env.PUBLIC_URL + PinkGradient})`,
              background: `#f9c6d1`,
              height: "500px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              class="row align-items-center justify-content-center h-100"
              data-aos="fade-up"
            >
              <div className="col-lg-5 text-center">
                <div className="left-cicle">
                  <p className="new-arrivals" data-aos="fade-up">
                    New Arrivals
                  </p>
                  <h2 className="hashtag" data-aos="fade-up">
                    #MILLANCE
                  </h2>
                  <p className="new-arrivals">Demo text here</p>
                  <button className="btn btn-dark btn-look">
                    SHOP THE LOOK
                  </button>
                </div>
              </div>
              <div className="col-lg-7 text-center">
                <div className="video">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/hHqW0gtiMy4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {layout === "04" && (
        <div className="row mt-5 mb-3 most-visit">
          <div className="MVHeading "> Most Visited Category</div>
          <div class="col-sm-6 mb-3 mb-sm-0" data-aos="fade-up">
            <div class="card">
              <div
                className="card-body category p-0"
                onClick={() =>
                  navigate(`/Mens`, {
                    state: { category: "ROUNDED NECK" },
                  })
                }
              >
                <img alt="category" src={BoxImage} />
                <div className="overlay"></div>
                <div className="TextView">
                  <h6 className="heading">ROUNDED NECK</h6>
                  <span className="desc">
                    Upgrade your wardrobe with our badass collection of tees!
                  </span>
                  <div class="banner">
                    <a
                      href="javascript(0)"
                      onClick={() => navigate(`/Mens`)}
                      class="butn butn__new"
                    >
                      <span className="shop-now-text">Shop Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mb-3 mb-sm-0" data-aos="fade-up">
            <div class="card">
              <div
                className="card-body category p-0"
                onClick={() =>
                  navigate(`/Mens`, { state: { category: "POLOS" } })
                }
              >
                <img alt="category" src={Box2Image} />
                <div className="overlay"></div>
                <div className="TextView">
                  <h6 className="heading">POLOS</h6>
                  <span className="desc">
                    Upgrade your wardrobe with our badass collection of tees!
                  </span>
                  <div class="banner">
                    <a
                      href="javascript(0)"
                      onClick={() => navigate(`/Mens`)}
                      class="butn butn__new"
                    >
                      <span className="shop-now-text">Shop Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {layout === "05" && (
        <div className="row mt-5 mb-5 most-visit">
          <div className="MVHeading "> Most Visited Category</div>
          <div class="col-sm-6 mb-5 mb-sm-0" data-aos="fade-up">
            <div class="card">
              <div
                className="card-body category p-0"
                onClick={() =>
                  navigate(`/Mens`, {
                    state: { category: "OVER-SIZED<" },
                  })
                }
              >
                <img alt="category" src={BannerImg} />
                <div className="overlay"></div>
                <div className="TextView">
                  <h6 className="heading">OVER-SIZED</h6>
                  <span className="desc">
                    Upgrade your wardrobe with our badass collection of tees!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mb-3 mb-sm-0" data-aos="fade-up">
            <div class="card">
              <div
                className="card-body category p-0"
                onClick={() =>
                  navigate(`/Category`, { state: { category: "TOPS" } })
                }
              >
                <img alt="category" src={BannerImg2} />
                <div className="overlay"></div>
                <div className="TextView">
                  <h6 className="heading">TOPS</h6>
                  <span className="desc">
                    Upgrade your wardrobe with our badass collection of tees!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {layout === "06" && (
        <div className="pb-5 mt-5">
          <div className="MVHeading"> New Designs</div>
          <div className="row my-3">
            <div class="col-sm-4 mb-3 mb-sm-0">
              <div class="card" data-aos="">
                <div
                  className="card-body category"
                  onClick={() =>
                    navigate(`/category`, {
                      state: { category: "CROP TOPS" },
                    })
                  }
                >
                  <img alt="category" src={New1Image} />
                  <div className="overlay"></div>
                  <div className="TextView">
                    <h6 className="heading">CROP TOPS</h6>
                    <span className="desc">
                      Upgrade your wardrobe with our badass collection of tees!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-4 mb-3 mb-sm-0">
              <div class="card" data-aos="">
                <div
                  className="card-body category"
                  onClick={() =>
                    navigate(`/category`, {
                      state: { category: "NECK TOPS" },
                    })
                  }
                >
                  <img alt="category" src={New2Image} />
                  <div className="overlay"></div>
                  <div className="TextView">
                    <h6 className="heading">NECK TOPS</h6>
                    <span className="desc">
                      Upgrade your wardrobe with our badass collection of tees!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-4 mb-3 mb-sm-0">
              <div class="card" data-aos="">
                <div
                  className="card-body category"
                  onClick={() =>
                    navigate(`/category`, {
                      state: { category: "PRINTED TOPS" },
                    })
                  }
                >
                  <img alt="category" src={New3Image} />
                  <div className="overlay"></div>
                  <div className="TextView">
                    <h6 className="heading">PRINTED TOPS</h6>
                    <span className="desc">
                      Upgrade your wardrobe with our badass collection of tees!
                    </span>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      )}
    </>
  );
};

export default Category;
