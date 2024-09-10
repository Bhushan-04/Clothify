import { useEffect, useState, useContext ,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { AiOutlineUser } from "react-icons/ai";
import { useLocation } from 'react-router-dom';
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import proimg from '../../assets/black1.webp';
import Logo from "../Header/image/cover-removebg-preview(1).png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useNavDropdownHover from './useNavDropdownHover';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cartCount, showCart, setShowCart, signin, setSignin, userdata } = useContext(Context);
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [showDropdownMen, refMen] = useNavDropdownHover();
    const [showDropdownWomen, refWomen] = useNavDropdownHover();
    const [showDropdownKids, refKids] = useNavDropdownHover();
    const [showDropdownOrganicTees, refOrganicTees] = useNavDropdownHover();
    const [showDropdownHippies, refHippies] = useNavDropdownHover();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    const searchRef = useRef();

  

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const items = [
        {
          id: 0,
          name: "Cobol",
        },
        {
          id: 1,
          name: "JavaScript",
        },
        {
          id: 2,
          name: "Basic",
        },
        {
          id: 3,
          name: "PHP",
        },
        {
          id: 4,
          name: "Java",
        },
      ];

    const handleOnSearch = (string, results) => {
        console.log(string, results);
      };
    
      const handleOnHover = (result) => {
        //  handleClick()
        console.log(result);
      };
    
      const handleOnSelect = (item) => {
        console.log(item);
      };
    
      const handleOnFocus = () => {
        // handleClick()

        console.log("Focused");
      };
    
      const handleOnClear = () => {
        console.log("Cleared");
      };




    //   function handleClick(el) {
    //     el.classList.toggle('extend-form-search');

    // }

    const [isActive, setIsActive] = useState(false);



    useEffect(() => {
        // console.log(searchRef);
        if (isActive && searchRef.current) {
            setTimeout(() => {
                searchRef.current.focus();
              }, 10);
        }
      }, [isActive]);



      const handleClick = () => {
        setIsActive(!isActive);
      };

    //   constructor(props) {
    //     super(props);
    //     this.state = {addClass: false}
    //   }
    //   toggle() {
    //     this.setState({addClass: !this.state.addClass});
    //   }
    //   render() {
    //     let boxClass = ["box"];
    //     if(this.state.addClass) {
    //       boxClass.push('green');
    //     }



    return (
        <>
            {location.pathname !== '/login' && location.pathname !== '/verifyotp' && location.pathname !== '/email' &&
                <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                    <Navbar bg="black" expand="lg">
                        <Navbar.Brand onClick={() => navigate("/")}>
                            <img className="head-logo-set" src={Logo} alt="Hippikart Logo"  srcSet={Logo} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse className="justify-content-xl-center" id="basic-navbar-nav">
                            <Nav className="" style={{  }}>
                                <NavDropdown title="Men" id="basic-nav-dropdown" show={showDropdownMen} ref={refMen} onClick={() => navigate("/mens")}>
                                    <NavDropdown.Item href="#action/3.2" onClick={() => navigate("/mens")}>Polos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" onClick={() => navigate("/mens")}> Round Neck</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" onClick={() => navigate("/mens")}>V-Neck</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" onClick={() => navigate("/mens")}>Over-Sized</NavDropdown.Item>
                                </NavDropdown>
                                &nbsp;&nbsp;&nbsp;
                                <NavDropdown title="Female" id="basic-nav-dropdown" show={showDropdownWomen} ref={refWomen} onClick={() => navigate("/category")}>
                                    <NavDropdown.Item href="#action/3.2" onClick={() => navigate("/category")}>Tops</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" onClick={() => navigate("/category")}>Printed Tops</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" onClick={() => navigate("/category")}>Nack Tops</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" onClick={() => navigate("/category")}>Crop Tops</NavDropdown.Item>
                                </NavDropdown>
                                &nbsp;&nbsp;&nbsp;
                                <NavDropdown title="Kids" id="basic-nav-dropdown" show={showDropdownKids} ref={refKids} onClick={() => navigate("/Category")}>
                                    <NavDropdown.Item href="#action/3.4">Kids Categories</NavDropdown.Item>
                                </NavDropdown>
                                &nbsp;&nbsp;&nbsp;
                                <NavDropdown title="Organic Tees" id="basic-nav-dropdown" show={showDropdownOrganicTees} ref={refOrganicTees} onClick={() => navigate("/Category")}>
                                    <NavDropdown.Item href="#action/3.4" onClick={() => navigate("/Category")}>Round Neck</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4" onClick={() => navigate("/Category")}>V-Neck</NavDropdown.Item>
                                </NavDropdown>
                                &nbsp;&nbsp;&nbsp;

                                <NavDropdown title="Hippies" id="basic-nav-dropdown" show={showDropdownHippies} ref={refHippies} onClick={() => navigate("/Category")}>
                                    <NavDropdown.Item href="#action/3.4 " onClick={() => navigate("/Category")}>90 Collection</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4" onClick={() => navigate("/Category")}>Rugged Wear</NavDropdown.Item>
                                </NavDropdown>
                                &nbsp;&nbsp;&nbsp;

                               
                                <NavDropdown title="Track Order" id="basic-nav-dropdown" data-bs-toggle="modal" data-bs-target="#trackmodal">
                                   
                                </NavDropdown>
                                &nbsp;&nbsp;&nbsp;
                                
                                
                                <Link to="/aboutus"><span className="text"><p className="about mt-3">About</p></span></Link>                               

                                &nbsp;&nbsp;&nbsp;
                            </Nav>


                            <ul className="navbar-nav nav-social-icons-position">

                                <li className="nav-item">
                                    <Nav.Link className=" text-dark text-lg headfafa-set" >
                                        {/* <TbSearch  /> */}

                                        <div className="infut-entend-div">
                                            <div className="">

                                                <div  >
                                                    <div className="d-flex my-auto search-icon-div">
                                                        <input placeholder="Search here" className={isActive ? "form-control extend-form-search" :"form-control"}  autoComplete="on" list="suggestions"/>
                                                        <FontAwesomeIcon onClick={handleClick} icon="fa-solid fa-magnifying-glass" /> 
                                                    </div>
                                                    
                                                    <datalist id="suggestions">
                                                        <option>First option</option>
                                                        <option>Second Option</option>
                                                    </datalist>
                                                    
                                                </div>

                                                {/* <div className="search-icon-div d-flex my-auto">
                                                    <div  className="search-input-div me-4" onClick={handleClick}>                                                
                                                   
                                                    <ReactSearchAutocomplete   autoFocus
                                                    className={isActive ? "form-control extend-form-search" :"form-control"} placeholder="Search Here"
                                                        items={items}
                                                        onSearch={handleOnSearch}
                                                        onHover={handleOnHover}
                                                        ref={searchRef}
                                                        onSelect={handleOnSelect}
                                                        onFocus={handleOnFocus}
                                                        onClear={handleOnClear}
                                                        styling={{ zIndex: 99999999 }} 
                                                        
                                                    />
                                                    </div>                                                     
                                                </div>   
                                                
                                                */}
                                            </div>
                                            
                                            
                                        </div>
                                    </Nav.Link>    
                                </li>

                                <li className="nav-item">
                                <Nav.Link className=" text-dark text-lg headfafa-set" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight" ><FaShoppingCart /></Nav.Link>
                                </li>
                                    
                                <li className="nav-item">
                                {signin ?
                                        (<>
                                            
                                            <Nav.Link className=" text-dark text-lg headfafa-set" onClick={() => navigate("/profile")}> <img src={userdata.avatar} className="rounded-circle" height={50} width={50} alt="profile" /></Nav.Link>
                                        </>
                                        )
                                        : (
                                            <Nav.Link className=" text-dark text-lg headfafa-set" onClick={() => navigate("/login")}><AiOutlineUser /></Nav.Link>
                                        )
                                    }
                                </li>    

                                    

                                <li className="nav-item">
                                <Nav.Link className=" text-dark text-lg headfafa-set" onClick={() => navigate("/wishlist")}><AiOutlineHeart />
                                    </Nav.Link>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Navbar>
                </header>}
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
            {/* {signin && <Cart title="Get Sign Up" content={"1"} />} */}


            <section className="cart-offcanvas">
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight2"
                    aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header text-center mt-4">
                        {/* <h5 id="offcanvasRightLabel" className="sub-title">2 Item</h5> */}

                        <h5 id="offcanvasRightLabel" className="title">Cart</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>

                    </div>
                    <div className="offcanvas-body p-0">
                        <div className="overflow-canvas">
                            <div className="mb-1 bd-bottom">
                                <div className="card card-set">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4 col-4 ">
                                            <div className="img-div">
                                                <img src={proimg} className='pro1-img' alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-sm-8 col-8">
                                            <div className="select-product-div">
                                                <h6 className="pro-name">WOMENS SHORT SLEEVE V NECK WHITE / S</h6>
                                                <p className="cart-price">₹5</p>
                                                <div className="d-flex add-cart-box">
                                                    <button className="minus btn">-</button>
                                                    <div className="quantity">1
                                                    </div>
                                                    <button className="add btn">+</button>
                                                </div>
                                                <span className="remove">Remove</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-1 bd-bottom">
                                <div className="card card-set">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4 col-4 ">
                                            <div className="img-div">
                                                <img src={proimg} className='pro1-img' alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-sm-8 col-8">
                                            <div className="select-product-div">
                                                <h6 className="pro-name">WOMENS SHORT SLEEVE V NECK WHITE / S</h6>
                                                <p className="cart-price">₹5</p>
                                                <div className="d-flex add-cart-box">
                                                    <button className="minus btn">-</button>
                                                    <div className="quantity">1
                                                    </div>
                                                    <button className="add btn">+</button>
                                                </div>
                                                <span className="remove">Remove</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mb-1 bd-bottom">
                                <div className="card card-set">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4 col-4 ">
                                            <div className="img-div">
                                                <img src={proimg} className='pro1-img' alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-sm-8 col-8">
                                            <div className="select-product-div">
                                                <h6 className="pro-name">WOMENS SHORT SLEEVE V NECK WHITE / S</h6>
                                                <p className="cart-price">₹5</p>
                                                <div className="d-flex add-cart-box">
                                                    <button className="minus btn">-</button>
                                                    <div className="quantity">1
                                                    </div>
                                                    <button className="add btn">+</button>
                                                </div>
                                                <span className="remove">Remove</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mb-1 bd-bottom">
                            <div className="row price-row">
                                <div className="col-9">
                                    <p className="price-row-1">Total amount</p>
                                </div>
                                <div className="col-3">
                                    <p className="price-row-2">₹0</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-1 bd-bottom">
                            <div className="row price-row">
                                <div className="col-9">
                                    <p className="price-row-1">Discount</p>
                                </div>
                                <div className="col-3">
                                    <p className="price-row-2">₹0</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-1 bd-bottom">
                            <div className="row price-row">
                                <div className="col-7">
                                    <input className="form-control couponcode-input" placeholder="Coupon code" />
                                </div>
                                <div className="col-5">
                                    <button className="applycoupon btn" data-bs-toggle="modal" type="button"
                                        data-bs-target="#changemodal">Apply Coupon </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-1 bd-bottom">
                            <div className="row price-row">
                                <div className="col-9">
                                    <p className="price-row-1">Tax</p>
                                </div>
                                <div className="col-3">
                                    <p className="price-row-2">₹3</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-1 bd-bottom">
                            <div className="row price-row">
                                <div className="col-9">
                                    <p className="price-row-1">Shipping</p>
                                </div>
                                <div className="col-3">
                                    <p className="price-row-2">$380</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-1 bd-bottom">
                            <div className="row price-row">
                                <div className="col-9">
                                    <p className="price-row-1">Grand Total</p>
                                </div>
                                <div className="col-3">
                                    <p className="price-row-2">₹380</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4">
                            <button className="btn inquiry-btn" onClick={() => navigate("/cart")}>View cart and
                                Checkout</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end cart offcanvas section  --> */}

            {/*track order modal start */}
            <section className="track-order">
                <div class="modal fade" id="trackmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog  modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title fs-5" id="exampleModalLabel">Track Details</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <input type="text" class="form-control" placeholder="Order No."></input>
                                    <div className="track-order text-center mt-3">
                                        <button className="btn btn-track" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Track Order</button>
                                    </div>
                                    <div className="collapse" id="collapseExample">
                                        <div className="card card-body mt-2">
                                            <div className="Tracking border-star pb-3">
                                                <div className="steps">
                                                    <div className="step">
                                                        <div className="step-header">
                                                            <div className="header">Order Placed</div>
                                                            <div className="subheader">03:23 PM, 21 july 2023</div>
                                                        </div>
                                                        {/* <div className="step-content one">
                                                            <button className="next-btn">Next</button>
                                                        </div> */}
                                                    </div>
                                                    <div className="step minimized">
                                                        <div className="step-header">
                                                            <div className="header">Shipped</div>
                                                            <div className="subheader">22 july, 2023</div>
                                                        </div>
                                                        {/* <div className="step-content two">
                                                            <button className="next-btn">Next</button>
                                                        </div> */}
                                                    </div>
                                                    <div className="step minimized">
                                                        <div className="step-header">
                                                            <div className="header">Estimate Delivery</div>
                                                            <div className="subheader">26 july, 2023</div>
                                                        </div>
                                                        {/* <div className="step-content three">
                                                            <button className="close-btn">Close</button>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
