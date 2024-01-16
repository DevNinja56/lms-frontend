import Button from "@components/button";
import React, { useState } from "react";
import General from "./General";
import Academics from "./Academics";
import LiveLectures from "./LiveLectures";
import OverallRating from "./OverallRating";

const Feedback = () => {
  const [selectedFilter, setSelectedFilter] = useState("General");

  const renderSelectedComponent = () => {
    if (selectedFilter === "General") {
      return <General />;
    } else if (selectedFilter === "Academics") {
      return <Academics />;
    } else if (selectedFilter === "LiveLectures") {
      return <LiveLectures />;
    } else {
      return <OverallRating />;
    }
  };

  return (
    <div className="p-10 pr-0 w-[95%]">
      <div className="flex gap-5 mb-7">
        <Button
        padding={"py-[13px] px-9"}
          onClick={() => setSelectedFilter("General")}
          className={`ml-0 mr-0 transition-all duration-150 text-lg rounded-[5px]`}
          text={"General"}
          background={selectedFilter === "General"
          ? " bg-mainColor border-2 border-mainColor"
          : "bg-mainBackgroundColor border text-mainColor border-mainColor"}
          color={`${
            selectedFilter === "General" ? "text-white" : "text-black"
          }`}
        />
        <Button
          onClick={() => setSelectedFilter("Academics")}
        padding={"py-[13px] px-9"}
          className={`ml-0 mr-0 transition-all duration-150 text-lg rounded-[5px]`}
          background={selectedFilter === "Academics"
          ? " bg-mainColor border-2 border-mainColor"
          : "bg-mainBackgroundColor border text-mainColor border-mainColor"}
          color={`${
            selectedFilter === "Academics" ? "text-white" : "text-mainColor"
          }`}
          text={"Academics"}
        />
        <Button
          onClick={() => setSelectedFilter("LiveLectures")}
        padding={"py-[13px] px-9"}
          className={`ml-0 mr-0 transition-all duration-150 text-lg rounded-[5px]`}
          background={selectedFilter === "LiveLectures"
          ? " bg-mainColor border-2 border-mainColor"
          : "bg-mainBackgroundColor border text-mainColor border-mainColor"}
          color={`${
            selectedFilter === "LiveLectures" ? "text-white" : "text-black"
          }`}
          text={"Live Lectures/QA Formums"}
        />
        <Button
          onClick={() => setSelectedFilter("OverallRating")}
        padding={"py-[13px] px-9"}
          className={`ml-0 mr-0 transition-all duration-150 text-lg rounded-[5px]`}
          background={selectedFilter === "OverallRating"
          ? " bg-mainColor border-2 border-mainColor"
          : "bg-mainBackgroundColor border text-mainColor border-mainColor"}
          color={`${
            selectedFilter === "OverallRating" ? "text-white" : "text-black"
          }`}
          text={"Overall Rating"}
        />
      </div>
      {renderSelectedComponent()}
      <Button text={"Save"} className={"ml-0 text-lg font-medium"} padding="py-[13px] px-[50px]"/>
    </div>
  );
};

export default Feedback;
