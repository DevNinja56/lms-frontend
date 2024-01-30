import React from "react";
import Heading from "@components/Common/Heading";
import {FaStar} from "react-icons/fa";
import {HiOutlineUser} from "react-icons/hi";
import {PiClockClockwiseFill} from "react-icons/pi";

const DetailBanner = () => {
  return (
    <div className="flex flex-col gap-6 py-7 pb-36 bg-gray-100 mb-12">
      <div className="flex gap-2.5">
        <button className="px-4 py-1.5 border-2 rounded-3xl bg-greenMain hover:border-2 hover:bg-white hover:border-blue-500">
          BEST SELLER
        </button>
        <button className="px-4 py-1.5 border-2 rounded-3xl bg-red-500 text-white hover:border-2 hover:bg-white hover:border-blue-500 hover:text-black">
          NEW
        </button>
        <button className="px-4 py-1.5 border-2 rounded-3xl bg-blue-500 bg-opacity-100 text-white hover:border-2 hover:bg-white hover:border-blue-500 hover:text-black">
          POPULAR
        </button>
      </div>
      <div className="w-11/12">
        <Heading heading="User Experience Design Essentials - Adobe XD UI UX Design" />
      </div>
      <div className="w-4/6">
        <p className="text-base font-normal leading-5">
          Use XD to get a job in UI Design, User
          Interface, User Experience design, UX
          design & Web Design
        </p>
      </div>
      <div className="flex font-normal text-sm gap-16">
        <div className="flex  gap-2 text-yellow-400 items-center">
          <span>4.5</span>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <span className="text-black">
            (1991)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xl">
            {" "}
            <HiOutlineUser />
          </div>
          <span>853 enrolled on this course</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-2xl">
            <PiClockClockwiseFill />
          </div>
          <span>Last updated 11/2021</span>
        </div>
      </div>
      <div className="flex items-center gap-2 pt-6">
        <img
          src="/images/Courses/Ellipse 415.png"
          alt="user"
        />
        <p className="font-normal text-sm">
          Daniyal Samim
        </p>
      </div>
    </div>
  );
};

export default DetailBanner;
