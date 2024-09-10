import { useEffect, useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";

import './ForgetPassward.css';
const ForgetPassward = () => {
    const [mobileNo, setMobileNo] = useState();
    const [otp, setOtp] = useState();
    const navigate = useNavigate();
    const { signin, setSignin, setuserData } = useContext(Context);
    // function to check user is authenticated or not
    const formSubmit = (event) => {
        event.preventDefault();
        const option = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'mobileno': mobileNo })
        };
        fetch('http://localhost:4000/api/auth/login', option)
            .then(response => response.json())
            .then(data => {
                if (data === 400 || data.accessToken === undefined) {
                    alert('Invalid Credentails');
                }
                else {
                    setSignin(true);
                    setuserData(data)
                    localStorage.setItem('login', JSON.stringify({
                        login: true,
                        token: data.accessToken,
                        data: data,
                    }))
                    navigate("/");
                }
            });
    }
    // function to submit mobile number and genrate otp
    const submitFunc = async () => {
        await generateOtp();
    }
    // function to generate a random 4-digit number
    const generateOtp = async () => {
        const min = 1000;
        const max = 9999;
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        setOtp(random.toString());
        return;
    };
    useEffect(() => {
        if (signin) {
            navigate("/");
        }
        if (otp != undefined) {
            navigate("/verifyotp", { state: { otp: otp, mobileno: mobileNo } });
        }
    }, [otp])
    return (
        <div className='login-width'>
            <div className="loginPageContent">
                <div className="signInContainer" style={{padding:'30px'}}>
                    <div className="welcome-header">
                        Recover <span className="welcome-header-small">your account</span>
                    </div>
                    <div className="mobileInputContainer">

                        <div className="form-group ">
                            <input
                                autoComplete="email"
                                id=""
                                type="email"
                                className="form-control mobileNumberInput"
                                placeholder="Enter your reistered email or phone number"
                                maxLength={10}
                                defaultValue=""
                                onChange={(event) => setMobileNo(event.target.value)}
                            />
                        </div>


                        <div className="midLinks">
                            Are you an existing user <a href="#" onClick={() => navigate(`/login`)}>Login Now</a>
                        </div>
                        <div className="submitBottomOption" onClick={submitFunc}>Recover Now</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ForgetPassward;