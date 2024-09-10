import React from 'react'
import './contactdetails.css'
// import Container from 'react-bootstrap/Container';
import SocialFooter from '../cart-banner/social-footer/SocialFooter'


const Method = () => {
    // const navigate = useNavigate();
    return (
        <>
            <div className='form-start mt-4'>
                <div className='d-flex'>
                    <h4>Delivery Address</h4>
                    <div className='button-holder '>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModaladd" className='btn btn-address'>Add New Address</button>
                    </div>
                </div>         
                <form className="row   mt-4">
                    <div className='border-box'>
                        <div class="form-check   my-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                            <label class="form-check-label" for="flexRadioDefault1">
                                archana verma
                                <button className='btn btn-home ms-2'>HOME</button>
                                <p>Bhavdhan patil nagar pune maharashtra-411021</p>
                                <p>mobile:123456789</p>
                            </label>
                        </div>
                        <div className='edit-remove ms-3 mb-3'>
                        <button className='btn btn-remove '>REMOVE</button>
                        <button className='btn btn-remove ms-2'>EDIT</button>
                        </div>
                    </div>
                </form>
                <hr />
            <SocialFooter/>
            </div>

            {/*****add modal start******* */}
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
                                        <input type="number" className="form-control" placeholder='Mobile No.*' />
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
        </>
    )
}

export default Method