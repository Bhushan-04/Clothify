import React from 'react'
import { useNavigate } from "react-router-dom";
const NavBreadLink = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb mt-5">
                    <li className="breadcrumb-item active" onClick={() => navigate("/cart")}>Cart</li>
                    {/* <li className="breadcrumb-item " aria-current="page" onClick={() => navigate("/information")}>Information</li> */}
                    <li className="breadcrumb-item " aria-current="page" onClick={() => navigate("/address")}>Address</li>
                    <li className="breadcrumb-item " aria-current="page" onClick={() => navigate("/Payment")}>Payment</li>
                </ol>
            </nav>
        </>
    )
}

export default NavBreadLink