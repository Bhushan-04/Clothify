import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import './Login.scss';
import './Register.css';
import instagram from "../../assets/logo/instagram.png";


const Register = () => {
    const navigate = useNavigate();

    return (
        <div className='login-width'>
            <Container className='w-100'>
                <div className='signup-page'>
                    <div className="container">
                        <div className='row mx-auto'>
                            <div className='col-md-7'>
                                <div className="d-flex justify-content-center align-items-start ">
                                    <h2 className='fw-bold'>SIGN UP</h2>
                                </div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>* Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Full Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>* Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Number" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>* Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>* Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                        <Form.Text className="text-muted">
                                            Minimum 8 characters
                                        </Form.Text>
                                    </Form.Group>
                                    <Button variant=" " className='signup-button w-100' type="submit" onClick={() => navigate("/VerifyOtp")}>
                                        Sign Up
                                    </Button>
                                    <Form.Text className="text-muted w-100 mt-3 d-block text-center">
                                        <a className='text-muted cursor-pointer' onClick={() => navigate("/login")}>Already have a account</a><br />
                                    </Form.Text>
                                </Form>


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

export default Register;