import { ROUTES } from "@route/constants.route";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={ROUTES.HOMEPAGE}>
      <img
        src="/images/logo-fill.png"
        alt="main logo"
        className="w-[65px] h-[65px] inline-block"
      />
    </Link>
  );
};

export default Logo;
