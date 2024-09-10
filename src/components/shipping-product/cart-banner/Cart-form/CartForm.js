import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas)
const CartForm = () => {
    return (
        <>
            <div className='form-start'>
                <form className="row g-3">
                    <div className="col-12">
                        <div className='d-flex mt-3'>
                            <label for="Contact" className="form-label">Contact</label>
                            <div className='have-account'>
                                <label for="Login" className="form-label already">Already have an account?<span> Log in</span></label>
                            </div>
                        </div>
                        <input type="email" className="form-control" id="inputAddress" placeholder="Email" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Email me with news and offers
                            </label>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label for="inputState" className="form-label">Shipping address</label>
                        <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <input type="name" className="form-control" id="firstname" placeholder="Firstname" />
                    </div>
                    <div className="col-md-6">
                        <input type="name" className="form-control" id="lastname" placeholder="Lastname" />
                    </div>

                    <div className="col-12">
                        <input type="text" className="form-control" id="company" placeholder="Company(optional)" />
                    </div>

                    <div className="col-12">
                        <div className="input-group">
                            <input type="text" className="form-control form-input2" id="Address" placeholder="Address" />
                            <div className="input-group-text"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></div>
                        </div>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="company" placeholder="Apartment,studio,or floor(optional)" />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                        <div className="input-group">
                            <input type="text" className="form-control form-input2" id="company" placeholder="Phone (optional)" />
                            <div className="input-group-text"><FontAwesomeIcon icon="fa-solid fa-circle-question" /></div>
                        </div>

                    </div>
                    <div className="col-12">
                        <div className="form-check" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" for="gridCheck">
                                Text me with news and offers
                            </label>
                        </div>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                <div className='row'>
                                    <div className='col-md-10'>
                                        <div className="input-group">
                                            <div className="input-group-text ">
                                                <FontAwesomeIcon icon="fa-solid fa-mobile-screen-button" />
                                            </div>
                                            <input type="text" className="form-control form-input3" id="Address" placeholder="Mobile Phone no." />
                                            <div className="input-group-text">
                                                <select id="inputState" className="form-select country-logo">
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>  By signing up via text, you agree to receive recurring automated marketing messages, including cart reminders,
                                    at the phone number provided. Consent is not a condition of purchase. Reply STOP to unsubscribe.
                                    Reply HELP for help. Message frequency varies. Msg & data rates may apply. View our<span>Privacy Policy</span>  and<span>Terms of Service.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <button type="submit" className="btn btn-return" ><FontAwesomeIcon icon="fa-solid fa-angle-left" className='me-2' />Return To Cart </button>
                    </div>
                    <div className="col-6">
                        <button type="submit" className="btn btn-continue">Continue To Shipping</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CartForm