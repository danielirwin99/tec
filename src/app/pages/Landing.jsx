import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Landing/Header";
import Services from "../components/Landing/Services";
import Photos from "../components/Landing/Photos";
import Quotes from "../components/Landing/Quotes";
import About from "../components/Landing/About";
import Footer from "../components/Footer";
import Benefits from "../components/Landing/Benefits";
import Tabs from "../components/Landing/Tabs";
import Socials from "../components/Landing/Socials";
import Testimonials from "../components/Landing/Testimonials";
import FAQ from "../components/Landing/FAQ";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Tabs />
      <Photos />
      <FAQ />
      {/* <Testimonials /> */}
      <Benefits />
      <Socials />
      <Quotes />
      <Footer />
    </>
  );
};

export default Landing;
