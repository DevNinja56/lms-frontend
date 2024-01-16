import { ROUTES } from "@route/constants.route";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import ProfileBox from "./Profile-Box";
import LinksDropdown from "./Links.route";
import { motion } from "framer-motion";
import { layoutType } from "@slices/ui.slice";
import { useUi } from "@hooks/user-interface";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./Logo";
import { getAvatar } from "@utils/User/get-avatar";
import { useUserAuth } from "@hooks/auth-hook";
import { FiChevronDown } from "react-icons/fi";
import { useCourse } from "@hooks/course";
import Bell from "./DropDownIcons/Bell";

interface propsType {
  layout?: layoutType;
}

const Header: React.FC<propsType> = () => {
  const [show, setShow] = useState<boolean>(false);
  const { pathname } = useLocation();
  const { toggleNav, routeBlock } = useUi();
  const layout = pathname.includes(ROUTES.HOMEPAGE);
  const { user } = useUserAuth();
  const { course } = useCourse();

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  return (
    <motion.header
      className={`bg-white flex justify-between shadow-md h-[70px] px-12 items-center ${
        layout && "fixed w-screen top-0"
      } z-50`}
    >
      <div className="grid place-items-center">
        {layout ? (
          <Logo />
        ) : (
          !pathname.includes("/subjects") && (
            <button onClick={toggleNav}>
              <RxHamburgerMenu className="text-2xl text-mainTextColor ml-[-30px]" />
            </button>
          )
        )}
        {pathname.includes("/subjects") && (
          <h1 className="uppercase text-2xl font-bold text-lightBlackColor">
            {course.name}
          </h1>
        )}
      </div>
      <div className="right-side-drop-down flex gap-7 items-center ">
        <div className="notification">
          {!routeBlock && (
            <Link to={ROUTES.NOTIFICATION}>
              <Bell />
            </Link>
          )}
        </div>
        <div className="profile-dropdown select-none">
          <button
            onClick={() => setShow(true)}
            className="cursor-pointer flex gap-x-3 items-center"
          >
            <img
              src={getAvatar(user, 80)}
              alt="profile image"
              draggable={false}
              className="rounded-full border-1 border-gray-400 w-[36px] h-[36px] "
            />
            <p className="text-[13px] flex items-center gap-x-1 text-mainParaColor">
              {user.name}
              <FiChevronDown />
            </p>
          </button>
          {!routeBlock && (
            <Dropdown
              onClose={() => setShow(false)}
              isOpen={show}
              className="top-[59px]"
            >
              <ul className="bg-white shadow-lg shadow-gray-400 cursor-pointer rounded-[5px] py-2">
                <ProfileBox />
                <LinksDropdown />
              </ul>
            </Dropdown>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
