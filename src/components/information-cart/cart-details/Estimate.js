import React from 'react'

const Estimate = () => {
    return (
        <>
            <div className='shopping-box '>
                <h5 className='text-center'>ESTIMATE SHIPPING</h5>
                <form class="row g-3">
                    <div class="col-md-2">

                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-2">

                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-6">

                        <input type="text" class="form-control" id="inputZip" placeholder='zip' />
                    </div>
                    <div class="col-md-2">
                        <div class="outer "><div class="button"><div class="text"> <p class="">ESTIMATE</p></div></div></div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Estimate