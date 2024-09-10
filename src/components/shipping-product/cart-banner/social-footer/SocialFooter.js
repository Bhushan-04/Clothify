import React from 'react'

const SocialFooter = () => {
    return (
        <>
            <div className='social-footer'>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" type="button" data-bs-toggle="modal" data-bs-target="#refund-modal">Refund Policy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#shiping-policy-modal">Shipping Policy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#privacy-policy-modal">Privacy Policy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#terms-service-modal">Terms Of Service</a>
                    </li>
                </ul>
            </div>

            {/* start cart-modal-sections  */}
            <div className='cart-modal-sections'>

                {/* start refund policy modal */}
                <div className='refund-policy-modal'>
                    <div class="modal fade" id="refund-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Refund policy</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className='content-sec'>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima tempora neque quis dolore voluptate repellendus est aliquam? Amet esse quaerat itaque, officiis nesciunt blanditiis iste repellendus accusantium animi est corporis cumque in ipsam vitae magnam neque? Autem harum dolor eligendi ab assumenda, tempora blanditiis voluptatibus dolorem iure dolorum numquam voluptas fugit excepturi soluta illum? Est ducimus eveniet optio magnam, recusandae illum corrupti, qui ex non harum pariatur doloremque deserunt minima molestiae voluptates nostrum ad nihil quam laudantium amet ipsam atque a! Dolorem similique, earum fugiat officiis tenetur sapiente sint repudiandae eaque saepe quibusdam, assumenda maiores aperiam labore dignissimos animi quaerat?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end refund policy modal */}

                {/* start shipping policy modal  */}
                <div className='shipping-policy-modal'>
                    <div class="modal fade" id="shiping-policy-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Shipping policy</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className='content-sec'>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima tempora neque quis dolore voluptate repellendus est aliquam? Amet esse quaerat itaque, officiis nesciunt blanditiis iste repellendus accusantium animi est corporis cumque in ipsam vitae magnam neque? Autem harum dolor eligendi ab assumenda, tempora blanditiis voluptatibus dolorem iure dolorum numquam voluptas fugit excepturi soluta illum? Est ducimus eveniet optio magnam, recusandae illum corrupti, qui ex non harum pariatur doloremque deserunt minima molestiae voluptates nostrum ad nihil quam laudantium amet ipsam atque a! Dolorem similique, earum fugiat officiis tenetur sapiente sint repudiandae eaque saepe quibusdam, assumenda maiores aperiam labore dignissimos animi quaerat?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end shipping policy modal  */}


                {/* start privacy policy modal  */}
                <div className='privacy-policy-modal'>
                    <div class="modal fade" id="privacy-policy-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Privacy policy</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className='content-sec'>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima tempora neque quis dolore voluptate repellendus est aliquam? Amet esse quaerat itaque, officiis nesciunt blanditiis iste repellendus accusantium animi est corporis cumque in ipsam vitae magnam neque? Autem harum dolor eligendi ab assumenda, tempora blanditiis voluptatibus dolorem iure dolorum numquam voluptas fugit excepturi soluta illum? Est ducimus eveniet optio magnam, recusandae illum corrupti, qui ex non harum pariatur doloremque deserunt minima molestiae voluptates nostrum ad nihil quam laudantium amet ipsam atque a! Dolorem similique, earum fugiat officiis tenetur sapiente sint repudiandae eaque saepe quibusdam, assumenda maiores aperiam labore dignissimos animi quaerat?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end privacy policy modal  */}



                {/* start terms-service-modal   */}
                <div className='shipping-policy-modal'>
                    <div class="modal fade" id="terms-service-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Terms of service</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className='content-sec'>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima tempora neque quis dolore voluptate repellendus est aliquam? Amet esse quaerat itaque, officiis nesciunt blanditiis iste repellendus accusantium animi est corporis cumque in ipsam vitae magnam neque? Autem harum dolor eligendi ab assumenda, tempora blanditiis voluptatibus dolorem iure dolorum numquam voluptas fugit excepturi soluta illum? Est ducimus eveniet optio magnam, recusandae illum corrupti, qui ex non harum pariatur doloremque deserunt minima molestiae voluptates nostrum ad nihil quam laudantium amet ipsam atque a! Dolorem similique, earum fugiat officiis tenetur sapiente sint repudiandae eaque saepe quibusdam, assumenda maiores aperiam labore dignissimos animi quaerat?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end terms-service-modal  */}






            </div>
            {/* end cart-modal-sections  */}
        </>
    )
}

export default SocialFooter