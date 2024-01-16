import Ratings from "@components/Feedback/Ratings";
import React from "react";

const General = () => {
  return (
    <>
      <div className="bg-white shadow-xl rounded-[10px] mb-8 pt-2">
        <Ratings text={"Availability of Username & Password"} />
        <Ratings text={"Technical Support"} />
        <Ratings text={"Availability of Content"} />
        <Ratings text={"Stats"} />
        <Ratings text={"Leaderboard"} />
        <Ratings text={"Notifications"} />
        <Ratings text={"Search"} />
        <Ratings text={"Overall Level of Satisfaction"} />
      </div>
    </>
  );
};

export default General;
