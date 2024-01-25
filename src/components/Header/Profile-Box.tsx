import {ROUTES} from "@route/constants.route";
import React from "react";
import {Link} from "react-router-dom";
// import { BsChevronRight } from "react-icons/bs";
// import { useUserAuth } from "@hooks/auth-hook";
// import { getAvatar } from "@utils/User/get-avatar";

const ProfileBox = () => {
  // const { user } = useUserAuth();
  return (
    <Link to={ROUTES.PROFILE}>
      {/* <li className="py-3 px-5 hover:bg-grayBg select-none ">
        <div
          className="flex items-center gap-5 pb-3 pt-1 min-w-[250px] border-b border-b-gray-400 relative "
          title="User Full Name"
        >
          <span className="absolute top-[50%] right-3 translate-y-[-50%] ">
            <BsChevronRight color="#87A1C8" />
          </span>
          <div className="img">
            <img
              src={getAvatar(user, 100)}
              alt="profile image"
              draggable={false}
              className="rounded-full border-1 border-gray-400 w-[50px] h-[50px] "
            />
          </div>
          <div className="flex flex-col">
            <span className="text-black text-sm capitalize font-semibold  ">
              {user.name}
            </span>
            <span className="text-mainTextColor text-xs ">
              {user.phone_number}
            </span>
            <span className="text-mainTextColor text-xs ">{user.email}</span>
          </div>
        </div>
      </li> */}
    </Link>
  );
};

export default ProfileBox;
