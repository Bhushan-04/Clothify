import "./SignUp.css";
import "../SignUp/SignUp.js";
import logo from "../../../assets/logo.png";
import hippikart from "../../../assets/hippkart.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <section className="SignUp">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-12 p-0">
              <div className="form-field">
                <div className="logo-img text-center">
                  <img src={logo} alt="..." className="logo" />
                </div>
                <div class="form-detalis">
                  <div class="input-main">
                    {/* <svg class="icon-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg><div class="be-main"></div> */}
                    <div class="input-box">
                      <input
                        type="name"
                        class="input"
                        placeholder=" First Name"
                      />
                    </div>
                    
                  </div>
                </div>

                <div class="form-detalis">
                  <div class="input-main">
                    {/* <svg class="icon-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg><div class="be-main"></div> */}
                    <div class="input-box">
                      <input
                        type="name"
                        class="input"
                        placeholder=" Last Name"
                      />
                    </div>
                    
                  </div>
                </div>

                <div class="form-detalis">
                  <div class="input-main mob">
                    <div class="input-box">
                      <input
                        type="tel"
                        class="input"
                        placeholder=" Mobile Number"
                      />
                    </div>

                    <div
                      class="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div class="accordion-item">
                      <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            Send OTP
                          </button>
                      </div> 
                    </div>

                    
                  </div>

                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <div class="d-flex digit-group mt-3 "
                        data-group-name="digits"
                        data-autosubmit="false"
                        autocomplete="off"
                      >
                        <input
                          type="text"
                          id="digit-1"
                          class="form-control form-control-sm mx-2"
                          name="digit1"
                          data-next="digit-2"
                          maxlength="1"
                        />
                        <input
                          type="text"
                          id="digit-2"
                          class="form-control form-control-sm mx-2"
                          name="digit2"
                          data-next="digit-3"
                          data-previous="digit-1"
                          maxlength="1"
                        />
                        <input
                          type="text"
                          id="digit-3"
                          class="form-control form-control-sm mx-2"
                          name="digit3"
                          data-next="digit-4"
                          data-previous="digit-2"
                          maxlength="1"
                        />
                        <input
                          type="text"
                          id="digit-4"
                          class="form-control form-control-sm mx-2"
                          name="digit4"
                          data-next="digit-5"
                          data-previous="digit-3"
                          onkeyup="submitForm(this.value)"
                          maxlength="1"
                        />

                        <p className="set-time">02.34</p>

                        <button className="btn verified-btn">Verified</button>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div class="form-detalis">
                  <div class="input-main">
                    {/* <svg class="icon-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg><div class="be-main"></div> */}
                    <div class="input-box">
                      <input
                        type="email"
                        class="input"
                        placeholder=" Email-Id"
                      />
                    </div>
                    
                  </div>
                </div>

                <div class="form-detalis">
                  <div class="input-main">
                    {/* <svg class="icon-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg><div class="be-main"></div> */}
                    <div class="input-box">
                      <input
                        type="date"
                        class="input"
                        placeholder=" ADDRESS (House no,Buliding,Street,area)"
                      />
                    </div>
                    
                  </div>
                </div>

                <div class="form-detalis">
                  <div class="input-main input-main-2">
                    {/* <svg class="icon-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg><div class="be-main"></div> */}
                    <div class="input-box">
                      <input type="radio" name="gender" value="male" /> Male
                      <input type="radio" name="gender" value="female" /> Female
                    </div>
                    
                  </div>
                </div>

                <div class="form-detalis">
                  <div class="input-main">
                    {/* <svg class="icon-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg><div class="be-main"></div> */}
                    <div class="input-box">
                      <input
                        type="text"
                        class="input"
                        placeholder=" ADDRESS (House no,Buliding,Street,area)"
                      />
                    </div>
                    
                  </div>
                </div>

                <div class="form-detalis">
                  <div class="input-main">
                    {/* <svg class="icon-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg><div class="be-main"></div> */}
                    <div class="input-box">
                      <input
                        type="number"
                        class="input"
                        placeholder=" Pincode"
                      />
                    </div>
                    
                  </div>
                </div>

                <div class="form-detalis">
                  <div class="input-main">
                    {/* <svg class="icon-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg><div class="be-main"></div> */}
                    <div class="input-box">
                      <input
                        type="text"
                        class="input"
                        placeholder="locality/Town"
                      />
                    </div>
                    
                  </div>
                </div>

                <div class="form-detalis">
                  <div class="input-main">
                    {/* <svg class="icon-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg><div class="be-main"></div> */}
                    <div class="input-box">
                      <input
                        type="text"
                        class="input"
                        placeholder="City/District"
                      />
                    </div>
                    
                  </div>
                </div>

                <div class="form-detalis">
                  <div class="input-main">
                    {/* <svg class="icon-email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg><div class="be-main"></div> */}
                    <div class="input-box">
                      <input type="text" class="input" placeholder="State" />
                    </div>
                    
                  </div>
                </div>
                <div className="submit text-center  mt-3">
                  <input type="submit" value="Submit" />
                </div>
                <Link to="/login">
                  <p className="mt-3 text-center">login</p>
                </Link>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 p-0">
              <div className="signup-img">
                <img src={hippikart} alt="..." className="signup" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignUp;
