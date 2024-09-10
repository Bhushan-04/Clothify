import React from 'react'
import imgpro from '../../../assets/products/proimg.jpg'
const ProductCard = () => {
    return (
        <>
            <div className='row'>
                <div className='col-lg-2 col-md-2 col-4'>
                    <img src={imgpro} className='pro-img' alt='' />
                </div>
                <div className='col-lg-8 col-md-9 col-8'>
                    <div className='row'>
                        <div className='col-md-3 '>
                            <div className='name-holder1'>
                                <h6> WOMENS SHORT SLEEVE V NECK
                                    <br /> WHITE / S</h6>
                            </div>
                        </div>
                        <div className='col-md-3 '>
                            <div className="select-product-div ">
                                {/* <div className="d-flex add-cart-box ">
                                    <button className="minus btn">-</button>
                                    <div className="quantity">1
                                    </div>
                                    <button className="add btn">+</button>
                                </div> */}

                                {/* <h6 className="pro-name mt-2">REMOVE</h6> */}

                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Qty</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="3">4</option>
                                    <option value="3">5</option>
                                    <option value="3">6</option>
                                    <option value="3">7</option>
                                    <option value="3">8</option>
                                    <option value="3">9</option>
                                    <option value="3">10</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-3 '>
                            <p className='price-no'>236.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard