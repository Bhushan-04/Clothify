import React, { useRef, useState, useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Featurecategory from "../Products/Featurecategory";
import Newsletter from "../Footer/Newsletter/Newsletter";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Usp from "./usp/Usp";

import { Link } from "react-router-dom";


const Home = () => {
    const { products, setProducts, categories, setCategories } = useContext(Context);
    // useEffect(() => {
    //     getProducts();
    //     getCategories();
    // }, []);

    let category = [ 
        { name: "Polos", desc: 'World\' 1st festion with 500-days warranty', image: require('../../assets/categories/polos.webp'), image2: require('../../assets/categories/round_neck.jpg') },
        { name: "Round Neck", desc: 'Exclisively discounted', image: require('../../assets/categories/round_neck.jpg'), image2: require('../../assets/categories/OverSize.jpg')},
        { name: "V-Neck", desc: 'Exclisively discounted', image: require('../../assets/categories/VTShirt.jpg'), image2: require('../../assets/categories/polos.webp')},
        { name: "Over-Sized", desc: 'Exclisively discounted', image: require('../../assets/categories/OverSize.jpg'), image2: require('../../assets/categories/round_neck.jpg')},
        { name: "Tops", desc: 'Exclisively discounted', image: require('../../assets/categories/top.jpg'), image2: require('../../assets/categories/neckTops.jpg')},
        { name: "Printed Tops", desc: 'Exclisively discounted', image: require('../../assets/categories/printedTops.jpg'), image2: require('../../assets/categories/cropTops.jpg')},
        { name: "Nack Tops", desc: 'Exclisively discounted', image: require('../../assets/categories/neckTop.jpg'), image2: require('../../assets/categories/kids.jpg')},
        { name: "Crop Tops", desc: 'Exclisively discounted', image: require('../../assets/categories/cropTops.jpg'), image2: require('../../assets/categories/neckTop.jpg')},
        { name: "Dynamic Kids Categories", desc: 'Exclisively discounted', image: require('../../assets/categories/kids.jpg'), image2: require('../../assets/categories/round_neck.jpg')}];
    let product = [
        { name: "Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: '/static/media/product1.5d7105949718eaeb02ff.jpg', price: "500", pincode: '829134' },
        { name: "Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: '/static/media/product2.e52da3c5f7e948adba89.webp', price: "500", pincode: '829134' },
        { name: "Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: '/static/media/product3.d6e3c51aedc966b910e0.webp', price: "500", pincode: '829134' },
        { name: "Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: '/static/media/product1.5d7105949718eaeb02ff.jpg', price: "500", pincode: '829134' },
        { name: "Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: '/static/media/product1.5d7105949718eaeb02ff.jpg', price: "500", pincode: '829134' },
        { name: "Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: '/static/media/product2.e52da3c5f7e948adba89.webp', price: "500", pincode: '829134' },
        { name: "Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: '/static/media/product1.5d7105949718eaeb02ff.jpg', price: "500", pincode: '829134' },
        { name: "Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: '/static/media/product2.e52da3c5f7e948adba89.webp', price: "500", pincode: '829134' },
        { name: "Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: '/static/media/product3.d6e3c51aedc966b910e0.webp', price: "500", pincode: '829134' }];
    let Pproducts = {
        "women": [
            { name: "Unisex French Terry Box Tee", image: require('../../assets/products/women1.png'), price: "500", pincode: '829134' },
            { name: "Unisex French Terry Box Tee", image: require('../../assets/products/women2.png'), price: "500", pincode: '829134' },
            { name: "Unisex French Terry Box Tee", image: require('../../assets/products/women3.png'), price: "500", pincode: '829134' },
            { name: "Unisex French Terry Box Tee", image: require('../../assets/products/women4.png'), price: "500", pincode: '829134' },
            { name: "Unisex French Terry Box Tee", image: require('../../assets/products/women5.png'), price: "500", pincode: '829134' },
            { name: "Unisex French Terry Box Tee", image: require('../../assets/products/women6.png'), price: "500", pincode: '829134' },
            { name: "Unisex French Terry Box Tee", image: require('../../assets/products/women7.png'), price: "500", pincode: '829134' },
            { name: "Unisex French Terry Box Tee", image: require('../../assets/products/women8.png'), price: "500", pincode: '829134' },
            { name: "Unisex French Terry Box Tee", image: require('../../assets/products/women9.png'), price: "500", pincode: '829134' },
            { name: "Unisex French Terry Box Tee", image: require('../../assets/products/women10.png'), price: "500", pincode: '829134' },
            { name: "Unisex French Terry Box Tee", image: require('../../assets/products/women11.png'), price: "500", pincode: '829134' },
            { name: "Unisex French Terry Box Tee", image: require('../../assets/products/women12.png'), price: "500", pincode: '829134' },],
        "men": [
            { name: "Mens Short Sleeve V Neck", image: require('../../assets/products/men1.png'), price: "500", pincode: '829134' },
            { name: "Mens Short Sleeve V Neck", image: require('../../assets/products/men2.png'), price: "500", pincode: '829134' },
            { name: "Mens Short Sleeve V Neck", image: require('../../assets/products/men3.png'), price: "500", pincode: '829134' },
            { name: "Mens Short Sleeve V Neck", image: require('../../assets/products/men4.png'), price: "500", pincode: '829134' },
            { name: "Mens Short Sleeve V Neck", image: require('../../assets/products/men5.png'), price: "500", pincode: '829134' },
            { name: "Mens Short Sleeve V Neck", image: require('../../assets/products/men6.png'), price: "500", pincode: '829134' },
            { name: "Mens Short Sleeve V Neck", image: require('../../assets/products/men7.png'), price: "500", pincode: '829134' },
            { name: "Mens Short Sleeve V Neck", image: require('../../assets/products/men8.png'), price: "500", pincode: '829134' },
            { name: "Mens Short Sleeve V Neck", image: require('../../assets/products/men9.png'), price: "500", pincode: '829134' },
            { name: "Mens Short Sleeve V Neck", image: require('../../assets/products/men10.png'), price: "500", pincode: '829134' },
            { name: "Mens Short Sleeve V Neck", image: require('../../assets/products/men11.png'), price: "500", pincode: '829134' },
            { name: "Mens Short Sleeve V Neck", image: require('../../assets/products/men12.png'), price: "500", pincode: '829134' },]
    };

    useEffect(() => {
        AOS.init({
            // offset: 200,
            duration: 800,
            easing: 'ease-in-quad',
            delay: 100,
        });
        setCategories(category);
        setProducts(product)
    }, [])

    

    // const getProducts = () => {
    //     // fetchDataFromApi("/api/products?populate=*").then((res) => {
    //     setProducts();
    //     // });
    // };
    // const getCategories = () => {
    //     let res = {
    //         id: '1',
    //         title: 'For Him',
    //         url: '../../../assets/banner-img.png'
    //     }
    //     // fetchDataFromApi("/api/categories?populate=*").then((res) => {
    //     setCategories(res);
    //     // });
    // };
    return (
        <>
            <Category layout={'01'} categories={categories} />
            <Banner />
            <div className="main-content replace-order-pop">
                <div className="layout">
                    <Category layout={'02'} categories={categories} />
                    <Category layout={'03'} categories={categories} />
                    <Category layout={'04'} categories={categories} />

                    <Featurecategory
                        layout='4'
                        headingText="Featured Categories"
                        products={categories}
                    />

                    <Category layout={'05'} categories={categories} />

                    <Products 
                        layout='1'
                        innerPage={true}
                        products={Pproducts}
                        Pproducts={true}
                    />
                    <Category layout={'06'} categories={categories} />
                </div>
            </div>
            <Newsletter />

            <Usp />
            
        </>
    );
};

export default Home;
