import React, { useState } from "react";
import whiteLogo from "../../../public/images/logo.svg";
import { ROUTES } from "@route/constants.route";
import { NavLink, useNavigate } from "react-router-dom";
import TabNavbar from "@components/TabNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeComponent = () => {
    setIsOpen(false);
  };

  const isHomePage = window.location.pathname === ROUTES.USERHOME;
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate(ROUTES.USERHOME);
  };

  return (
    <div
      className={`h-24 w-full flex justify-between items-center relative ${
        isHomePage ? "bg-white" : "bg-mainColor text-white"
      } md:px-24 sm:px-8 xs:px-4`}
    >
      <div
        onClick={navigateToHome}
        className={`flex items-center justify-between py-4 px-2 sticky top-0 ${
          isHomePage ? "bg-mainColor" : "bg-[#6b87db] "
        } rounded-full`}
      >
        <img className="" src={whiteLogo} />
      </div>

      <div className="lg:hidden flex items-center gap-4">
        <NavLink to={ROUTES.SIGN_IN}>
          <span
            className={`text-sm lg:inline-block font-medium md:py-2.5 sm:py-2 xs:py-2 rounded-md px-5 w-full  ${
              isHomePage ? "bg-mainColor text-white" : "bg-white text-mainColor"
            }`}
          >
            Portal
          </span>
        </NavLink>
        <button onClick={toggleMenu}>
          <svg
            className={`fill-current h-6 w-6`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

        <div className={`fixed top-0 ${isOpen ? "right-0 opacity-100" : "right-[-100%] opacity-0"} bottom-0 md:w-6/12 sm:w-3/5 xs:w-3/5 bg-white z-[9999] transition-all duration-300`}>
          <div className="absolute top-0 right-0 bottom-0 w-full bg-white z-[10000] transition-transform duration-1000">
            <div className="flex justify-between px-8 py-4 shadow-xl">
              <div
                onClick={navigateToHome}
                className={`flex items-center justify-between py-5 px-2 sticky top-0 ${
                  isHomePage ? "bg-mainColor" : "bg-[#6b87db] "
                } rounded-full`}
              >
                <img className="" src={whiteLogo} />
              </div>
              <button
                className="bg-btnColor text-white rounded-[2rem]"
                onClick={closeComponent}
              >
                <svg
                  className={`fill-current h-14 w-14 p-4`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
              </button>
            </div>
            <TabNavbar />
          </div>
        </div>
      <div
        className={`block item-center justify-center gap-3 lg:flex lg:items-center md:hidden sm:hidden xs:hidden lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <NavLink to={ROUTES.USERHOME}>
          <span className="text-sm lg:inline-block md:block font-medium  py-2.5 px-5 w-full">
            Home
          </span>
        </NavLink>
        <NavLink to={ROUTES.POPULAR_COURSES}>
          <span
            className={`text-sm lg:inline-block md:block font-medium  py-2.5 px-5 w-full ${
              window.location.pathname === ROUTES.POPULAR_COURSES
                ? "border-b"
                : ""
            }`}
          >
            Popular Courses
          </span>
        </NavLink>
        <NavLink to={ROUTES.BUY_COURSES}>
          <span
            className={`text-sm lg:inline-block md:block font-medium  py-2.5 px-5 w-full ${
              window.location.pathname === ROUTES.BUY_COURSES ? "border-b" : ""
            }`}
          >
            Buy
          </span>
        </NavLink>
        <NavLink to={ROUTES.FAQ}>
          <span
            className={`text-sm lg:inline-block md:block font-medium  py-2.5 px-5 w-full ${
              window.location.pathname === ROUTES.FAQ ? "border-b" : ""
            }`}
          >
            FAQs
          </span>
        </NavLink>

        <NavLink to={ROUTES.CHECKOUT}>
          <span className="text-sm lg:inline-block md:block font-medium  py-2.5 px-5 w-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.74181 18.5545C4.94143 20 7.17414 20 11.6395 20H12.3607C16.8261 20 19.0589 20 20.2585 18.5545M3.74181 18.5545C2.54219 17.1091 2.95365 14.9146 3.77657 10.5257C4.36179 7.40452 4.65441 5.84393 5.7653 4.92196M20.2585 18.5545C21.4581 17.1091 21.0466 14.9146 20.2237 10.5257C19.6385 7.40452 19.3459 5.84393 18.235 4.92196M18.235 4.92196C17.1241 4 15.5363 4 12.3607 4H11.6395C8.46398 4 6.8762 4 5.7653 4.92196"
                stroke="#495057"
                strokeWidth="2"
                style={{
                  stroke: isHomePage ? "#495057" : "white",
                }}
              />
              <path
                d="M9.1709 8C9.58273 9.16519 10.694 10 12.0002 10C13.3064 10 14.4177 9.16519 14.8295 8"
                stroke="#495057"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  stroke: isHomePage ? "#495057" : "white",
                }}
              />
            </svg>
          </span>
        </NavLink>
        <NavLink to={ROUTES.SIGN_IN}>
          <span
            className={`text-sm lg:inline-block font-medium py-2.5 rounded-md px-5 w-full  ${
              isHomePage ? "bg-mainColor text-white" : "bg-white text-mainColor"
            }`}
          >
            Portal
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
