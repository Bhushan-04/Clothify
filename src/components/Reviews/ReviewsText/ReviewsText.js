import React from 'react'
import '../ReviewsText/ReviewsText.css';
import star from '../image/star.png'

const ReviewsText = () => {
    return (
        <>
            <section className="Reviews">
                <div className='container'>
                    <div className="row ms-0 me-0">
                        <div className='col-md-12 text-center mt-5 mb-5'>
                            <div className="title">
                                <h2>REAL REVIEWS FROM REAL CUSTOMERS</h2>
                            </div>
                        </div>
                        <div>
                            <p>Reviews by</p>
                            <div className='last-line mt-2'></div>
                        </div>
                        <div className='d-flex mt-4'>
                            <img src={star} alt='...' className='star-img' />
                            <img src={star} alt='...' className='star-img' />
                            <img src={star} alt='...' className='star-img' />
                            <img src={star} alt='...' className='star-img' />
                            <img src={star} alt='...' className='star-img' />
                            <p>102 Reviews</p>
                        </div>
                        <div className='last-line mt-3 mb-3'></div>
                        {/* Tab Section start */}
                        <nav>
                            <div class="nav nav-tabs " id="nav-tab" role="tablist">
                                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Site Reviews</button>
                                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Product Reviews</button>
                            </div>
                        </nav>
                        {/* 1st tab content */}
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                <div className='last-line mt-5'></div>
                                <div className='row mt-5'>
                                    <div className='col-md-1'>
                                        <p className='text-center user-name-symbol pt-1'>B</p>
                                    </div>
                                    <div className='col-md-11'>
                                        <div className='d-flex justify-content-between'>
                                            <p>Barwolf</p>
                                            <p>11/01/22</p>
                                        </div>
                                        <div className='d-flex'>
                                            <img src={star} alt='...' className='star-img' />
                                            <img src={star} alt='...' className='star-img' />
                                            <img src={star} alt='...' className='star-img' />
                                            <img src={star} alt='...' className='star-img' />
                                            <img src={star} alt='...' className='star-img' />
                                        </div>
                                        <div>
                                            <p>Mens T Shirt</p>
                                            <p>Thank for sharing this T shirt blog. Fabric quality is very nice and looks goods on me. I just loved it!!Amazing words, It fitted me perfectly it is very much comfortable while wearing. Really I am so happy to buy it. So you just go for Zeekas fashion its a Online shopping for clothing brand.</p>
                                        </div>
                                        <div>
                                            <p>On http://theclassictshirt.com</p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <button type="button" class="btn share-button">Share</button>
                                                <button type="button" class="btn comments-button">Comments</button>
                                            </div>
                                            <div>
                                                <p>Was This Review Helpful?</p>
                                            </div>
                                        </div>
                                        <div className='row mt-5'>
                                            <div className='col-md-1'>
                                                <p className='text-center user-name-symbol pt-1'>B</p>
                                            </div>
                                            <div className='col-md-10'>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Barwolf</p>
                                                    <p>11/01/22</p>
                                                </div>
                                                <div>
                                                    <p>Thanks for sharing your kind words with us, enjoy!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='last-line mt-5'></div>
                                <div className='row mt-5'>
                                    <div className='col-md-1'>
                                        <p className='text-center user-name-symbol pt-1'>B</p>
                                    </div>
                                    <div className='col-md-11'>
                                        <div className='d-flex justify-content-between'>
                                            <p>Barwolf</p>
                                            <p>11/01/22</p>
                                        </div>
                                        <div className='d-flex'>
                                            <img src={star} alt='...' className='star-img' />
                                            <img src={star} alt='...' className='star-img' />
                                            <img src={star} alt='...' className='star-img' />
                                            <img src={star} alt='...' className='star-img' />
                                            <img src={star} alt='...' className='star-img' />
                                        </div>
                                        <div>
                                            <p>Mens T Shirt</p>
                                            <p>Thank for sharing this T shirt blog. Fabric quality is very nice and looks goods on me. I just loved it!!Amazing words, It fitted me perfectly it is very much comfortable while wearing. Really I am so happy to buy it. So you just go for Zeekas fashion its a Online shopping for clothing brand.</p>
                                        </div>
                                        <div>
                                            <p>On http://theclassictshirt.com</p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <button type="button" class="btn share-button">Share</button>
                                                <button type="button" class="btn comments-button">Comments</button>
                                            </div>
                                            <div>
                                                <p>Was This Review Helpful?</p>
                                            </div>
                                        </div>
                                        <div className='row mt-5'>
                                            <div className='col-md-1'>
                                                <p className='text-center user-name-symbol pt-1'>B</p>
                                            </div>
                                            <div className='col-md-10'>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Barwolf</p>
                                                    <p>11/01/22</p>
                                                </div>
                                                <div>
                                                    <p>Thanks for sharing your kind words with us, enjoy!</p>
                                                </div>
                                            </div>
                                            <div className='last-line mt-5'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 2nd tab-content */}
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                                <div className='last-line mt-5'></div>
                                <div className='row mt-5'>
                                    <div className='col-md-1'>
                                        <p className='text-center user-name-symbol pt-1'>B</p>
                                    </div>
                                    <div className='col-md-11'>
                                        <div className='d-flex justify-content-between'>
                                            <p>Barwolf</p>
                                            <p>11/01/22</p>
                                        </div>
                                        <div className='d-flex'>
                                            <img src={star} alt='...' className='star-img' />
                                            <img src={star} alt='...' className='star-img' />
                                            <img src={star} alt='...' className='star-img' />
                                            <img src={star} alt='...' className='star-img' />
                                            <img src={star} alt='...' className='star-img' />
                                        </div>
                                        <div>
                                            <p>Mens T Shirt</p>
                                            <p>Thank for sharing this T shirt blog. Fabric quality is very nice and looks goods on me. I just loved it!!Amazing words, It fitted me perfectly it is very much comfortable while wearing. Really I am so happy to buy it. So you just go for Zeekas fashion its a Online shopping for clothing brand.</p>
                                        </div>
                                        <div>
                                            <p>On http://theclassictshirt.com</p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <button type="button" class="btn share-button">Share</button>
                                                <button type="button" class="btn comments-button">Comments</button>
                                            </div>
                                            <div>
                                                <p>Was This Review Helpful?</p>
                                            </div>
                                        </div>
                                        <div className='row mt-5'>
                                            <div className='col-md-1'>
                                                <p className='text-center user-name-symbol pt-1'>B</p>
                                            </div>
                                            <div className='col-md-10'>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Barwolf</p>
                                                    <p>11/01/22</p>
                                                </div>
                                                <div>
                                                    <p>Thanks for sharing your kind words with us, enjoy!</p>
                                                </div>
                                            </div>
                                            <div className='last-line mt-5'></div>
                                        </div>
                                    </div>
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
