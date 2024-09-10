import React from "react";
// import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";

const RelatedProducts = ({ categoryId, productId }) => {
    const product = [
        {name:"Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: require('../../../assets/product1.jpg'), price:"500",pincode:'829134'},
        {name:"Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: require('../../../assets/product1.jpg'), price:"500",pincode:'829134'},
        {name:"Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: require('../../../assets/product1.jpg'), price:"500",pincode:'829134'},
        {name:"Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: require('../../../assets/product1.jpg'), price:"500",pincode:'829134'},
        {name:"Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: require('../../../assets/product1.jpg'), price:"500",pincode:'829134'},
        {name:"Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: require('../../../assets/product1.jpg'), price:"500",pincode:'829134'},
        {name:"Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: require('../../../assets/product1.jpg'), price:"500",pincode:'829134'},
        {name:"Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image: require('../../../assets/product1.jpg'), price:"500",pincode:'829134'},
        {name:"Printed T-shirt || Mens Clothing", desc: 'Exclisively discounted', image:require('../../../assets/product1.jpg'), price:"500",pincode:'829134'}];

    return (
        <div className="related-products">
            <Products 
                layout = '1'
                headingText="Related Products"
                products={product} 
            />
        </div>
    );
};

export default RelatedProducts;
