import React from 'react'
import '../ReviewsText/ReviewsText.css';
import star from '../image/star.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from "@ramonak/react-progress-bar";
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import reviewimg from '../../../../assets/review-client.png';
library.add(fas)
const ReviewsText = () => {
    return (
        <>
            <section className="Reviews">
                <div className='container'>
                    <div className="row">
                        <div className='col-md-12'>
                            <div className='underline-class'>
                            </div>
                        </div>
                        <div className='reviews-main-div'>
                            <h5 className='revvv-title text-center mt-5'>Reviews</h5>
                            {/* <p className='sub-revvv-title'>2 reviews for Basic Colored Sweatpants With Elastic Hems</p> */}
                            <div className='row mt-5'>
                                <div className='col-md-6'>
                                    <div className='review-box'>
                                        <div className='d-flex'>
                                            <div className='img-div'>
                                                <img src={reviewimg} className='review-client-img' alt="review" />
                                            </div>
                                            <div className='review-div'>
                                                <div className='d-flex rating-star'>
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                </div>
                                                <p className='name-c'>admin -  <span>May 23, 2023</span></p>
                                                <p className='revv-p'>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='review-box'>
                                        <div className='d-flex'>
                                            <div className='img-div'>
                                                <img src={reviewimg} className='review-client-img' alt="review" />
                                            </div>
                                            <div className='review-div'>
                                                <div className='d-flex rating-star'>
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                </div>
                                                <p className='name-c'>admin -  <span>May 23, 2023</span></p>
                                                <p className='revv-p'>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='review-box'>
                                        <div className='d-flex'>
                                            <div className='img-div'>
                                                <img src={reviewimg} className='review-client-img' alt="review" />
                                            </div>
                                            <div className='review-div'>
                                                <div className='d-flex rating-star'>
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                </div>
                                                <p className='name-c'>admin -  <span>May 23, 2023</span></p>
                                                <p className='revv-p'>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='review-box'>
                                        <div className='d-flex'>
                                            <div className='img-div'>
                                                <img src={reviewimg} className='review-client-img' alt="review" />
                                            </div>
                                            <div className='review-div'>
                                                <div className='d-flex rating-star'>
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                                </div>
                                                <p className='name-c'>admin -  <span>May 23, 2023</span></p>
                                                <p className='revv-p'>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 text-center'>
                            <button className=' btn btn-success review-button' type="button" data-bs-toggle="collapse" data-bs-target="#add-review-collapse" aria-expanded="false" aria-controls="collapseExample">  WRITE A REVIEW</button>
                        </div>
                        <div className='col-md-12 mt-5 mb-5'>
                            <div className='underline-class'>
                            </div>
                        </div>
                        <div class="collapse add-review-sec" id="add-review-collapse">
                            <div class="card-body">
                                <h5>Add a review</h5>
                                <hr></hr>
                                <p className='sub-text'>Your email address will not be published. Required fields are marked *</p>

                                <p className='sub-text'>Your rating *</p>

                                <div className='your-rating-div'>
                                    <div className='d-flex'>
                                        <div className='bd-right'>
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                        </div>
                                        <div className='bd-right'>
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                        </div>
                                        <div className='bd-right'>
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                        </div>
                                        <div className='bd-right'>
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                        </div>
                                        <div className='bd-right'>
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                            <FontAwesomeIcon icon="fa-solid fa-star" className='fa-solid' />
                                        </div>
                                    </div>
                                </div>
                                <div className='add-review-form'>
                                    <form>
                                        <div className='form-group'>
                                            <label>Your review *</label>
                                            <textarea type="" className='form-control' rows="5" cols="30"></textarea>
                                        </div>
                                        <div className='form-group'>
                                            <label>Name *</label>
                                            <input type="" className='form-control'></input>
                                        </div>
                                        <div className='form-group'>
                                            <label>Email *</label>
                                            <input type="" className='form-control'></input>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                        </div>
                                        <button className='submit-btn btn'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default ReviewsText;
