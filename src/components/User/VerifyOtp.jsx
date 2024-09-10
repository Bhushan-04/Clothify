import { useEffect, useState, useContext, useRef } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { Context } from "../../utils/context";
import Logo from "../../assets/otp.jpg";
import { Link } from "react-router-dom";


import "./VerifyOtp.css";
const VerifyOtp = () => {
  const [otp1, setOpt1] = useState('');
  const [otp2, setOpt2] = useState('');
  const [otp3, setOpt3] = useState('');
  const [otp4, setOpt4] = useState('');
  const [error, seterror] = useState(false);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  // state.mobileno = 8421245175

  // const { signin, setSignin, setuserData } = useContext(Context);
  // const submitFunction = () => {
  //   console.log('' + otp1 + otp2 + otp3 + otp4);
  //   if ('' + otp1 + otp2 + otp3 + otp4 === state.otp) {
  //     navigate('/');
  //     seterror(false)
  //   }
  //   else {
  //     seterror(true)
  //   }
  // }
  // useEffect(() => {
  //   if (signin) {
  //     navigate("/");
  //   }
  //   inputRef1.current.focus();
  //   console.log(state.otp);
  //   if (otp4 !== '' && otp4 !== undefined) {
  //     submitFunction()
  //   }
  // }, [otp4]);
  return (
    <>
      <div className='login-width'>
        <div className="login-container">
          <img className="money-locker" onClick={() => navigate(`/`)} src="https://www.damensch.com/_next/image?url=https%3A%2F%2Fdacdn.damensch.com%2Fdamensch%2Fcms-media%2Fcarousels%2Fsp-carousel2.jpg%3Ffm%3Dwebp%26h%3D530%26q%3D50&w=1920&q=100" alt="SmartSave Money locker" />
          <svg onClick={()=>{navigate('/login')}} className="back-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/>
          </svg>
          <div className="detalis-main">
            <div className="verificationContainer">
              <div className="otpTopImage">
                <div className="image">
                  <div
                    className="LazyLoad  is-visible"
                    style={{
                      height: "auto",
                      width: "100%",
                      background: "rgb(244, 255, 249)",
                    }}
                  >
                    <picture className="img-responsive" style={{ width: "100%" }}>
                      <source
                        srcSet={Logo}
                        type="image/webp"
                      />
                      <img 
                        src={Logo}
                        className="img-responsive preLoad loaded"
                        alt=""
                        title=""
                        style={{ width: "100%" }}
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="mobContainer">
                <h3>Verify with OTP</h3>
                <h4>Sent to 8421245175 </h4>
                {/* {state.mobileno ? state.mobileno : ''} */}
                <div className="otpContainer">
                  <input
                    name="otp0"
                    type="tel"
                    maxLength={1}
                    data-val={0}
                    autoComplete="off"
                    defaultValue=""
                    ref={inputRef1}
                    onChange={(event) => { setOpt1(event.target.value); inputRef2.current.focus() }}
                  />
                  <input
                    name="otp1"
                    type="tel"
                    maxLength={1}
                    data-val={1}
                    autoComplete="off"
                    defaultValue=""
                    ref={inputRef2}
                    onChange={(event) => { setOpt2(event.target.value); inputRef3.current.focus() }}
                  />
                  <input
                    name="otp2"
                    type="tel"
                    maxLength={1}
                    data-val={2}
                    autoComplete="off"
                    defaultValue=""
                    ref={inputRef3}
                    onChange={(event) => { setOpt3(event.target.value); inputRef4.current.focus() }}
                  />
                  <input
                    name="otp3"
                    type="tel"
                    maxLength={1}
                    data-val={3}
                    autoComplete="off"
                    defaultValue=""
                    ref={inputRef4}
                    onChange={(event) => { setOpt4(event.target.value) }}
                  />
                </div>
                <div class="errormsg">
                  {error && <h6>wrong otp, please try again.</h6>}
                  <Link to="/profile"><button className="btn btn-outline-success btn-sm resendContainer">RESEND OTP</button></Link>
                </div>
              </div>
              <div className="bottomeLink">
                {" "}
                Log in using <span onClick={() => navigate(`/email`)}> Password </span>{" "}
              </div>
              <div className="bottomeLink">
                {" "}
                Having trouble logging in? <span> Get help </span>{" "}
                <span className="d-block mt-3" onClick={() => navigate(`/profile`)}> Bypass Login </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
