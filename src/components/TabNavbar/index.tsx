import React from "react";
import { ROUTES } from "@route/constants.route";
import { NavLink } from "react-router-dom";

const TabNavbar = () => {
  return (
    <>
      <div
        className={`h-24 w-full flex justify-between relative flex-col px-4`}
      >
        <div className="flex flex-col gap-6">
          <NavLink to={ROUTES.USERHOME}>
            <span className="text-2xl text-mainParaColor lg:inline-block md:block font-medium  py-2.5 px-5 w-full">
              Home
            </span>
          </NavLink>
          <NavLink to={ROUTES.POPULAR_COURSES}>
            <span
              className={`text-2xl text-mainParaColor  md:block font-medium  py-2.5 px-5 w-full ${
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
              className={`text-2xl text-mainParaColor  md:block font-medium  py-2.5 px-5 w-full ${
                window.location.pathname === ROUTES.BUY_COURSES
                  ? "border-b"
                  : ""
              }`}
            >
              Buy
            </span>
          </NavLink>
          <NavLink to={ROUTES.FAQ}>
            <span
              className={`text-2xl text-mainParaColor  md:block font-medium  py-2.5 px-5 w-full ${
                window.location.pathname === ROUTES.FAQ ? "border-b" : ""
              }`}
            >
              FAQs
            </span>
          </NavLink>
          <NavLink to={ROUTES.CART}>
            <span
              className={`text-2xl text-white bg-mainColor font-medium py-2.5 rounded-md px-5 w-full ml-6`}
            >
              My Cart
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TabNavbar;
