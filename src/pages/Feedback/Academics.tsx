import React, { useState } from "react";
import Ratings from "@components/Feedback/Ratings";
import Button from "@components/button";
import { useCourse } from "@hooks/course";
import { useGetSubjectsQuery } from "@slices/fetch-all-queries.slice";

const Academics = () => {
  const { course } = useCourse();
  const { data } = useGetSubjectsQuery(course.id);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="pt-6 mb-6">
      <div className="flex flex-col gap-y-5 mb-7">
        <h1 className="font-semibold text-xl">Subject Wise Assessment</h1>
        <div className="flex gap-5 mb-7">
          {data?.map((sub, i) => (
            <Button
              key={i}
              padding="py-[13px] px-[36px]"
              onClick={() => handleButtonClick(i)}
              className={`ml-0 mr-0 transition-all duration-150 capitalize text-lg rounded-[5px]`}
              background={
                activeIndex === i
                  ? "bg-mainColor border-2 border-mainColor "
              : "bg-gray-50 border text-mainColor border-mainColor"
              }
              color={`${activeIndex === i ? "text-white" : "text-black"}`}
              text={sub.name}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mb-6">
        <h1 className="font-semibold text-xl">Video Lectures</h1>
        <div className="bg-white shadow-xl rounded-[10px] mb-8">
          <Ratings text={"Quality"} />
          <Ratings text={"Quantity"} />
          <Ratings text={"Speed"} />
          <Ratings text={"Usefullness"} />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mb-6">
        <h1 className="font-semibold text-xl">Readings</h1>
        <div className="bg-white shadow-xl rounded-[10px] mb-8">
          <Ratings text={"Usefullness"} />
          <Ratings text={"Quality"} />
          <Ratings text={"Quantity"} />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mb-6">
        <h1 className="font-semibold text-xl">Tests</h1>
        <div className="bg-white shadow-xl rounded-[10px] mb-8">
          <Ratings text={"Quality of Questions"} />
          <Ratings text={"Answers"} />
          <Ratings text={"Explanations"} />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mb-6">
        <h1 className="font-semibold text-xl">Discussion Lectures</h1>
        <div className="bg-white shadow-xl rounded-[10px] mb-8">
          <Ratings text={"Comprehensive Discussion"} />
          <Ratings text={"Pointing Out Common Mistakes"} />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mb-6">
        <h1 className="font-semibold text-xl">Teacher Support</h1>
        <div className="bg-white shadow-xl rounded-[10px] mb-8">
          <Ratings text={"Availability"} />
          <Ratings text={"Response Time"} />
          <Ratings text={"Quality of Answers"} />
          <Ratings text={"Satisfaction"} />
        </div>
      </div>
    </div>
  );
};

export default Academics;
