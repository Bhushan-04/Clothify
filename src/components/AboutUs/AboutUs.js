import React from "react";
import "./AboutUs.css";
import pic from "../../assets/pic.jpg";
import clothes from "../../assets/clothes.webp";
import cotton from "../../assets/cotton.webp";
import tshirt from "../../assets/tshirt.webp";
const AboutUs = () => {
  return (
    <>
      <section className="AboutUs">
        <div className="container">
          <div className="row">
            <h1 className=" heading text-center mt-md-5 mt-3">About</h1>
            <h1 className=" heading text-center mt-md-5 mt-3">HOW IT ALL STARTED</h1>
            <div className="col-md-6">
            <div className="pic-img text-center mt-md-5 mt-3">
              <img src={pic} alt="..." className="pic" />
            </div></div>
            <div className="col-md-6 col-lg-6 mt-md-5">
            <p className="paragraph1 mt-2 ">
              We founded the Classic T-shirt Company to make a difference, to be
              a force for good,
               and to show by example how you can take something as simple
              as a T-shirt and make it better in every way.
            </p>

            <p className="paragraph1 mt-2">
              The mainstream fashion industry as it exists today was built on
              practices that we can no longer afford to pay.
              Rather than accept this, we are becoming the change we want
              to see in our industry and the world.
            </p>

            <p className="paragraph1 mt-2">
              Much of our inspiration to do this came with welcoming our
              daughter, Gabriella into the world.
              We wanted to be an example to show her that creating change
              is possible.
              Similarly, we wanted our company, The Classic T-shirt
              Company, to set an example in the fashion industry.
               Not just to hold mainstream fashion accountable to do
              better, but to show future generations what’s possible.
            </p>

            <p className="paragraph1 mt-2 ">
              Olga & Paul Garibian <br />
              The Classic T-Shirt founders
            </p></div>
           

            <div className="col-md-6 col-lg-6  mt-md-5 mt-2 ">
            <h1 className="heading mt-md-5 mt-3 text-center"> OUR VALUES</h1>

            <h1 className="mt-md-5 mt-3 text-center">MADE LOCALLY IN CALIFORNIA</h1>

            <p className="paragraph1">
              While we are proud to work with an international team and serve
              customers all over the earth,
               every community needs a home, and ours is in{" "}
              <b>Los Angeles, California.</b>
              This is not only where our founders live, but also where
              Classic T-shirts are made.
               For us, that means more than just meeting US labor laws.
               We pay<b>living wages</b>
              to all of our workers–more than the minimum wage here in
              California, and we far exceed environmental standards too.
               Our policy is<b>plastic-free</b> shipping, maybe that can
              inspire California lawmakers to do more for our planet too.
            </p>

            {/* <h1 className="text-center mt-5">HIGH QUALITY PRODUCTS</h1>
            <p className="paragraph1 text-center mt-5">
              It’s important to us that all of our products are worth your
              investment.
              <br /> Not just in terms of helping a local business and doing
              right for the planet, but for you.
              <br /> When you wear a Classic T-shirt, we want you to feel good.
              The way it fits and feels is just as important as how it can match
              the rest of your outfit.
              <br />
              That’s why we use <b>high quality materials</b> and make every
              item with a high thread count.
              <br /> This makes them <b>softer,</b> more <b>durable,</b> and
              gives them that <b>unique sheen</b> that doesn’t fade even after
              you wash them many times.
            </p>

            <h1 className="mt-5 text-center">SUSTAINABLE MATERIALS </h1>
            <p className="paragraph1 text-center mt-5">
              Organic is a word that gets thrown on a lot of labels, but you
              don’t get to be <b>GOTS certified</b> just by applying for it. The
              rigorous standards Classic T-shirt Company adheres to in order to
              earn that certification cover all essential aspects of how the
              cotton was grown, meaning it’s not genetically modified, no toxic
              pesticides or fertilizers are used, a responsible amount of water
              is used, and the same land and soil can be reused harvest after
              harvest.
            </p>
            <p className="paragraph1 text-center mt-5">
              We pledge to use
              <b>
                <u>organic cotton,</u>
              </b>
              which is better for the planet and happens to make a superior
              product.
            </p>
            <p className="paragraph1 text-center mt-2"> */}
              All of our cotton we use to make our products is GOTS certified
              organic, and ethically sourced from local farms in India.
            </div>
            <div className="col-md-6 mt-md-5 mt-3">
            <div className="clothes-img text-center">
              <img src={clothes} alt="..." className="pic" />
            </div></div>


            <div className="col-md-6 mt-md-5 mt-3">
            <div className="cotton-img text-center mt-5">
              <img src={cotton} alt="..." className="pic" />
            </div></div>

            <div className="col-md-6 col-lg-6 mt-md-5 mt-3">
            <h1 className="heading text-center mt-md-5 mt-3"> PURPOSE</h1>
            <p className="paragraph1">
              The Classic T-shirt Company is a project we hope will
              <b>inspire future generations</b>to build profitable and
              sustainable businesses that are a win-win for all:
               you the consumer, the planet we share, and the community
              that we are building together.
               We have always proudly
              <b>pledged 1% of our sales to charities</b> that are also making a
              difference, including
              <u>Water for People, Armenia Tree Project,</u>
              and <u>The Ocean Cleanup.</u>
              In the interest of doing our part for the environment, we
              not only use organic materials that don’t harm the planet,
              but we also guarantee plastic-free shipping, so your orders
              arrive in elegant, <b>100% recycled and recyclable packaging.</b>
            </p></div>

           <div className="col-md-6 col-lg-6 mt-md-5 mt-3">
            <h1 className="heading text-center mt-md-5 mt-3">FIVE-STAR CUSTOMER SERVICE</h1>
            <p className="paragraph1 text-center mt-md-5 mt-3">
              Our commitment to serving the environment is just as important to
              us as our commitment to serving our customers.
              We take every single <u>customer review</u> into
              consideration and encourage you to do the same.
             If you have questions feel free to browse our
              <u> FAQ section </u>
              or <u>contact us directly.</u>
            </p>
            <h1 className="heading text-center mt-md-5 mt-3">CONSTANT EVOLUTION</h1>

            <p className="paragraph1">
              We set out to start with the basics, and once we perfected our
              prototype Classic T-shirt, we branched out following
              recommendations and guidance from our customers. Now we offer
              thicker white T-shirts, new T-shirt designs, new colors, new items
              and collections, and the same, classic, high standards for <b>quality</b>
              and <b>sustainability.</b> Those will never be compromised as we grow!
            </p></div>
            <div className="col-md-6 mt-md-5 mt-3">
            <div className="tshirt-img text-center mt-md-5 mt-3">
              <img src={tshirt} alt="..." className="pic" />
            </div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
