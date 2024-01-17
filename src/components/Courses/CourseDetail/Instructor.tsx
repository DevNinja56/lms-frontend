import React from "react";
import { FaStar } from "react-icons/fa";
import { TbMessageDots } from "react-icons/tb";
import { HiOutlineUser } from "react-icons/hi";
import { PiClockClockwiseFill } from "react-icons/pi";
import Paragraph from "@components/Common/Paragraph";

const Instructor = () => {
  return (
    <>
      <div className="py-6">
        <div>
          <p className="font-medium text-xl">Instructor</p>
        </div>
        <div className="flex pt-6 gap-6 items-center">
          <div>
            <img src="/images/Courses/Ellipse 417.png" alt="Instructor_image" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-normal text-lg text-mainParaColor">
              Daniyal Samim
            </span>
            <span className="text-sm font-normal text-mainParaColor">
              President of Sales
            </span>
            <div className="flex gap-6">
              <div className=" flex items-center gap-3">
                <div className="text-xl text-yellow-500">
                  <FaStar />
                </div>
                <span className="font-normal text-sm text-yellow-500">4.5</span>
                <span className="font-normal text-sm text-mainParaColor">
                  Instructor Rating
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xl text-mainParaColor">
                  <TbMessageDots />
                </div>
                <span className="font-normal text-sm text-mainParaColor">
                  23,987 Reviews
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xl text-mainParaColor">
                  <HiOutlineUser />
                </div>
                <span className="font-normal text-sm text-mainParaColor">
                  692 Students
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xl text-mainParaColor">
                  <PiClockClockwiseFill />
                </div>
                <span className="font-normal text-sm text-mainParaColor">
                  15 Course
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Paragraph
            paragraph="Back in 2010, I started brainspin with a desire to design compelling and engaging apps. For 
            over 7 years, I have designed many high profile web and iPhone applications. The applications range 
            from 3D medical aided web applications to project management applications for niche industries."
          />
          <Paragraph paragraph="I am also the founder of a large local design organization, Salt Lake Designers,
           where I and other local influencers help cultivate the talents of up and coming UX designers through 
           workshops and panel discussions." />
        </div>
      </div>
    </>
  );
};

export default Instructor;
