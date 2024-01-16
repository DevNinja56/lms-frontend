import Ratings from "@components/Feedback/Ratings";
import React from "react";

const LiveLectures = () => {
  return (
    <>
      <div className="bg-white shadow-xl rounded-[10px] mb-8">
        <Ratings text={"Availability of Meeting IDs"} />
        <Ratings text={"Timings of Live Lectures"} />
        <Ratings text={"Availability of Teachers"} />
        <Ratings text={"Audio-Visual Quality"} />
        <Ratings text={"Questions & Answers"} />
        <Ratings text={"Discussion of Questions"} />
      </div>
    </>
  );
};

export default LiveLectures;
