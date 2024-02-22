import React, { useEffect } from "react";
import Button from "@components/Common/Button";
import { Link } from "react-router-dom";
import { IoMdBook } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import { PiClockClockwise } from "react-icons/pi";
import { RiTrophyLine } from "react-icons/ri";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaAward } from "react-icons/fa6";
import { SiCircle } from "react-icons/si";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { ROUTES } from "@route/constants.route";
import useCourseCart from "@hooks/cart-hook";
import { useParams } from "react-router-dom";
import { useGetCourseByIdQuery, useGetSubjectsQuery } from "@slices/fetch-all-queries.slice";


const BannerSideSection = () => {
  const { addToCart } = useCourseCart();
  const { id } = useParams();
  const {
    data: singleCourse,
    refetch
  } = useGetCourseByIdQuery(id);

  const { data: AllSubjects } = useGetSubjectsQuery(id);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const totalQuizzes = AllSubjects?.reduce((total, current) => total + current.quiz, 0);
  const totalVideos = AllSubjects?.reduce((total, current) => total + current.video, 0);

  const handleAddToCart = () => {
    addToCart({
      id: id,
      image: singleCourse?.image,
      name: singleCourse?.name,
      price: singleCourse?.price,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <img src="/images/Courses/Group 7679.png" alt="video" />
        <div className="flex items-center justify-between py-1 px-4">
          <span className="text-2xl font-semibold">
            PKR {singleCourse?.price}
          </span>
          <span className="font-normal text-base">PKR 76.00</span>
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
            className="bg-white rounded text-center py-5 px-23 border-btnColor border-2 text-btnColor hover:bg-btnColor hover:text-white"
          >
            Buy Now
          </Link>
          <p className="font-normal text-sm text-center">
            30-Day Money-Back Guarantee
          </p>
        </div>
        <div className="flex flex-col px-5">
          <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor border-b border-b-gray-500 ">
            <div className="flex items-center gap-3">
              <IoMdBook />
              <span className="text-base">Lessons</span>
            </div>
            <span className="text-base">{totalVideos}</span>
          </div>

          <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor border-b border-b-gray-500 ">
            <div className="flex items-center gap-3">
              <LuAlarmClock />
              <span className="text-base">Quizzes</span>
            </div>
            <span className="text-base">{totalQuizzes}</span>
          </div>
          <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor border-b border-b-gray-500 ">
            <div className="flex items-center gap-3">
              <PiClockClockwise />
              <span className="text-base">Duration</span>
            </div>
            <span className="text-base">{singleCourse?.duration}</span>
          </div>
          <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor border-b border-b-gray-500 ">
            <div className="flex items-center gap-3">
              <RiTrophyLine />
              <span className="text-base">Skill level</span>
            </div>
            <span className="text-base">{singleCourse?.skillLevel}</span>
          </div>
          <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor border-b border-b-gray-500 ">
            <div className="flex items-center gap-3">
              <LiaLanguageSolid />
              <span className="text-base">Language</span>
            </div>
            <span className="text-base">English</span>
          </div>
          <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor border-b border-b-gray-500 ">
            <div className="flex items-center gap-3">
              <FaAward />
              <span className="text-base">Certificate</span>
            </div>
            <span className="text-base">Yes</span>
          </div>
          <div className="flex justify-between items-center py-3 font-normal text-xl text-mainParaColor ">
            <div className="flex items-center gap-3">
              <SiCircle />
              <span className="text-base">Full lifetime access</span>
            </div>
            <span className="text-base">{singleCourse?.fullTime ? "Yes" : "No"}</span>
          </div>

          <div className="flex justify-between items-center font-normal text-xl text-mainParaColor mx-auto py-3">
            <div className="flex items-center gap-3 text-center">
              <SlSocialFacebook />
              <CiTwitter />
              <CiLinkedin />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSideSection;
