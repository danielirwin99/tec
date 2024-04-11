"use client";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NavbarServices from "../../components/NavbarServices";
import { me1, pressurewashing } from "../../assets/index";
import Link from "next/link";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
// import Testimonials from "../../components/Landing/Testimonials";
import Socials from "../../components/Landing/Socials";
import Quotes from "../../components/Landing/Quotes";
import Tabs from "../../components/Landing/Tabs";
import FAQ from "../../components/Landing/FAQ";
import data from "../../data/imageslider";
// import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

AOS.init();

const PressureWashing = () => {
  const [noOfElement, setNoOfElement] = useState(3);
  const loadMore = () => {
    setNoOfElement(noOfElement + 2);
  };
  useEffect(() => {
    document.title = "Professional Pressure Washing | House Washing Sydney";
  }, []);

  const slice = data.slice(0, noOfElement);
  return (
    <div className="relative">
      {/* Navbar */}
      <NavbarServices />
      {/* META */}
      {/* <Helmet>
        <title>Professional Pressure Washing | House Washing Sydney</title>
        <meta
          name="robots"
          content="Pressure Cleaning, Window Cleaning, Gutter Cleaning"
        />
        <meta
          name="description"
          content="Sydney's Best Pressure Cleaners. Professional Pressure Washers specialising in high or soft pressure washing. Get Your Quote Now"
        />
        <meta name="robots" content="index,follow" />
      </Helmet> */}

      <main
        className="relative md:h-[100vh] w-full "
        data-aos="fade-in"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
      >
        {/* Content */}
        <div>
          <figure className="w-full absolute -z-10">
            <Image
              className="w-full object-cover h-[700px] md:h-[100vh] brightness-[.40]"
              src={pressurewashing}
              alt="Background Image"
            />
          </figure>
          <div className="pt-[150px] md:pt-[300px] md:h-[100vh] h-[700px] flex flex-col mx-4 sm:pr-0 lg:pl-32 space-y-14 sm:space-y-20">
            <h1 className="text-white sub-headers uppercase text-4xl md:text-6xl tracking-wider font-bold text-shadow">
              High Pressure Cleaning Sydney
            </h1>
            <h2 className="uppercase sm:text-lg md:text-3xl text-sky-400 brightness-110 font-semibold text-shadow">
              Your heavy-duty cleaning, handled.
            </h2>
            <Link href="/contact-us" className="">
              <button className="contact-now  z-50 !px-10 md:!text-xl template-shadow-subtle ">
                Get Your Quote!
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        className=" text-center mx-5 sm:text-start"
      >
        <div className=" lg:mx-10 pt-20 mb-5  lg:mr-6 sm:flex flex-wrap lg:flex-nowrap lg:space-x-4">
          <div className="lg:w-[60%] space-y-8  lg:mx-6 lg:pr-8">
            <h1 className="text-3xl sm:text-5xl font-bold text-shadow-subtle sub-headers">
              Refresh Your Home with High Pressure Cleaning.
            </h1>
            <p className="leading-relaxed lg:text-xl xl:text-2xl  text-[#66666]  pt-2  ">
              <span className="font-bold"> Total Exterior Cleaning</span> are
              your go-to local pressure cleaners for professional exterior
              cleaning services in Sydney. Whether you own a residential
              property or a commercial space, our{" "}
              <span className="font-bold">
                family owned and operated business
              </span>{" "}
              is here to help you restore your property back to its original
              state.
            </p>
            <h2 className="text-2xl sub-headers  sm:text-3xl xl:text-4xl font-semibold text-cyan-500">
              House Pressure Cleaning In Sydney For Freshness Of Your Home
            </h2>

            <p className="leading-relaxed xl:text-2xl  lg:text-xl text-[#66666]  ">
              Our team at Total Exterior Cleaning utilizes cutting-edge pressure
              cleaning technology to deliver efficient and quality results. We
              employ the latest industrial-grade equipment, coupled with
              extensive knowledge and experience, to apply high-pressure
              cleaning methods to surfaces such as driveways, pavers, patios,
              concrete floors, and pathways.{" "}
              <span className="hidden xl:flex">
                This approach ensures a thorough and lasting clean, removing
                dirt, mold, mildew, and stains.
              </span>
            </p>

            <h2 className="text-3xl hidden sub-headers !mb-5 sm:flex md:text-3xl xl:text-4xl font-semibold text-cyan-500">
              Preservation and Protection
            </h2>
            <p className="leading-relaxed pt-4 xl:text-2xl hidden lg:text-xl text-[#66666] sm:inline">
              {" "}
              Beyond the aesthetic benefits, our high-pressure cleaning services
              contribute to the preservation and protection of your property.
              Accumulated dirt, mould, and stains not only compromise the visual
              appeal of your exterior surfaces but can also create hazardous and
              slippery conditions.
              <br />
              <br />
              <span className="hidden xl:flex  ">
                Our professional cleaning methods eliminate these dangers,
                providing a safer environment for you, your family, or your
                customers. Additionally, the process helps to restore the
                vibrant colors of your outdoor areas, adding to the overall curb
                appeal of your property.
              </span>
            </p>
            <Image
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              data-aos="zoom-in-up"
              className="sm:hidden h-[400px] rounded-sm w-full object-cover"
              src={me1}
              alt="Pressure Washing"
            />

            <p className=" leading-relaxed text-lg md:text-2xl font-semibold">
              Contact Us today to schedule your free quote. We'll visit your
              property, provide a transparent, no-obligation estimate, and
              breathe new life into your outdoor areas.
            </p>
            <div className="py-6 flex justify-center">
              <Link className="w-full md:w-auto" href="/contact-us">
                <button className="contact-now w-full md:w-auto !capitalize z-50 md:!text-2xl !text-xl !px-10 !py-4 ">
                  Get Your Free Quote!
                </button>
              </Link>
            </div>
            <h2 className="text-center text-shadow-subtle sub-headers text-3xl font-bold sm:hidden">
              Check Out Some Of Our Photos!
            </h2>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="flex flex-col sm:mx-0 sm:flex-row lg:flex-col my-10 lg:mt-0 lg:space-y-5 sm:space-x-4 lg:space-x-0 justify-center items-center lg:w-[40%]"
          >
            {slice.map((image) => (
              <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-sm">
                <ReactCompareSlider
                  className="w-full mb-4 contrast-[1.10] sm:mb-0 rounded-sm"
                  itemOne={
                    <ReactCompareSliderImage src={image.img1} alt="Before 2" />
                  }
                  itemTwo={
                    <ReactCompareSliderImage src={image.img2} alt="After 2" />
                  }
                />
              </div>
            ))}
            {/* <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-sm">
              <ReactCompareSlider
                className="w-full mb-4 sm:mb-0"
                itemOne={
                  <ReactCompareSliderImage src={before3} alt="Before 3" />
                }
                itemTwo={<ReactCompareSliderImage src={after3} alt="After 3" />}
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-sm">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before8} alt="Before 3" />
                }
                itemTwo={<ReactCompareSliderImage src={after8} alt="After 3" />}
              />
            </div> */}
            <div className="flex items-center  justify-center mt-7">
              <Link
                className="hidden  sm:inline-block bg-white text-center hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                href="/gallery"
              >
                View More Photos
              </Link>
              <button
                className="sm:hidden inline-block bg-white text-center hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => loadMore()}
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div data-aos="fade-up" data-aos-easing="ease-in-out">
        <Testimonials />
      </div> */}
      <div
        data-aos="fade-in"
        data-aos-easing="ease-in-out"
        className=" mb-20 py-2  bg-gray-50 border-t-2 border-b-2 "
      >
        <Socials />
      </div>
      <div>
        <FAQ />
      </div>
      <div data-aos="fade-in" data-aos-easing="ease-in-out">
        <Tabs />
      </div>
      <div>
        <Quotes />
      </div>
      {/* Footer */}
      <Footer />
      <meta
        name="description"
        content="Sydney's Best Pressure Cleaners. Professional Pressure Washers specialising in high or soft pressure washing."
      />
    </div>
  );
};

export default PressureWashing;
