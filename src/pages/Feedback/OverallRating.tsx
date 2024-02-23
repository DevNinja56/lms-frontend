import Ratings from "@components/Feedback/Ratings";
import React from "react";
const overAllRatingData = [
  "LMS",
  "Live Lectures",
  "Counselling",
  "Academics",
];
const OverallRating = ({ value, setValue }: any) => {
  return (
    <>
      <div className="bg-white shadow-xl rounded-[10px] mb-8">
        {overAllRatingData.map((item, i) => (
          <Ratings
            text={item}
            key={"ratting-over-All-Rating--" + i}
            ratting={value[item] ?? 0}
            setValue={(val: any) => setValue({ ...value, ...val })}
          />
        ))}
      </div>
    </>
  );
};

export default OverallRating;
