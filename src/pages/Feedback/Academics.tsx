import React, { useState } from "react";
import Ratings from "@components/Feedback/Ratings";
import Button from "@components/button";
import { useCourse } from "@hooks/course";
import { useGetSubjectsQuery } from "@slices/fetch-all-queries.slice";
import ScreenLoader from "@components/ScreenLoader";

const allTabsDataList = {
  video_lectures: ["Quality", "Quantity", "Speed", "Usefullness"],
  readings: ["Usefullness", "Quality", "Quantity"],
  tests: ["Quality of Questions", "Answers", "Explanations"],
  discussion_lectures: [
    "Comprehensive Discussion",
    "Pointing Out Common Mistakes",
  ],
  teacher_support: [
    "Availability",
    "Response Time",
    "Quality of Answers",
    "Satisfaction",
  ],
};

const Academics = ({ value, setValue }: any) => {
  const { course } = useCourse();
  const { data, isLoading: subjectLoader } = useGetSubjectsQuery(
    course.id
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      {subjectLoader && !data ? (
        <ScreenLoader />
      ) : (
        <div className="pt-6 mb-6">
          <div className="flex flex-col gap-y-5 mb-7">
            <h1 className="font-semibold text-xl">
              Subject Wise Assessment
            </h1>
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
                  color={`${
                    activeIndex === i ? "text-white" : "text-black"
                  }`}
                  text={sub.name}
                />
              ))}
            </div>
          </div>

          {Object.entries(allTabsDataList).map(
            ([key, arrayVal], i) => (
              <div
                className="flex flex-col gap-y-4 mb-6"
                key={"feedback-academic--" + i}>
                <h1 className="font-semibold text-xl capitalize">
                  {key.replace("_", " ")}
                </h1>
                <div className="bg-white shadow-xl rounded-[10px] mb-8">
                  {arrayVal.map((item, k) => {
                    return (
                      <Ratings
                        text={item}
                        objectKey={`${
                          data?.[activeIndex].name
                        }_${key}_${item.replace(" ", "-")}`}
                        key={"ratting-Video Lectures--" + key + k}
                        ratting={
                          value[
                            `${
                              data?.[activeIndex].name
                            }_${key}_${item.replace(" ", "-")}`
                          ] ?? 0
                        }
                        setValue={(val: any) =>
                          setValue({ ...value, ...val })
                        }
                      />
                    );
                  })}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};

export default Academics;
