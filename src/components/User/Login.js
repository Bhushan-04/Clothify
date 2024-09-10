import { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";
import { Link } from "react-router-dom";
import hippikart1 from "../../assets/hippkart_1.png"
import Logo from "../../assets/HK.png";
import instagram from "../../assets/logo/instagram.png";


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './Login.scss';
import './Register.css';


import './Login.scss';

const Login = () => {
    const [mobileNo, setMobileNo] = useState('');
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
        if (otp !== undefined) {
            navigate("/SignUp", { state: { otp: otp, mobileno: mobileNo } });
        }
    }, [otp])
    return (
        <div className='login-width'>
            <Container className='w-100'>
                <div className='signup-page'>
                    <div className="container">
                        <div className='row mx-auto'>
                            <div className='col-md-7 my-auto'>
                            <div className="">
                    <div className="login-main">                       
                        <h2 className='fw-bold'>Login</h2>
                        <h1>Welcome You</h1>
                        <p>Please enter Your details</p>
                    </div>
                    <div className="form-detalis">

                        <div className="input-main">
                            <svg className="icon-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
                            </svg>
                            <div className="be-main"></div>
                            <div className="input-box">
                                <input type="tel" onChange={(event) => setMobileNo(event.target.value)} className="input" required="" placeholder='Enter your mobile Number' />
                            </div>
                            <svg className="icon-continue" xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="#2abe88" class="bi bi-check-circle-fill"
                                viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                        </div>
                    </div>
                    <button className="continue" type='button' onClick={submitFunc} disabled = {mobileNo.length === 0 ? true: false}>Continue</button>
                    

                    <div className="with-social">

                        <div className="social google">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-google" viewBox="0 0 16 16">
                                <path
                                    d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>
                        </div>

                        <div className="social facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2abe88" className="bi bi-facebook" viewBox="0 0 16 16">
                                <path
                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </div>

                        <div className="social facebook">
                            <img className='insta-icon' src={instagram} />
                        </div>

                    </div>
                    {/* <Link to="/sign-up">
                    <p className='create mt-3'>Create Account ?</p></Link>
                    <p className="text-center w-100 paragraph-description"></p> */}
                </div>
                            </div>
                            <div className='col-md-5 p-0'>
                                <img class="money-locker-register" src="/static/media/hippkart_1.6b9ca4d381049019df35.png" alt="SmartSave Money locker"></img>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default Login;