import React from "react";
import whiteLogo from "../../../public/images/logo.svg";
import {ROUTES} from "@route/constants.route";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  const isHomePage =
    window.location.pathname === ROUTES.USERHOME;
  return (
    <div
      className={`h-24 w-full flex justify-between items-center relative ${
        isHomePage
          ? "bg-white"
          : "bg-mainColor text-white"
      } px-24`}>
      <div
        className={`flex items-center justify-between py-4 px-2 sticky top-0 ${
          isHomePage
            ? "bg-mainColor"
            : "bg-[#6b87db] "
        } rounded-full `}>
        <img className="" src={whiteLogo} />
      </div>

      <div className="flex item-center justify-center gap-3 ">
        <NavLink to={ROUTES.USERHOME}>
          <span className="text-sm inline-block font-medium  py-2.5 px-5 w-full">
            Home
          </span>
        </NavLink>
        <NavLink to={ROUTES.POPULAR_COURSES}>
          <span
            className={`text-sm inline-block font-medium  py-2.5 px-5 w-full ${
              window.location.pathname ===
              ROUTES.POPULAR_COURSES
                ? "border-b"
                : ""
            }`}>
            Popular Courses
          </span>
        </NavLink>
        <NavLink to={ROUTES.BUY_COURSES}>
          <span
            className={`text-sm inline-block font-medium  py-2.5 px-5 w-full ${
              window.location.pathname ===
              ROUTES.BUY_COURSES
                ? "border-b"
                : ""
            }`}>
            Buy
          </span>
        </NavLink>
        <NavLink to={ROUTES.FAQ}>
          <span
            className={`text-sm inline-block font-medium  py-2.5 px-5 w-full ${
              window.location.pathname ===
              ROUTES.FAQ
                ? "border-b"
                : ""
            }`}>
            FAQs
          </span>
        </NavLink>

        <NavLink to={ROUTES.CART}>
          <span className="text-sm inline-block font-medium  py-2.5 px-5 w-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M3.74181 18.5545C4.94143 20 7.17414 20 11.6395 20H12.3607C16.8261 20 19.0589 20 20.2585 18.5545M3.74181 18.5545C2.54219 17.1091 2.95365 14.9146 3.77657 10.5257C4.36179 7.40452 4.65441 5.84393 5.7653 4.92196M20.2585 18.5545C21.4581 17.1091 21.0466 14.9146 20.2237 10.5257C19.6385 7.40452 19.3459 5.84393 18.235 4.92196M18.235 4.92196C17.1241 4 15.5363 4 12.3607 4H11.6395C8.46398 4 6.8762 4 5.7653 4.92196"
                stroke="#495057"
                stroke-width="2"
                style={{
                  stroke: isHomePage
                    ? "#495057"
                    : "white",
                }}
              />
              <path
                d="M9.1709 8C9.58273 9.16519 10.694 10 12.0002 10C13.3064 10 14.4177 9.16519 14.8295 8"
                stroke="#495057"
                stroke-width="2"
                stroke-linecap="round"
                style={{
                  stroke: isHomePage
                    ? "#495057"
                    : "white",
                }}
              />
            </svg>
          </span>
        </NavLink>
        <NavLink to={ROUTES.SIGN_IN}>
          <span
            className={`text-sm inline-block font-medium py-2.5 rounded-md px-5 w-full  ${
              isHomePage
                ? "bg-mainColor text-white"
                : "bg-white text-mainColor"
            }`}>
            Portal
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
