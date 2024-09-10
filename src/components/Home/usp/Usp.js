import React from 'react'
import { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../usp/usp.css';
export const Usp = () => {
  return (
    <>
        <section className='usp-section'>
            <div className='container-fluid p-0'>
                <div className='row ms-0 me-0'>
                    <div className='col-lg-4 col-md-6 bd-right'>
                        <div className='d-flex '>
                            <div className='icon-div'>                             
                                <FontAwesomeIcon  className='usp-fafa' icon="fa-solid fa-square-check" />               
                            </div>
                            <div className='cont-div'>
                                <h1 className='title'>TRY ON GUARANTEE ON INNERWEAR</h1>
                                <p className='sub-cont'>Get your first pair. Dont love it? Its on it'll be on us.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 bd-right'>
                        <div className='d-flex '>
                            <div className='icon-div'>                             
                                {/* <FontAwesomeIcon  className='usp-fafa' icon="fa-solid fa-square-check" />   */}
                                <FontAwesomeIcon  className='usp-fafa' icon="fa-solid fa-rotate-left" />             
                            </div>
                            <div className='cont-div'>
                                <h1 className='title'>EASY 15-DAYS RETURNS AND EXCHANGE AVAILABLE ON LOUNGEWEAR</h1>
                                <p className='sub-cont'></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 bd-right'>
                        <div className='d-flex '>
                            <div className='icon-div'>                             
                                {/* <FontAwesomeIcon  className='usp-fafa' icon="fa-solid fa-square-check" />     */}
                                <FontAwesomeIcon  className='usp-fafa' icon="fa-solid fa-truck" />           
                            </div>
                            <div className='cont-div'>
                                <h1 className='title'>GET FREE SHIPPING</h1>
                                <p className='sub-cont'>For all orders above Rs.600,we'll ship your product free of delivery charge.No matter where in india you are.No coupon code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Usp;