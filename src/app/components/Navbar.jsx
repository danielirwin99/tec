import React from "react";
import { BsTelephone } from "react-icons/bs";
// import Hamburger from "./UI/Hamburger";
import BurgerBar from "./UI/BurgerBar";
import { logo } from "../assets/index.js";
import Link from "next/link";
import Image from 'next/image'
import Menu from "./UI/Menu";

const Navbar = () => {
  return (
    <nav className="top-0 z-[999] w-full bg-white py-1 px-4 xl:px-20 lg:px-10  border-b-gray-200">
      <div className="flex justify-around items-center">
        <Link className="flex items-center justify-center" href="/">
          <Image className="h-20 w-32 sm:h-24 sm:w-40" src={logo} alt="Logo" />
        </Link>
        <ul className="ms-auto flex lg:space-x-7 xl:space-x-10 items-center ">
          <li className="nav-item hidden lg:flex pr-3">
            <Link className="nav-link" href="/about-us">
              About Us
            </Link>
          </li>
          <li className="nav-item hidden lg:flex pr-3">
            <Link className="nav-link" href="/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item hidden lg:flex">
            <div className="nav-link cursor-pointer">
              <Menu />
            </div>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#photos">
              Before and Afters
            </a>
          </li> */}
          <li className="nav-item hidden lg:flex pr-3">
            <Link className="nav-link" href="/contact-us">
              Contact Us
            </Link>
          </li>
          <li className="nav-item hidden md:flex xl:pr-5">
            <a
              href="tel:0417477117"
              className="nav-link text-center flex flex-col"
            >
              <div className="flex justify-center items-center text-sm lg:text-base">
                <BsTelephone className="mr-3" />
                <span className="font-bold text-lg">0417 477 117</span>
              </div>
              <p className="text-base xl:text-lg font-bold lg:font-normal capitalize">
                Call now for a free quote
              </p>
            </a>
          </li>
          <li className="nav-item lg:hidden lg:pl-5">
            <BurgerBar />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
