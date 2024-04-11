import React, { useEffect } from "react";
import Footer from "../../../../src copy/components/Footer";
import NavbarServices from "../../../../src copy/components/NavbarServices";
import {
  gutter1,
  gutter2,
  gutter3,
  gutter4,
  guttercleaning,
} from "../../../../src copy/assets/index";
import { Link } from "react-router-dom";
import Testimonials from "../../../../src copy/components/Landing/Testimonials";
import Socials from "../../../../src copy/components/Landing/Socials";
import Quotes from "../../../../src copy/components/Landing/Quotes";
import Tabs from "../../../../src copy/components/Landing/Tabs";

const GutterCleaning = () => {
  useEffect(() => {
    document.title = "Professional Gutter Cleaning";
  }, []);
  return (
    <>
      <meta
        name="description"
        content="Gutter vacuuming offers a safer, more efficient alternative to
              traditional methods. By eliminating the need for ladders and
              enabling easy access to high gutters."
      />
      {/* Navbar */}
      <NavbarServices />
      <main className="relative md:h-[100vh] w-full">
        {/* Content */}
        <div>
          <figure className="w-full absolute -z-10">
            <img
              className="w-full object-cover h-[550px] md:h-[100vh] brightness-[.45]"
              src={guttercleaning}
              alt="Background Image"
            />
          </figure>
          <div className="pt-[150px] md:pt-[300px] flex flex-col h-[550px] mx-5 lg:pl-20 space-y-10 sm:space-y-14">
            <h1 className="text-white sub-headers pr-5 sm:pr-0 uppercase text-4xl sm:text-4xl md:text-6xl font-bold text-shadow">
              Gutter Cleaning
            </h1>
            <h2 className="uppercase sm:text-lg md:text-2xl text-white font-semibold text-shadow">
              Efficient gutter cleaning with telescopic vacuum poles.
            </h2>
            <Link to={"/contact-us"} className="">
              <button className="contact-now z-50 md:!text-xl ">
                Claim Your Free Quote
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div className="mt-10  md:mt-0 text-center sm:text-start">
        <div className=" md:pt-24 mb-6 mx-6 sm:mx-10 2xl:mx-16  flex flex-wrap lg:flex-nowrap lg:space-x-12">
          <div className="lg:w-3/5 space-y-6">
            <h1 className="text-3xl sm:text-4xl text-shadow md:text-5xl font-bold sub-headers ">
              Telescopic Vacuum Gutter Cleaning
            </h1>
            <p className="leading-relaxed text-[#66666] pt-4 sm:text-lg ">
              At <span className="font-bold"> Total Exterior Cleaning,</span> we
              understand the integral role that well-maintained gutters play in
              preserving the integrity and aesthetic appeal of your home. Our
              commitment to excellence drives us to offer cutting-edge gutter
              cleaning vacuuming services with the use of{" "}
              <span className="font-extrabold">
                telescopic poles and cameras to safely remove all debris from
                the ground.{" "}
              </span>
              <p className="leading-relaxed font-extrabold  text-[#66666] underline pt-2 sm:text-lg lg:text-xl">
                This means we won't walk across your roof and potentially crack
                one of your tiles leading to more issues.
              </p>
            </p>
            <h2 className="text-2xl capitalize text-shadow-subtle sm:text-4xl font-semibold text-cyan-500">
              Gutter Vacuuming Without roof damage
            </h2>
            <p className="leading-relaxed text-[#66666] sm:text-lg ">
              Gutter vacuuming offers a safer, more efficient alternative to
              traditional methods. By eliminating the need for ladders and
              enabling easy access to high gutters.{" "}
              <span className="font-semibold">
                Using the most update-to-date cameras we provide before and
                after pictures for you on completion.
              </span>{" "}
              The adjustable poles cater to various gutter heights and angles,
              ensuring comprehensive cleaning without manual scooping or
              climbing. With powerful suction, it effectively removes debris,
              preventing clogs and preserving gutter integrity.
            </p>
            <img
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              data-aos="zoom-in-up"
              className="sm:hidden h-[400px] rounded-sm w-full object-cover"
              src={gutter4}
              alt="Gutter Cleaning"
            />
            <h2 className="text-2xl text-shadow-subtle sm:text-4xl font-semibold text-cyan-500">
              Extending the Lifespan of Your Gutters
            </h2>
            <p className="leading-relaxed text-[#66666] sm:text-lg  ">
              Regular gutter maintenance is crucial for preventing water damage
              and extending the lifespan of your gutters. With our professional
              vacuuming services, you can trust Total Exterior Cleaning to keep
              your gutters in optimal condition, ensuring they function
              effectively for years to come.
            </p>
            <p className="text-shadow-subtle leading-relaxed text-lg md:text-2xl font-semibold">
              Contact Us today to schedule your free quote. We'll visit your
              property, provide a transparent, no-obligation estimate, and
              breathe new life into your outdoor areas.
            </p>
            <div className=" py-5 flex justify-center">
              <Link to={"/contact-us"}>
                <button className="contact-now z-50 md:!text-xl ">
                  Contact Us Now
                </button>
              </Link>
            </div>
            <h2 className="text-center sub-headers text-shadow text-3xl font-bold lg:hidden">
              Check Out Some Of Our Photos!
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 w-full my-10 lg:mt-0 lg:pl-5 lg:space-y-5 gap-3 lg:gap-0 lg:space-x-0 justify-center items-center lg:w-2/5">
            <div className="w-full  lg:w-full h-[350px] lg:h-[400px] flex  rounded-md">
              <img
                className="w-full  mb-4 sm:mb-0 rounded-md"
                src={gutter3}
                alt=""
              />
            </div>
            <div className="w-full  lg:w-full h-[350px] lg:h-[400px] flex  rounded-md">
              <img
                className="w-full mb-4 sm:mb-0 rounded-md"
                src={gutter1}
                alt=""
              />
            </div>
            <div className="w-full  lg:w-full h-[350px] lg:h-[400px] flex  rounded-md">
              <img
                className="w-full h-full mb-4 sm:mb-0 rounded-md"
                src={gutter2}
                alt=""
              />
            </div>
            <div className="w-full hidden sm:inline-block lg:hidden  mt-4 sm:mt-0 lg:w-full h-[350px]  rounded-md">
              <img
                className="w-full h-full mb-4 sm:mb-0 rounded-md"
                src={gutter4}
                alt=""
              />
            </div>

            <Link
              className="hidden lg:inline-block bg-white text-center hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              to={"/gallery"}
            >
              View More Photos
            </Link>
          </div>
        </div>
      </div>
      <section className="md:my-10 mb-20 py-2 bg-gray-50 ">
        <Socials />
      </section>
      <Testimonials />
      <Tabs />
      <Quotes />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default GutterCleaning;
