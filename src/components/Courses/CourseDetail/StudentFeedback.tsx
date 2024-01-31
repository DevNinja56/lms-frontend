import React from "react";
import SubHeading from "@components/Common/SubHeading";
import {FaStar} from "react-icons/fa";
import Paragraph from "@components/Common/Paragraph";

const StudentFeedback = () => {
  return (
    <div className="mt-4 mb-12 ml-14">
      <SubHeading heading="Student feedback" className="font-medium" />
      <div className="flex gap-6">
        <div className="bg-gray-100 w-1/3 rounded text-center py-8">
          <span className="font-medium text-6xl">
            4.8
          </span>
          <div className="text-xl text-yellow-500 flex gap-1 items-center pt-3 px-14">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <Paragraph paragraph="Course Rating" />
        </div>

        <div className="bg-gray-100 w-3/4 rounded px-4 py-8 flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <div className="w-5/6 bg-gray-200 h-1 relative rounded">
              <div className="w-full bg-mainColor absolute h-full rounded"></div>
            </div>
            <div>
              <div className="text-base text-yellow-500 flex gap-1 items-center ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div>
              <span className="font-normal text-base text-mainParaColor">
                70%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-5/6 bg-gray-200 relative h-1 rounded">
              <div className="w-10/12 bg-mainColor absolute rounded h-full"></div>
            </div>
            <div>
              <div className="text-base text-yellow-500 flex gap-1 items-center ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div>
              <span className="font-normal text-base text-mainParaColor">
                50%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-5/6 bg-gray-200 relative h-1 rounded">
              <div className="w-8/12 bg-mainColor absolute rounded h-full"></div>
            </div>
            <div>
              <div className="text-base text-yellow-500 flex gap-1 items-center ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div>
              <span className="font-normal text-base text-mainParaColor">
                30%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-5/6 bg-gray-200 relative h-1 rounded">
              <div className="w-6/12 bg-mainColor absolute rounded h-full"></div>
            </div>
            <div>
              <div className="text-base text-yellow-500 flex gap-1 items-center ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div>
              <span className="font-normal text-base text-mainParaColor">
                20%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-5/6 bg-gray-200 relative h-1 rounded">
              <div className="w-4/12 bg-mainColor absolute rounded h-full"></div>
            </div>
            <div>
              <div className="text-base text-yellow-500 flex gap-1 items-center ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div>
              <span className="font-normal text-base text-mainParaColor">
                10%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;
