import React from "react";
import { useLocation } from 'react-router-dom';
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"
import Payment from "../../assets/payments.png";
import Logo from "../../assets/Hippikart_Footer_Logo.png";

const Footer = () => {
    const category = [
        { name: "Polos" },
        { name: "Round Neck" },
        { name: "V-Neck" },
        { name: "Over-Sized" },
        { name: "Tops" },
        { name: "Printed Tops" },
        { name: "Nack Tops" },
        { name: "Crop Tops" },
        { name: "Dynamic Kids Categories" }];

        const Pages = [
            { name: "Home",link:"/" },
            { name: "About",link:"/AboutUs" },
            { name: "Privacy Policy" ,link:"/privacy-and-policy" },
            { name: "Returns",link:"#"  },
            { name: "Terms & Conditions",link:"/terms-and-condition"  },
            { name: "Terms & Privacy",link:"/TermsPrivacy"  },
            { name: "Blog",link:"/Blog"  },
            { name: "Faq",link:"/Faq"  },
            { name: "Reviews",link:"/Reviews"  }
        ];
    const location = useLocation();
    // console.log(location.pathname);
    return (
        <div className="footer">
            {location.pathname !== '/login' && location.pathname !== '/verifyotp' && location.pathname !== '/email' &&
                <div className="footer-content">
                    <div className="col">
                        <img className="footer-logo" src={Logo} alt="Hippikart Logo" width={200} srcSet={Logo} />
                        <div className="title mt-3">About</div>
                        <div className="text">
                            Voluptatem accusantium doloremque laudantium, totam rem
                            aperiam, eaque ipsa quae ab illo inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo eaque
                            ipsa quae ab illo.
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Contact</div>
                        <div className="c-item">
                            <FaLocationArrow />
                            <div className="text">
                                Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha,
                                Kerala, 688006
                            </div>
                        </div>
                        <div className="c-item">
                            <FaMobileAlt />
                            <div className="text">Phone: 0471 272 0261</div>
                        </div>
                        <div className="c-item">
                            <FaEnvelope />
                            <div className="text">Email: store@jsdev.com</div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="title">Categories</div>
                        {category.map((element, index) => {
                            return (<Link  key={index} to="/category">  <span className="text">{element.name}</span></Link>)
                        })}
                    </div>
                    
                    <div className="col">
                        <div className="title">Pages</div>
                        {Pages.map((element, index) => {
                            return (<Link  key={index} to={element.link}>  <span className="text">{element.name}</span></Link>)
                        })}                        
                        {/* <Link to="/"><span className="text">Home</span></Link>
                        <Link to="/AboutUs"><span className="text">About</span></Link>
                        <Link to="/privacy-and-policy"><span className="text">Privacy Policy</span></Link>
                        <Link to="/"><span className="text">Returns</span></Link>
                        <Link to="/terms-and-condition"><span className="text">Terms & Conditions</span></Link>
                        <Link to="/TermsPrivacy"><span className="text">Terms & Privacy</span></Link>
                        <Link to="/Blog"><span className="text">Blog</span></Link>
                        <Link to="/Faq"><span className="text">Faq</span></Link>
                        <Link to="/Reviews"><span className="text">Reviews</span></Link> */}
                    </div>
                </div>
            }
            <div className="bottom-bar col-lg-12">
                <div className="bottom-bar-content">
                    <span className="text">
                        By @Hippikart.com
                    </span>
                    <img src={Payment} alt="payments" />
                </div>
            </div>

        </div>
    );
};

export default Footer;
