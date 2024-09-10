import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Profile from "./components/Profile/Profile";
import Login from "./components/User/Login";
import Email from "./components/User/Email";
import GridPage from "./components/Category/GridPage/GridPage";
import ForgetPassward from "./components/User/ForgetPassward";
import Cart from "./components/User/Cart";
import VerifyOtp from "./components/User/VerifyOtp";
// import AllProductDetails from "./all-product-details/AllProductDetails";
import AllProductDetails from "./components/all-product-details/AllProductDetails";
import Register from "./components/User/Register";
import SingleProduct from "./components/SingleProduct/SingleProduct";
// import {AppContext} from "./utils/context";
import Faq from "./components/Faq/Faq";
import TermsPrivacy from './components/TermsPrivacy/TermsPrivacy';
import Reviews from './components/Reviews/Reviews';
import Blog from './components/Blog/Blog';
import Information from './components/information-cart/Information'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from "./components/AboutUs/AboutUs";
import Mens from "./components/Category/Mens/Mens";
import HowToWear from "./components/HowToWear/HowToWear";
import TermsCondition from "./components/TermsCondition/Terms";
import PrivacyPolicy from "./components/PrivacyPolicy/Privacy";
import AllProductDetailsMan from "./components/all-product-details/AllProductDetailsMan";
import Shipping from "./components/shipping-product/Shipping";
import Payment from "./components/Payment-folder/Payment";
import Whislist from "./components/Category/Whislist/Whislist";
import SignUp from "./components/Category/SignUp/SignUp";
import AppContext from "./utils/context";
function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/product" element={<SingleProduct />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/email" element={<Email />} />
                    <Route path="/gridpage" element={<GridPage />} />
                    <Route path="/verifyotp" element={<VerifyOtp />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/forget" element={<ForgetPassward />} />
                    <Route path="/information" element={<Cart />} />
                    <Route path="/cart" element={<Information />} />
                    <Route path="/all-product-details" element={<AllProductDetails/>} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/termsprivacy" element={<TermsPrivacy />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/mens" element={<Mens/>} />
                    <Route path="/HowToWear" element={<HowToWear />} />
                    <Route path="/address" element={<Shipping />} />
                    <Route path="/Payment" element={<Payment />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/Shipping" element={<Shipping />} />
                    <Route path="/wishlist" element={<Whislist />} />
                    <Route path="/terms-and-condition" element={<TermsCondition />} />
                    <Route path="/privacy-and-policy" element={<PrivacyPolicy />} />
                    <Route path="/all-product-details-man" element={<AllProductDetailsMan />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
