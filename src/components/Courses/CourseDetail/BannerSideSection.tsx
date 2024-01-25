import React from "react";
import Button from "@components/Common/Button";
import { Link } from "react-router-dom";
import { IoMdBook } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import { PiClockClockwise } from "react-icons/pi";
import { RiTrophyLine } from "react-icons/ri";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaAward } from "react-icons/fa6";
import { SiCircle } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { ROUTES } from "@route/constants.route";
import useCourseCart from "@hooks/cart-hook";

const BannerSideSection = () => {
  const { addToCart } = useCourseCart();
  const handleAddToCart = () => {
    addToCart({
      id: "123",
      image: "/images/Courses/Rectangle 3663.png",
      name: "The Complete HTML & CSS Bootcamp 2023 Edition",
      price: "92",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <img src="/images/Courses/Group 7679.png" alt="video" />
      <div className="flex items-center justify-between py-1 px-4">
        <span className="text-2xl font-semibold">$96.00</span>
        <span className="font-normal text-base">$76.00</span>
      </div>
      <div className="flex flex-col gap-5 px-5">
        <Button
          text="Add To Cart"
          onClick={() => handleAddToCart()}
          className="bg-btnColor bg-opacity-100 py-5 px-23 text-white hover:text-btnColor hover:bg-white hover:border-btnColor hover:border-2"
        />
        <Link
          to={ROUTES.CHECKOUT}
          onClick={handleAddToCart}
          className="bg-white rounded py-5 px-24 border-btnColor border-2 text-btnColor hover:bg-btnColor hover:text-white"
        >
          Buy Now
        </Link>
        <p className="font-normal text-sm text-center">
          30-Day Money-Back Guarantee
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor border-b border-b-gray-500 ">
          <div className="flex items-center gap-3">
            <IoMdBook />
            <span>Lessons</span>
          </div>
          <div>
            <span>20</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor border-b border-b-gray-500 ">
          <div className="flex items-center gap-3">
            <LuAlarmClock />
            <span>Quizzes</span>
          </div>
          <div>
            <span>3</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor border-b border-b-gray-500 ">
          <div className="flex items-center gap-3">
            <PiClockClockwise />
            <span>Duration</span>
          </div>
          <div>
            <span>13 Hours</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor border-b border-b-gray-500 ">
          <div className="flex items-center gap-3">
            <RiTrophyLine />
            <span>Skill level</span>
          </div>
          <div>
            <span>Beginner</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor border-b border-b-gray-500 ">
          <div className="flex items-center gap-3">
            <LiaLanguageSolid />
            <span>Language</span>
          </div>
          <div>
            <span>English</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor border-b border-b-gray-500 ">
          <div className="flex items-center gap-3">
            <FaAward />
            <span>Certificate</span>
          </div>
          <div>
            <span>Yes</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor ">
          <div className="flex items-center gap-3">
            <SiCircle />
            <span>Full lifetime access</span>
          </div>
          <div>
            <span>Yes</span>
          </div>
        </div>

        <div className="flex justify-between items-center font-normal text-xl text-mainParaColor mx-auto py-3">
          <div className="flex items-center gap-3 text-center">
            <FaFacebookF />
            <CiTwitter />
            <CiLinkedin />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSideSection;
