import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.css";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import img1 from '../../HowToWear/image/girlimg.webp'
library.add(fas);

const Search = ({ setSearchModal }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    let { data } = useFetch(
        `/api/products?populate=*&filters[title][$contains]=${query}`
    );

    if (!query.length) {
        data = null;
    }

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <Link to="/category">
                    <div className="search-icon ">
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className=""
                            onClick={() => setSearchModal(false)} />
                    </div>
                </Link>
                <MdClose
                    className="close-btn"
                    onClick={() => setSearchModal(false)}
                />
            </div>

            {/* <div className="search-result-content">
                {!data?.data?.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                )}
                <div className="search-results">
                    {data?.data?.map((item) => (
                        <div
                            className="search-result-item"
                            key={item.id}
                            onClick={() => {
                                navigate("/product/" + item.id);
                                setSearchModal(false);
                            }}
                        >
                            <div className="image-container">
                                <img
                                    src={
                                        process.env
                                            .REACT_APP_STRIPE_APP_DEV_URL +
                                        item.attributes.image.data[0].attributes
                                            .url
                                    }
                                />
                            </div>                           
                            <div className="prod-details">
                                <span className="name">
                                    {item.attributes.title}
                                </span>
                                <span className="desc">
                                    {item.attributes.description}
                                </span>
                            </div>

                        </div>
                    ))}
                </div>
            </div> */}
            <div className="row product-item">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="d-flex justify-content-center">
                        <div className=" me-3">
                            <div className="product-class">
                                <img src={img1} alt="..." className="search-img mt-4" />
                            </div>
                        </div>
                        <div className=" mt-4">
                            <div className="product-name-class mt-1">
                                <p> max fashion shirt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="d-flex justify-content-center">
                        <div className=" me-3">
                            <div className="product-class">
                                <img src={img1} alt="..." className="search-img mt-4" />
                            </div>
                        </div>
                        <div className=" mt-4">
                            <div className="product-name-class mt-1">
                                <p> max fashion shirt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="d-flex justify-content-center">
                        <div className=" me-3">
                            <div className="product-class">
                                <img src={img1} alt="..." className="search-img mt-4" />
                            </div>
                        </div>
                        <div className=" mt-4">
                            <div className="product-name-class mt-1">
                                <p> max fashion shirt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
