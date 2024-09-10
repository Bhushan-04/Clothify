import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Image from "react-bootstrap/Image";
import { Context } from "../../utils/context";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Profile = () => {
  const { userdata, setSignin, setuserData } = useContext(Context);
  const navigate = useNavigate();
  const LogOut = () => {
    setSignin(false);
    setuserData([]);
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Container>
      <div className="row mt-5">
        <div className="col-md-10">
          <h4 className="heading">Account Information</h4>
          <p className="user-name">John Doe</p>
        </div>
        <div className="col-md-2">
          <Button
            variant="outline-success"
            className="btn-sm rounded-btn"
            onClick={LogOut}
          >
            Logout
          </Button>
        </div>
      </div>

      <Row>
        <Col>
          <Tab.Container id="left-tabs-example" defaultActiveKey="overview">
            <Row>
              <Col md={12} xl={4} className="border-end">
                <Nav variant="pills" className="pt-3 flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="overview" className="p-3">
                      Profile
                    </Nav.Link>
                  </Nav.Item>

                  <div className="segment-segment">
                    <div className="segment-heading">ORDERS & WISHLIST</div>
                    <Nav.Item>
                      <Nav.Link eventKey="orders" className="segment-link p-3">
                        My Orders
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => navigate("/wishlist")}
                        eventKey="wishlist"
                        className="segment-link p-3"
                      >
                        Wishlist
                      </Nav.Link>
                    </Nav.Item>
                  </div>

                  <div className="segment-segment">
                    <div className="segment-heading">CHECKOUT DETAILS</div>
                    <Nav.Item>
                      <Nav.Link eventKey="address" className="segment-link p-3">
                        Address
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                </Nav>
              </Col>
              <Col md={12} xl={8}>
                <Tab.Content className="pt-3">
                  <Tab.Pane eventKey="overview">
                    <div className="row">
                      <div className="page-profile">
                        <div className="profile-card">
                          <div className="profile-infoLabel">
                            Profile Details
                          </div>
                          <div className="profile-card-title text-dark d-flex align-items-center justify-content-start">
                            <Image
                              src={
                                "https://constant.myntassets.com/mymyntra/assets/img/default-image.png"
                              }
                              className="mr-3"
                              width={80}
                              fluid
                            />
                            <div className="d-flex flex-column mb-3">
                              <p className="text-dark mb-0 text-align-left">
                                John Doe
                              </p>
                              <p className="text-email text-muted mb-0 text-align-left">
                                useremail@gmail.com
                              </p>
                            </div>
                          </div>
                          <table className="profile-infoTable">
                            <tbody>
                              <tr>
                                <td>Mobile Number</td>
                                <td>7501541800</td>
                              </tr>
                              <tr>
                                <td>Email ID</td>
                                <td>avighosh010@gmail.com</td>
                              </tr>
                              <tr>
                                <td>Gender</td>
                                <td>MALE</td>
                              </tr>
                              <tr>
                                <td>Date of Birth</td>
                                <td>- not added -</td>
                              </tr>
                              <tr>
                                <td>Location</td>
                                <td>- not added -</td>
                              </tr>
                              <tr>
                                <td>Alternate Mobile</td>
                                <td>- not added -</td>
                              </tr>
                              <tr>
                                <td>Hint Name</td>
                                <td>- not added -</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="profile-editButton"> EDIT </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="orders">
                    <div className="page-fullWidthComponent">
                      <div
                        className="profile-infoLabel"
                        style={{ padding: "0 0 10px 0" }}
                      >
                        All Orders
                      </div>

                      <div>
                        <div
                          className="page-listBackground"
                          style={{ overflowY: "scroll", height: "100vh" }}
                        >
                          {/* sample products in orders  */}
                          <div className="ItemList-itemView">
                            <div className="ProductList-itemInfoForItemList  false">
                              <div role="link" tabindex="0">
                                <div className="ProductList-imageAndDetails">
                                  <div
                                    className="ProductList-thumbnail"
                                    role="link"
                                    tabindex="0"
                                  >
                                    <div
                                      style={{
                                        background: "rgb(244, 255, 249)",
                                        height: "70px",
                                        width: " 53px",
                                        borderRadius: "2px",
                                      }}
                                    >
                                      <div
                                        className="LazyLoad is-visible"
                                        style={{
                                          height: "70px",
                                          width: "53px",
                                        }}
                                      >
                                        <picture
                                          className="image-imgResponsiveNew"
                                          style={{ width: "100%" }}
                                        >
                                          <source
                                            srcset={
                                              "https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/17251470/2022/3/10/81b3ab9f-1f9d-4820-b072-bba4caaff25e1646890035269-Varanga-Magenta-Silk-Kurta-With-Woven-Yoke-And-Fully-Elastic-1.webp"
                                            }
                                            type="image/webp"
                                          />
                                          <img
                                            src={
                                              "https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/17251470/2022/3/10/81b3ab9f-1f9d-4820-b072-bba4caaff25e1646890035269-Varanga-Magenta-Silk-Kurta-With-Woven-Yoke-And-Fully-Elastic-1.jpg"
                                            }
                                            className="image-imgResponsiveNew"
                                            style={{
                                              borderRadius: "2px",
                                              width: "100%",
                                            }}
                                            alt="test"
                                          />
                                        </picture>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ProductList-details ProductList-content_justify">
                                    <div className="ProductList-bold">
                                      <span className="Text-Text">Varanga</span>
                                    </div>
                                    <div className="ProductList-productName">
                                      <span className="Text-Text">
                                        {" "}
                                        Women Magenta &amp; Golden Ethnic Motifs
                                        Yoke Design Kurta with Trousers &amp;
                                        Dupatta
                                      </span>
                                    </div>
                                    <div className="ProductList-size">
                                      <span className="Text-Text">
                                        Size: XL
                                      </span>
                                    </div>
                                  </div>
                                  <div className="ProductList-arrowIcon">
                                    <span
                                      className="svgImages-svg svgImages-grayArrow "
                                      style={{ width: "24px", height: "24px" }}
                                    ></span>
                                  </div>
                                </div>
                              </div>
                              <div className="ProductList-actionButtonsStyles">
                                <div className="StyledTextButton-button">
                                  <button
                                    type="button"
                                    class="btn cancel"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalcancle"
                                  >
                                    Cancel
                                  </button>
                                </div>
                                {/* popup for cancel */}
                                <div className="Continue-main">
                                  <div
                                    class="modal fade"
                                    id="exampleModalcancle"
                                    tabindex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div class="modal-dialog modal-dialog-centered">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h1
                                            class="modal-title fs-5"
                                            id="exampleModalLabel"
                                          >
                                            <p className="reason">
                                              Reasons For Cancellation
                                            </p>
                                            <p className="please">
                                              please tell us correct reason for
                                              cancellation
                                            </p>
                                          </h1>
                                          <button
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          ></button>
                                        </div>
                                        <div class="modal-body  ashss">
                                          {/* 1st option */}
                                          <div class="form-check">
                                            {/* 2nd option */}
                                            <div class="accordion-item">
                                              <h2
                                                class="accordion-header"
                                                id="flush-headingTwo"
                                              >
                                                <button
                                                  class="accordion-button collapsed"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#flush-collapseTwo"
                                                  aria-expanded="false"
                                                  aria-controls="flush-collapseTwo"
                                                >
                                                  <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="exampleRadios"
                                                    id="exampleRadios1"
                                                    value="option1"
                                                    checked
                                                  />
                                                  incorrect size ordered
                                                </button>
                                              </h2>
                                              <div
                                                id="flush-collapseTwo"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingTwo"
                                                data-bs-parent="#accordionFlushExample"
                                              >
                                                <div class="accordion-body">
                                                  {" "}
                                                  <h4 className="want">
                                                    Want a different size?
                                                  </h4>
                                                  <p className="get">
                                                    You can get a different size
                                                    and get a item delivered to
                                                    you
                                                  </p>
                                                  <p className="change">
                                                    Change Size
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* 2nd option */}
                                          <div class="form-check">
                                            <div class="accordion-item">
                                              <h2
                                                class="accordion-header"
                                                id="flush-headingOne"
                                              >
                                                <button
                                                  class="accordion-button collapsed"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#flush-collapseOne"
                                                  aria-expanded="false"
                                                  aria-controls="flush-collapseOne"
                                                >
                                                  <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="exampleRadios"
                                                    id="exampleRadios1"
                                                    value="option1"
                                                    checked
                                                  />
                                                  cash issue
                                                </button>
                                              </h2>
                                              <div
                                                id="flush-collapseOne"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="flush-heading"
                                                data-bs-parent="#accordionFlushExample"
                                              >
                                                <div class="accordion-body">
                                                  {" "}
                                                  <h4 className="want">
                                                    Want a different size?
                                                  </h4>
                                                  <p className="get">
                                                    You can get a different size
                                                    and get a item delivered to
                                                    you
                                                  </p>
                                                  <p className="change">
                                                    Change Size
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* 3rd option */}
                                          <div class="form-check">
                                            <div class="accordion-item">
                                              <h2
                                                class="accordion-header"
                                                id="flush-headingThree"
                                              >
                                                <button
                                                  class="accordion-button collapsed"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#flush-collapseThree"
                                                  aria-expanded="false"
                                                  aria-controls="flush-collapseThree"
                                                >
                                                  <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="exampleRadios"
                                                    id="exampleRadios1"
                                                    value="option1"
                                                    checked
                                                  />
                                                  ordered by mistake
                                                </button>
                                              </h2>
                                              <div
                                                id="flush-collapseThree"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="flush-heading"
                                                data-bs-parent="#accordionFlushExample"
                                              >
                                                <div class="accordion-body">
                                                  {" "}
                                                  <h4 className="want">
                                                    Want a different size?
                                                  </h4>
                                                  <p className="get">
                                                    You can get a different size
                                                    and get a item delivered to
                                                    you
                                                  </p>
                                                  <p className="change">
                                                    Change Size
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* 4th option */}
                                          <div class="form-check">
                                            <div class="accordion-item">
                                              <h2
                                                class="accordion-header"
                                                id="flush-headingFour"
                                              >
                                                <button
                                                  class="accordion-button collapsed"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#flush-collapseFour"
                                                  aria-expanded="false"
                                                  aria-controls="flush-collapseFour"
                                                >
                                                  <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="exampleRadios"
                                                    id="exampleRadios1"
                                                    value="option1"
                                                    checked
                                                  />
                                                  duplicate order
                                                </button>
                                              </h2>
                                              <div
                                                id="flush-collapseFour"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="flush-heading"
                                                data-bs-parent="#accordionFlushExample"
                                              >
                                                <div class="accordion-body">
                                                  {" "}
                                                  <h4 className="want">
                                                    Want a different size?
                                                  </h4>
                                                  <p className="get">
                                                    You can get a different size
                                                    and get a item delivered to
                                                    you
                                                  </p>
                                                  <p className="change">
                                                    Change Size
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* 5th option */}
                                          <div class="form-check">
                                            <div class="accordion-item">
                                              <h2
                                                class="accordion-header"
                                                id="flush-headingFive"
                                              >
                                                <button
                                                  class="accordion-button collapsed"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#flush-collapseFive"
                                                  aria-expanded="false"
                                                  aria-controls="flush-collapseFive"
                                                >
                                                  <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="exampleRadios"
                                                    id="exampleRadios1"
                                                    value="option1"
                                                    checked
                                                  />
                                                  want to change style color
                                                </button>
                                              </h2>
                                              <div
                                                id="flush-collapseFive"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="flush-heading"
                                                data-bs-parent="#accordionFlushExample"
                                              >
                                                <div class="accordion-body">
                                                  <h4 className="want">
                                                    Want a different size?
                                                  </h4>
                                                  <p className="get">
                                                    You can get a different size
                                                    and get a item delivered to
                                                    you
                                                  </p>
                                                  <p className="change">
                                                    Change Size
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="modal-footer">
                                          <button
                                            type="button"
                                            class="btn continue"
                                            data-bs-toggle="modal"
                                            href="#exampleModalToggle"
                                            role="button"
                                          >
                                            <p className="text-center">
                                              Cancel
                                            </p>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Cancel-order popup */}

                                  <div
                                    className="StyledTextButton-button"
                                    style={{
                                      height: "32px",
                                      marginLeft: "4px",
                                      marginRight: "4px",
                                    }}
                                  >
                                    <button
                                      type="button"
                                      class="btn replace"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModalreplace"
                                    >
                                      Replace
                                    </button>

                                    <div className="replace-order-pop">
                                      <div
                                        class="modal fade"
                                        id="exampleModalreplace"
                                        tabindex="-1"
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true"
                                      >
                                        <div class="modal-dialog modal-dialog-centered">
                                          <div class="modal-content">
                                            <div class="modal-header header1">
                                              <h1
                                                class="modal-title fs-5"
                                                id="exampleModalLabel"
                                              >
                                                Replace With?
                                              </h1>
                                              <button
                                                type="button"
                                                class="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                              ></button>
                                            </div>
                                            <div class="modal-body body1">
                                              <div className="main1">
                                                <input
                                                  type="radio"
                                                  id="Netflix"
                                                  name="brand"
                                                  value="Netflix"
                                                />
                                                <label for="Netflix">
                                                  Same item in different size
                                                  available sizes:30,32,34,36,38
                                                </label>
                                              </div>

                                              <div className="main2">
                                                <input
                                                  type="radio"
                                                  id="Audi"
                                                  name="brand"
                                                  value="Audi"
                                                />
                                                <label for="Audi">
                                                  New item choose from
                                                  20000+styles
                                                </label>
                                              </div>
                                            </div>
                                            <div class="modal-footer footer1">
                                              {/* continue pop up */}
                                              <button
                                                type="button"
                                                class="btn continue"
                                              >
                                                <p
                                                  className="paragraph"
                                                  type="button"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#exampleModalwishlist"
                                                >
                                                  Continue
                                                </p>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* continue pop up */}

                          <div className="wishlist-add-popup">
                            <div
                              class="modal fade"
                              id="exampleModalwishlist"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h1
                                      class="modal-title fs-5"
                                      id="exampleModalLabel"
                                    >
                                      Choose your perfect fit
                                    </h1>
                                    <button
                                      type="button"
                                      class="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div class="modal-body text-center">
                                    <ul
                                      class="nav nav-pills mb-3"
                                      id="pills-tab"
                                      role="tablist"
                                    >
                                      <li class="nav-item" role="presentation">
                                        <button
                                          class="nav-link "
                                          type="button"
                                          aria-selected="true"
                                          role="tab"
                                          id="pills-28-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-28"
                                        >
                                          28
                                        </button>
                                      </li>
                                      <li class="nav-item" role="presentation">
                                        <button
                                          class="nav-link"
                                          type="button"
                                          aria-selected="true"
                                          role="tab"
                                          id="pills-30-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-30"
                                        >
                                          30
                                        </button>
                                      </li>
                                      <li class="nav-item" role="presentation">
                                        <button
                                          class="nav-link"
                                          type="button"
                                          aria-selected="true"
                                          role="tab"
                                          id="pills-32-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-32"
                                        >
                                          32
                                        </button>
                                      </li>
                                      <li class="nav-item" role="presentation">
                                        <button
                                          class="nav-link"
                                          type="button"
                                          aria-selected="true"
                                          role="tab"
                                          id="pills-34-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-34"
                                        >
                                          34
                                        </button>
                                      </li>
                                      <li class="nav-item" role="presentation">
                                        <button
                                          class="nav-link"
                                          type="button"
                                          aria-selected="true"
                                          role="tab"
                                          id="pills-36-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-36"
                                        >
                                          36
                                        </button>
                                      </li>
                                      <li class="nav-item" role="presentation">
                                        <button
                                          class="nav-link"
                                          type="button"
                                          aria-selected="true"
                                          role="tab"
                                          id="pills-38-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-38"
                                        >
                                          38
                                        </button>
                                      </li>
                                    </ul>

                                    <button
                                      className="btn btn-success w-100"
                                      data-bs-dismiss="modal"
                                    >
                                      Done
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="notify-modal">
                            <div
                              class="modal fade"
                              id="continue-mod"
                              tabindex="-1"
                              aria-labelledby="notifyModalLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h1
                                      class="modal-title fs-5"
                                      id="notifyModalLabel"
                                    >
                                      Please select your size
                                    </h1>
                                    <button
                                      type="button"
                                      class="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div class="modal-body">
                                    <ul
                                      class="nav nav-pills mb-3"
                                      id="pills-tab"
                                      role="tablist"
                                    >
                                      <li class="nav-item" role="presentation">
                                        <button
                                          class="nav-link active me-2"
                                          id="pills-home-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-home"
                                          type="button"
                                          role="tab"
                                          aria-controls="pills-home"
                                          aria-selected="true"
                                        >
                                          XXL
                                        </button>
                                      </li>
                                      <li class="nav-item" role="presentation">
                                        <button
                                          class="nav-link me-2"
                                          id="pills-profile-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-profile"
                                          type="button"
                                          role="tab"
                                          aria-controls="pills-profile"
                                          aria-selected="false"
                                        >
                                          XXS
                                        </button>
                                      </li>
                                      <li class="nav-item" role="presentation">
                                        <button
                                          class="nav-link"
                                          id="pills-contact-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-contact"
                                          type="button"
                                          role="tab"
                                          aria-controls="pills-contact"
                                          aria-selected="false"
                                        >
                                          L
                                        </button>
                                      </li>
                                    </ul>
                                    <div className="mt-5">
                                      <p>
                                        Get notified once product is back in
                                        stock.
                                      </p>
                                    </div>
                                    <div class="input-group mb-3">
                                      <input
                                        type="text"
                                        class="form-control me-3"
                                        placeholder="Enter your email ID"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                      />
                                      <button
                                        class="btn submit-button"
                                        type="submit"
                                        id="button-addon2"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}

                          <div className="ItemList-itemView">
                            <div className="ProductList-itemInfoForItemList  false">
                              <div role="link" tabindex="0">
                                <div className="ProductList-imageAndDetails">
                                  <div
                                    className="ProductList-thumbnail"
                                    role="link"
                                    tabindex="0"
                                  >
                                    <div
                                      style={{
                                        background: "rgb(244, 255, 249)",
                                        height: "70px",
                                        width: " 53px",
                                        borderRadius: "2px",
                                      }}
                                    >
                                      <div
                                        className="LazyLoad is-visible"
                                        style={{
                                          height: "70px",
                                          width: "53px",
                                        }}
                                      >
                                        <picture
                                          className="image-imgResponsiveNew"
                                          style={{ width: "100%" }}
                                        >
                                          <source
                                            srcset={
                                              "https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/17251470/2022/3/10/81b3ab9f-1f9d-4820-b072-bba4caaff25e1646890035269-Varanga-Magenta-Silk-Kurta-With-Woven-Yoke-And-Fully-Elastic-1.webp"
                                            }
                                            type="image/webp"
                                          />
                                          <img
                                            src={
                                              "https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/17251470/2022/3/10/81b3ab9f-1f9d-4820-b072-bba4caaff25e1646890035269-Varanga-Magenta-Silk-Kurta-With-Woven-Yoke-And-Fully-Elastic-1.jpg"
                                            }
                                            className="image-imgResponsiveNew"
                                            style={{
                                              borderRadius: "2px",
                                              width: "100%",
                                            }}
                                            alt="test"
                                          />
                                        </picture>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ProductList-details ProductList-content_justify">
                                    <div className="ProductList-bold">
                                      <span className="Text-Text">Varanga</span>
                                    </div>
                                    <div className="ProductList-productName">
                                      <span className="Text-Text">
                                        {" "}
                                        Women Magenta &amp; Golden Ethnic Motifs
                                        Yoke Design Kurta with Trousers &amp;
                                        Dupatta
                                      </span>
                                    </div>
                                    <div className="ProductList-size">
                                      <span className="Text-Text">
                                        Size: XL
                                      </span>
                                    </div>
                                  </div>
                                  <div className="ProductList-arrowIcon">
                                    <span
                                      className="svgImages-svg svgImages-grayArrow "
                                      style={{ width: "24px", height: "24px" }}
                                    ></span>
                                  </div>
                                </div>
                              </div>
                              <div className="ProductList-actionButtonsStyles">
                                <div className="StyledTextButton-button">
                                  <button
                                    type="button"
                                    class="btn cancel"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalcancle"
                                  >
                                    Cancel
                                  </button>
                                </div>
                                {/* popup for cancel */}
                                <div className="pop-up">
                                  <div
                                    class="modal fade"
                                    id="exampleModalcancle"
                                    tabindex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div class="modal-dialog modal-dialog-centered">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h1
                                            class="modal-title fs-5"
                                            id="exampleModalLabel"
                                          >
                                            Select Reason
                                          </h1>
                                          <button
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          ></button>
                                        </div>
                                        <div class="modal-body">
                                          <div class="form-check">
                                            <input
                                              class="form-check-input"
                                              type="radio"
                                              name="exampleRadios"
                                              id="exampleRadios1"
                                              value="option1"
                                              checked
                                            />
                                            <label
                                              class="form-check-label"
                                              for="exampleRadios1"
                                            >
                                              incorrect size ordered
                                            </label>
                                          </div>
                                          <div class="form-check">
                                            <input
                                              class="form-check-input"
                                              type="radio"
                                              name="exampleRadios"
                                              id="exampleRadios"
                                              value="option2"
                                            />
                                            <label
                                              class="form-check-label"
                                              for="exampleRadios2"
                                            >
                                              product not required anymore
                                            </label>
                                          </div>
                                          <div class="form-check">
                                            <input
                                              class="form-check-input"
                                              type="radio"
                                              name="exampleRadios"
                                              id="exampleRadios"
                                              value="option3"
                                            />
                                            <label
                                              class="form-check-label"
                                              for="exampleRadios3"
                                            >
                                              cash issue
                                            </label>
                                          </div>
                                          <div class="form-check">
                                            <input
                                              class="form-check-input"
                                              type="radio"
                                              name="exampleRadios"
                                              id="exampleRadios"
                                              value="option4"
                                            />
                                            <label
                                              class="form-check-label"
                                              for="exampleRadios4"
                                            >
                                              ordered by mistake
                                            </label>
                                          </div>
                                          <div class="form-check">
                                            <input
                                              class="form-check-input"
                                              type="radio"
                                              name="exampleRadios"
                                              id="exampleRadios"
                                              value="option5"
                                            />
                                            <label
                                              class="form-check-label"
                                              for="exampleRadios5"
                                            >
                                              Duplicate order
                                            </label>
                                          </div>
                                        </div>
                                        <div class="modal-footer">
                                          {/* continue pop up */}
                                          <button
                                            type="button"
                                            class="btn continue"
                                            data-bs-dismiss="modal"
                                          >
                                            <p className="text-center">
                                              Continue
                                            </p>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="StyledTextButton-button"
                                  style={{
                                    // paddingTop: "7px",
                                    height: "32px",
                                    marginLeft: "4px",
                                    marginRight: "4px",
                                  }}
                                >
                                  <button
                                    type="button"
                                    class="btn replace"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalreplace"
                                  >
                                    Replace
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* <div className="knowMoreReplacement-calloutContainer">
                            
                              <p
                                className="text-common text-subHead1  "
                                style={{
                                  color: "rgb(104, 107, 119)",
                                  marginLeft: "5px",
                                }}
                              >
                                Replacement is available
                              </p>
                              <div className="knowMoreReplacement-pillNew">
                                <p
                                  className="text-common text-label  "
                                  style={{ color: "rgb(255, 255, 255)" }}
                                >
                                  NEW
                                </p>
                              </div>
                              <button
                                className="
                                        visionbutton-button
                                        visionbutton-l
                                        visionbutton-primary
                                        visionbutton-text
                                        knowMoreReplacement-knowMoreButton
                                      "
                              >
                                Know More
                              </button>
                            </div> */}
                          </div>

                          <div className="ItemList-itemView">
                            <div className="ProductList-itemInfoForItemList  false">
                              <div role="link" tabindex="0">
                                <div className="ProductList-imageAndDetails">
                                  <div
                                    className="ProductList-thumbnail"
                                    role="link"
                                    tabindex="0"
                                  >
                                    <div
                                      style={{
                                        background: "rgb(244, 255, 249)",
                                        height: "70px",
                                        width: " 53px",
                                        borderRadius: "2px",
                                      }}
                                    >
                                      <div
                                        className="LazyLoad is-visible"
                                        style={{
                                          height: "70px",
                                          width: "53px",
                                        }}
                                      >
                                        <picture
                                          className="image-imgResponsiveNew"
                                          style={{ width: "100%" }}
                                        >
                                          <source
                                            srcset={
                                              "https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/17251470/2022/3/10/81b3ab9f-1f9d-4820-b072-bba4caaff25e1646890035269-Varanga-Magenta-Silk-Kurta-With-Woven-Yoke-And-Fully-Elastic-1.webp"
                                            }
                                            type="image/webp"
                                          />
                                          <img
                                            src={
                                              "https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/17251470/2022/3/10/81b3ab9f-1f9d-4820-b072-bba4caaff25e1646890035269-Varanga-Magenta-Silk-Kurta-With-Woven-Yoke-And-Fully-Elastic-1.jpg"
                                            }
                                            className="image-imgResponsiveNew"
                                            style={{
                                              borderRadius: "2px",
                                              width: "100%",
                                            }}
                                            alt="test"
                                          />
                                        </picture>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="ProductList-details ProductList-content_justify">
                                    <div className="ProductList-bold">
                                      <span className="Text-Text">Varanga</span>
                                    </div>
                                    <div className="ProductList-productName">
                                      <span className="Text-Text">
                                        {" "}
                                        Women Magenta &amp; Golden Ethnic Motifs
                                        Yoke Design Kurta with Trousers &amp;
                                        Dupatta
                                      </span>
                                    </div>
                                    <div className="ProductList-size">
                                      <span className="Text-Text">
                                        Size: XL
                                      </span>
                                    </div>
                                  </div>
                                  <div className="ProductList-arrowIcon">
                                    <span
                                      className="svgImages-svg svgImages-grayArrow "
                                      style={{ width: "24px", height: "24px" }}
                                    ></span>
                                  </div>
                                </div>
                              </div>
                              <div className="ProductList-actionButtonsStyles">
                                <div className="StyledTextButton-button">
                                  <button
                                    type="button"
                                    class="btn cancel"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalcancle"
                                  >
                                    Cancel
                                  </button>
                                </div>
                                {/* popup for cancel */}

                                <div
                                  class="modal fade"
                                  id="exampleModalToggle"
                                  aria-hidden="true"
                                  aria-labelledby="exampleModalToggleLabel"
                                  tabindex="-1"
                                >
                                  <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h1
                                          class="modal-title fs-5 text-center"
                                          id="exampleModalToggleLabel"
                                        >
                                          <div className="rigth">
                                            <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                                          </div>
                                          Order Cancelled
                                        </h1>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        <p className="item1">
                                          1 item is cancelled
                                        </p>
                                        <div className="ProductList-itemInfoForItemList  false">
                                          <div role="link" tabindex="0">
                                            <div className="ProductList-imageAndDetails">
                                              <div
                                                className="ProductList-thumbnail"
                                                role="link"
                                                tabindex="0"
                                              >
                                                <div
                                                  style={{
                                                    background:
                                                      "rgb(244, 255, 249)",
                                                    height: "70px",
                                                    width: " 53px",
                                                    borderRadius: "2px",
                                                  }}
                                                >
                                                  <div
                                                    className="LazyLoad is-visible"
                                                    style={{
                                                      height: "70px",
                                                      width: "53px",
                                                    }}
                                                  >
                                                    <picture
                                                      className="image-imgResponsiveNew"
                                                      style={{ width: "100%" }}
                                                    >
                                                      <source
                                                        srcset={
                                                          "https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/17251470/2022/3/10/81b3ab9f-1f9d-4820-b072-bba4caaff25e1646890035269-Varanga-Magenta-Silk-Kurta-With-Woven-Yoke-And-Fully-Elastic-1.webp"
                                                        }
                                                        type="image/webp"
                                                      />
                                                      <img
                                                        src={
                                                          "https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/17251470/2022/3/10/81b3ab9f-1f9d-4820-b072-bba4caaff25e1646890035269-Varanga-Magenta-Silk-Kurta-With-Woven-Yoke-And-Fully-Elastic-1.jpg"
                                                        }
                                                        className="image-imgResponsiveNew"
                                                        style={{
                                                          borderRadius: "2px",
                                                          width: "100%",
                                                        }}
                                                        alt="test"
                                                      />
                                                    </picture>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="ProductList-details ProductList-content_justify">
                                                <div className="ProductList-bold">
                                                  <span className="Text-Text">
                                                    Varanga
                                                  </span>
                                                </div>
                                                <div className="ProductList-productName">
                                                  <span className="Text-Text">
                                                    {" "}
                                                    Women Magenta &amp; Golden
                                                    Ethnic Motifs Yoke Design
                                                    Kurta with Trousers &amp;
                                                    Dupatta
                                                  </span>
                                                </div>
                                                <div className="ProductList-size">
                                                  <span className="Text-Text">
                                                    Size: XL
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="ProductList-arrowIcon">
                                                <span
                                                  className="svgImages-svg svgImages-grayArrow "
                                                  style={{
                                                    width: "24px",
                                                    height: "24px",
                                                  }}
                                                ></span>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="ProductList-actionButtonsStyles">
                                            <div className="StyledTextButton-button"></div>
                                            {/* popup for cancel */}

                                            <div
                                              class="modal fade"
                                              id="exampleModalcancle"
                                              tabindex="-1"
                                              aria-labelledby="exampleModalLabel"
                                              aria-hidden="true"
                                            >
                                              <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                  <div class="modal-header">
                                                    <h1
                                                      class="modal-title fs-5"
                                                      id="exampleModalLabel"
                                                    >
                                                      <p className="reason">
                                                        Reasons For Cancellation
                                                      </p>
                                                      <p className="please">
                                                        please tell us correct
                                                        reason for cancellation
                                                      </p>
                                                    </h1>
                                                    <button
                                                      type="button"
                                                      class="btn-close"
                                                      data-bs-dismiss="modal"
                                                      aria-label="Close"
                                                    ></button>
                                                  </div>
                                                  <div class="modal-body">
                                                    {/* 1st option */}
                                                    <div class="form-check">
                                                      <div className="option">
                                                        {/* 2nd option */}
                                                        <div class="accordion-item">
                                                          <h2
                                                            class="accordion-header"
                                                            id="flush-headingTwo"
                                                          >
                                                            <button
                                                              class="accordion-button collapsed"
                                                              type="button"
                                                              data-bs-toggle="collapse"
                                                              data-bs-target="#flush-collapseTwo"
                                                              aria-expanded="false"
                                                              aria-controls="flush-collapseTwo"
                                                            >
                                                              <input
                                                                class="form-check-input"
                                                                type="radio"
                                                                name="exampleRadios"
                                                                id="exampleRadios1"
                                                                value="option1"
                                                                checked
                                                              />
                                                              incorrect size
                                                              ordered
                                                            </button>
                                                          </h2>
                                                          <div
                                                            id="flush-collapseTwo"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingTwo"
                                                            data-bs-parent="#accordionFlushExample"
                                                          >
                                                            <div class="accordion-body">
                                                              {" "}
                                                              <h4 className="want">
                                                                Want a different
                                                                size?
                                                              </h4>
                                                              <p className="get">
                                                                You can get a
                                                                different size
                                                                and get a item
                                                                delivered to you
                                                              </p>
                                                              <p className="change">
                                                                Change Size
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    {/* 2nd option */}
                                                    <div class="form-check">
                                                      <div className="option">
                                                        <div class="accordion-item">
                                                          <h2
                                                            class="accordion-header"
                                                            id="flush-headingOne"
                                                          >
                                                            <button
                                                              class="accordion-button collapsed"
                                                              type="button"
                                                              data-bs-toggle="collapse"
                                                              data-bs-target="#flush-collapseOne"
                                                              aria-expanded="false"
                                                              aria-controls="flush-collapseOne"
                                                            >
                                                              <input
                                                                class="form-check-input"
                                                                type="radio"
                                                                name="exampleRadios"
                                                                id="exampleRadios1"
                                                                value="option1"
                                                                checked
                                                              />
                                                              cash issue
                                                            </button>
                                                          </h2>
                                                          <div
                                                            id="flush-collapseOne"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="flush-heading"
                                                            data-bs-parent="#accordionFlushExample"
                                                          >
                                                            <div class="accordion-body">
                                                              {" "}
                                                              <h4 className="want">
                                                                Want a different
                                                                size?
                                                              </h4>
                                                              <p className="get">
                                                                You can get a
                                                                different size
                                                                and get a item
                                                                delivered to you
                                                              </p>
                                                              <p className="change">
                                                                Change Size
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    {/* 3rd option */}
                                                    <div class="form-check">
                                                      <div className="option">
                                                        <div class="accordion-item">
                                                          <h2
                                                            class="accordion-header"
                                                            id="flush-headingThree"
                                                          >
                                                            <button
                                                              class="accordion-button collapsed"
                                                              type="button"
                                                              data-bs-toggle="collapse"
                                                              data-bs-target="#flush-collapseThree"
                                                              aria-expanded="false"
                                                              aria-controls="flush-collapseThree"
                                                            >
                                                              <input
                                                                class="form-check-input"
                                                                type="radio"
                                                                name="exampleRadios"
                                                                id="exampleRadios1"
                                                                value="option1"
                                                                checked
                                                              />
                                                              ordered by mistake
                                                            </button>
                                                          </h2>
                                                          <div
                                                            id="flush-collapseThree"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="flush-heading"
                                                            data-bs-parent="#accordionFlushExample"
                                                          >
                                                            <div class="accordion-body">
                                                              {" "}
                                                              <h4 className="want">
                                                                Want a different
                                                                size?
                                                              </h4>
                                                              <p className="get">
                                                                You can get a
                                                                different size
                                                                and get a item
                                                                delivered to you
                                                              </p>
                                                              <p className="change">
                                                                Change Size
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    {/* 4th option */}
                                                    <div class="form-check">
                                                      <div className="option">
                                                        <div class="accordion-item">
                                                          <h2
                                                            class="accordion-header"
                                                            id="flush-headingFour"
                                                          >
                                                            <button
                                                              class="accordion-button collapsed"
                                                              type="button"
                                                              data-bs-toggle="collapse"
                                                              data-bs-target="#flush-collapseFour"
                                                              aria-expanded="false"
                                                              aria-controls="flush-collapseFour"
                                                            >
                                                              <input
                                                                class="form-check-input"
                                                                type="radio"
                                                                name="exampleRadios"
                                                                id="exampleRadios1"
                                                                value="option1"
                                                                checked
                                                              />
                                                              duplicate order
                                                            </button>
                                                          </h2>
                                                          <div
                                                            id="flush-collapseFour"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="flush-heading"
                                                            data-bs-parent="#accordionFlushExample"
                                                          >
                                                            <div class="accordion-body">
                                                              {" "}
                                                              <h4 className="want">
                                                                Want a different
                                                                size?
                                                              </h4>
                                                              <p className="get">
                                                                You can get a
                                                                different size
                                                                and get a item
                                                                delivered to you
                                                              </p>
                                                              <p className="change">
                                                                Change Size
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    {/* 5th option */}
                                                    <div class="form-check">
                                                      <div className="option">
                                                        <div class="accordion-item">
                                                          <h2
                                                            class="accordion-header"
                                                            id="flush-headingFive"
                                                          >
                                                            <button
                                                              class="accordion-button collapsed"
                                                              type="button"
                                                              data-bs-toggle="collapse"
                                                              data-bs-target="#flush-collapseFive"
                                                              aria-expanded="false"
                                                              aria-controls="flush-collapseFive"
                                                            >
                                                              <input
                                                                class="form-check-input"
                                                                type="radio"
                                                                name="exampleRadios"
                                                                id="exampleRadios1"
                                                                value="option1"
                                                                checked
                                                              />
                                                              want to change
                                                              style color
                                                            </button>
                                                          </h2>
                                                          <div
                                                            id="flush-collapseFive"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="flush-heading"
                                                            data-bs-parent="#accordionFlushExample"
                                                          >
                                                            <div class="accordion-body">
                                                              <h4 className="want">
                                                                Want a different
                                                                size?
                                                              </h4>
                                                              <p className="get">
                                                                You can get a
                                                                different size
                                                                and get a item
                                                                delivered to you
                                                              </p>
                                                              <p className="change">
                                                                Change Size
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div class="modal-footer"></div>
                                                </div>
                                              </div>
                                            </div>
                                            {/* Cancel-order popup */}
                                          </div>
                                        </div>
                                      </div>
                                      <div class="modal-footer"></div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  class="modal fade"
                                  id="exampleModalToggle2"
                                  aria-hidden="true"
                                  aria-labelledby="exampleModalToggleLabel2"
                                  tabindex="-1"
                                >
                                  <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h1
                                          class="modal-title fs-5"
                                          id="exampleModalToggleLabel2"
                                        >
                                          Modal 2
                                        </h1>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        Hide this modal and show the first with
                                        the button below.
                                      </div>
                                      <div class="modal-footer">
                                        <button
                                          class="btn btn-primary"
                                          data-bs-target="#exampleModalToggle"
                                          data-bs-toggle="modal"
                                        >
                                          Back to first
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  class="modal fade"
                                  id="exampleModalcancle"
                                  tabindex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h1
                                          class="modal-title fs-5"
                                          id="exampleModalLabel"
                                        >
                                          Select Reason
                                        </h1>
                                        <button
                                          type="button"
                                          class="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div class="modal-body">
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            id="exampleRadios1"
                                            value="option1"
                                            checked
                                          />
                                          <label
                                            class="form-check-label"
                                            for="exampleRadios1"
                                          >
                                            incorrect size ordered
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            id="exampleRadios"
                                            value="option2"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="exampleRadios2"
                                          >
                                            product not required anymore
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            id="exampleRadios"
                                            value="option3"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="exampleRadios3"
                                          >
                                            cash issue
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            id="exampleRadios"
                                            value="option4"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="exampleRadios4"
                                          >
                                            ordered by mistake
                                          </label>
                                        </div>
                                        <div class="form-check">
                                          <input
                                            class="form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            id="exampleRadios"
                                            value="option5"
                                          />
                                          <label
                                            class="form-check-label"
                                            for="exampleRadios5"
                                          >
                                            Duplicate order
                                          </label>
                                        </div>
                                      </div>
                                      <div class="modal-footer">
                                        <button
                                          type="button"
                                          class="btn continue"
                                          data-bs-dismiss="modal"
                                        >
                                          <p className="text-center">
                                            Continue
                                          </p>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="StyledTextButton-button"
                                  style={{
                                    // paddingTop: "7px",
                                    height: "32px",
                                    marginLeft: "4px",
                                    marginRight: "4px",
                                  }}
                                >
                                  <button
                                    type="button"
                                    class="btn replace"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalreplace"
                                  >
                                    Replace
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pagination-pagination">
                          <span>Showing 1 -2 of 2</span>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="wishlist">
                    Hey! Your WishList is empty
                  </Tab.Pane>
                  <Tab.Pane eventKey="address">

                  <div className="row">
                      <div className="col-md-12">
                        <div className="Delivary-main">
                          <div class="d-flex">
                            <h4 className="delivery">Delivery Address</h4>
                            <div class="button-holder-1 ">
                              <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModaladd"
                                class="btn btn-address"
                              >
                                Add New Address
                              </button>
                            </div>
                          </div>
                          <div class="border-box">
                            <div class="form-check   my-3">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                checked=""
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Komal Nathe
                                <button class="btn btn-home ms-2">HOME</button>
                                <p>
                                  Bhavdhan patil nagar pune maharashtra-411021
                                </p>
                                <p>mobile:123456789</p>
                              </label>
                            </div>
                            <div class="edit-remove ms-3 mb-3">
                              <button class="btn btn-remove ">REMOVE</button>
                              <button class="btn btn-remove ms-2">EDIT</button>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>


                  {/*****add modal start******* */}
                <div className="cart-section">
                  <div className='address'>
                      <div className="modal fade" id="exampleModaladd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog modal-dialog-scrollable">
                              <div className="modal-content">
                                  <div className="modal-header">
                                      <h1 className="modal-title " id="exampleModalLabel">ADD NEW ADDRESS</h1>
                                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                      <form className="row g-3  mt-2">
                                          <div class="mb-2">
                                              <label for="recipient-name" className="col-form-label">CONTACT DETAILS</label>
                                              <input type="text" className="form-control" placeholder='Name*' />
                                          </div>
                                          <div class="mb-2">
                                              <input type="text" className="form-control" placeholder='Mobile No.*' />
                                          </div>
                                          <div class="mb-2">
                                              <input type="email" className="form-control" placeholder='Email*' />
                                          </div>
                                          <div class="mb-2">
                                              <label for="recipient-name" className="col-form-label">ADDRESS</label>
                                              <input type="text" className="form-control" placeholder='Pin Code*' />
                                          </div>
                                          <div class="mb-2">
                                              <input type="text" className="form-control" placeholder='Address*' />
                                          </div>
                                          <div class="mb-2">
                                              <input type="text" className="form-control" placeholder='Locality/Town*' />
                                          </div>
                                          <div class="col-md-6 mb-3">
                                              <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                  <option selected>City/District*</option>
                                                  <option value="1">One</option>
                                                  <option value="2">Two</option>
                                                  <option value="3">Three</option>
                                              </select>
                                          </div>
                                          <div class="col-md-6 mb-3">
                                              <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                  <option selected>State*</option>
                                                  <option value="1">One</option>
                                                  <option value="2">Two</option>
                                                  <option value="3">Three</option>
                                              </select>
                                          </div>
                                          <div className='save-add'>
                                              <h6>SAVE ADDRESS AS</h6>
                                              <button className='btn btn-home me-2'>HOME</button>
                                              <button className='btn btn-home'>WORK</button>
                                          </div>
                                          <div class="form-check">
                                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                              <label class="form-check-label" for="flexCheckDefault">
                                                  Make This My  Default Address
                                              </label>
                                          </div>
                                      </form>
                                  </div>
                                  <div class="modal-footer">
                                      <div className='col-md-12'>
                                          <button type="button" className="btn btn-priadd"> ADD ADDRESS</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
                    
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>




  );
};

export default Profile;
