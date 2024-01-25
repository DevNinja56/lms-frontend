import React from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";
import {ROUTES} from "@route/constants.route";
import {useUi} from "@hooks/user-interface";
import {modalType} from "@slices/ui.slice";
import {useUserAuth} from "@hooks/auth-hook";
import User from "./DropDownIcons/User";
import ShoppingCart from "./DropDownIcons/ShoppingCart";
import Setting from "./DropDownIcons/Setting";
import Lock from "./DropDownIcons/Lock";
import LogOut from "./DropDownIcons/LogOut";
import Courses from "./DropDownIcons/Courses";

const list = [
  {
    text: "Profile",
    Icon: User,
    to: ROUTES.PROFILE,
  },
  {
    text: "My Courses",
    Icon: Courses,
    to: ROUTES.HOMEPAGE,
  },
  {
    text: "My Subscriptions",
    Icon: ShoppingCart,
    to: ROUTES.SUBSCRIPTION,
  },
  {
    text: "Settings",
    Icon: Setting,
    to: ROUTES.SETTINGS,
  },
  {
    text: "Change Password",
    Icon: Lock,
    to: "#",
  },
  {
    text: "Log out",
    Icon: LogOut,
    to: "#",
  },
];

const LinksDropdown = () => {
  const {updateModal} = useUi();
  const {logoutUser} = useUserAuth();
  const {pathname} = useLocation();

  const handleOnClick = (val: string) => {
    val === "Log out"
      ? logoutUser()
      : updateModal({
          type: modalType.change_password,
          state: {name: "change password"},
        });
  };

  return (
    <>
      {list.map(({text, Icon, to}, i) => (
        <li
          className={`hover:bg-grayBg hover:text-mainColor group ${
            pathname === to &&
            "bg-grayBg text-mainColor"
          }`}
          key={"list-dropdown-header--" + i}>
          {to !== "#" ? (
            <Link
              to={to || "#"}
              className="flex gap-3 items-center py-2 pl-4 pr-9">
              <span className="icon">
                <Icon active={pathname === to} />
              </span>
              <span>{text}</span>
            </Link>
          ) : (
            <button
              className={`flex gap-3 items-center py-2 pl-4 pr-9 w-full ${
                text === "Log out" &&
                "border-t-2 border-gray-100 my-2 mb-0 pt-4"
              }`}
              onClick={() => handleOnClick(text)}>
              <span className="icon">
                <Icon active={pathname === to} />
              </span>
              <span className="text-mainParaColor">
                {text}
              </span>
            </button>
          )}
        </li>
      ))}
    </>
  );
};

export default LinksDropdown;
