import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ image, image2 = '', type, name, desc = '', price = 0 }) => {
    const navigate = useNavigate();
    const [imageUrl, setimageUrl] = useState('');
    const mouseInOutfun = () => {
        setimageUrl(prev => prev == image ? image2 : image);
    }
    useEffect(() => {
        setimageUrl(image)
    }, [image]);
    return (
        <>
            {type === '1' &&
                // <div className="product-card"  onClick={() => navigate("/product/" + 1)} >
                <div className="product-card" onClick={() => navigate("/category")} >
                    <div className="thumbnail">
                        <img src={image} alt="" height={300} width={300} />
                    </div>
                    <div className="prod-details">
                        <span className="name text-center">{name}</span>
                        <span className="desc d-block">{desc}</span>
                        {/* <span className="price-class"> {price} <span className="not-offer-prise"></span></span> */}
                    </div>
                </div>}

            {type === '2' &&
                <div className="product-card mb-3" data-aos="zoom-in" onClick={() => navigate("/mens", { state: { category: name } })} >
                    <div className="thumbnail">
                        <img src={image} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">{name}</span>
                    </div>
                </div>}

            {type === '3' &&
                <div className="product-card">
                    {/* <div onClick={() => navigate("/product/" + 1)} className="thumbnail"> */}
                    <div onClick={() => navigate("/Mens")} className="thumbnail">
                        <img src={image} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">Printed T-shirt || Mens Clothing</span>
                        <span className="desc">Exclusize collection</span>
                        <div className="mt-3 d-flex flex-wrap justify-content-evenly colors">
                            <button className="btn active-color"><span className="colors-cont" style={{ background: '#ccc' }}></span></button>
                            <button className="btn"><span className="colors-cont" style={{ background: 'orange' }}></span></button>
                            <button className="btn"><span className="colors-cont" style={{ background: '#fcfcfc' }}></span></button>
                            <button className="btn"><span className="colors-cont" style={{ background: '#fff' }}></span></button>
                            <button className="btn"><span className="colors-cont" style={{ background: 'blue' }}></span></button>
                            <button className="btn"><span className="colors-cont" style={{ background: '#eee' }}></span></button>
                        </div>
                    </div>
                </div>}
            {type === '4' &&
                <div className="product-card mb-3" data-aos="zoom-in" onClick={() => navigate("/Mens", { state: { category: name } })} >
                    <div className="thumbnail image4div" onMouseOver={mouseInOutfun} onMouseOut={mouseInOutfun} data={imageUrl}>
                        <img src={imageUrl} alt="" />
                        <div className="overlay"></div>
                        <div className="prod-details4">
                            <span className="name">{name}</span>
                            <span className="desc d-block">{desc}</span>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default Product;
