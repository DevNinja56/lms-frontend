import Button from "@components/button";
import { useCourse } from "@hooks/course";
import { useGetSubjectsQuery } from "@slices/fetch-all-queries.slice";
import { motion } from "framer-motion";
import React, { useState } from "react";
import I from "./LecturesIcon/I";

const Lectures = () => {
  const { course } = useCourse();
  const { data } = useGetSubjectsQuery(course.id);
  const [selected, setSelected] = useState(data?.[0]?.name ?? "");
  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      exit={{ y: 50 }}
      className=" "
    >
      <div className="flex gap-2 my-5">
        {data?.map((sub, i) => (
          <button
            key={"subject-list--" + i}
            onClick={() => setSelected(sub.name)}
            className={`capitalize py-1.5 px-4 text-xs md:text-[13px] lg:text-xs xl:text-[13px] rounded-md border-2 hover:bg-mainColor hover:border-mainColor hover:text-white transition-all duration-300 ${
              sub.name === selected
                ? "bg-mainColor text-white border-mainColor"
                : "bg-white text-gray-600"
            } `}
          >
            {sub.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-8 md:gap-4 xl:gap-5">
        <div className="side bg-white w-full lg:w-1/2 rounded-md shadow-md shadow-gray-300">
          <div className="text-mainColor text-xs pl-5 pr-1 mt-6 mb-3 font-semibold flex gap-2 items-center">
            <div className="h-4 min-w-4 md:h-6 md:min-w-6 bg-mainColor rounded-full flex items-center justify-center">
              <I />
            </div>
            <span className="text-xs text-lightBlackColor font-medium">
              Select a topic from the list below to see the available time
              slots.
            </span>
          </div>
          <div className="py-5 px-3 flex flex-col gap-y-3">
            <button className="border border-[#435FB540] w-full px-5 py-3 text-xs md:text-[13px] lg:text-xs xl:text-[13px] capitalize text-left rounded-[5px] transition-all duration-300 hover:border-mainColor hover:text-mainColor">
              Chemistry Live Doubts 15/8
            </button>
            <button className="border border-[#435FB540] w-full px-5 py-3 text-xs md:text-[13px] lg:text-xs xl:text-[13px] capitalize text-left rounded-[5px] transition-all duration-300 hover:border-mainColor hover:text-mainColor">
              Physics Live Doubts 15/8
            </button>
            <button className="border border-[#435FB540] w-full px-5 py-3 text-xs md:text-[13px] lg:text-xs xl:text-[13px] capitalize text-left rounded-[5px] transition-all duration-300 hover:border-mainColor hover:text-mainColor">
              English Live Doubts 15/8
            </button>
            <button className="border border-[#435FB540] w-full px-5 py-3 text-xs md:text-[13px] lg:text-xs xl:text-[13px] capitalize text-left rounded-[5px] transition-all duration-300 hover:border-mainColor hover:text-mainColor">
              Biology Live Doubts 15/8
            </button>
          </div>
        </div>
        <div className="lecture-list min-w-[65%] flex flex-col gap-y-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={"lecture-list-subscriber--" + i}
              className="bg-white px-3 xl:px-5 py-7 rounded-md shadow-md shadow-gray-300 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-5 md:gap-0"
            >
              <div className="flex items-center">
                <div className="flex flex-col text-xs md:text-[13px] lg:text-xs xl:text-[13px]">
                  <div className="font-bold text-mainColor md:text-lightBlackColor flex flex-row md:flex-col">
                    Tue, 15 August 2023 - 3:00 PM{" "}
                    <span className="font-medium text-mainColor">(55 min)</span>
                  </div>
                </div>
              </div>
              <hr className="w-[30px] xl:w-[50px] border border-[#D9D9D9] rotate-[-90deg] hidden md:block" />
              <div className="flex flex-col text-xs md:text-[13px] lg:text-xs xl:text-[13px] text-mainParaColor">
                <div>Pakistan Time Standard</div>
                <div>LMS 5 - From Live College</div>
              </div>
              <hr className="w-[30px] xl:w-[50px] border border-[#D9D9D9] rotate-[-90deg] hidden md:block" />
              <div className="font-semibold text-xs md:text-[13px] lg:text-xs xl:text-[13px] capitalize flex flex-col text-lightBlackColor">
                37/300{" "}
                <span className="font-normal text-xs md:text-[13px] lg:text-xs xl:text-[13px] text-mainParaColor">
                  subscribers
                </span>
              </div>
              <hr className="w-[30px] xl:w-[50px] border border-[#D9D9D9] rotate-[-90deg] hidden md:block" />
              <div className="btn">
                <Button
                  text="Subscribe"
                  padding="py-[9px] px-[18px]"
                  className="text-xs md:text-[13px] lg:text-xs xl:text-[13px] font-normal"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Lectures;
