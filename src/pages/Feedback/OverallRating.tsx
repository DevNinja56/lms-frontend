import Ratings from "@components/Feedback/Ratings";
import React from "react";

const OverallRating = () => {
  return (
    <>
      <div className="bg-white shadow-xl rounded-[10px] mb-8">
        <Ratings text={"LMS"} />
        <Ratings text={"Live Lectures"} />
        <Ratings text={"Counselling"} />
        <Ratings text={"Academics"} />
      </div>
    </>
  );
};

export default OverallRating;
