import Ratings from "@components/Feedback/Ratings";
import React from "react";
const liveLectureData = [
  "Availability of Meeting IDs",
  "Timings of Live Lectures",
  "Availability of Teachers",
  "Audio-Visual Quality",
  "Questions & Answers",
  "Discussion of Questions",
];
const LiveLectures = ({ value, setValue }: any) => {
  return (
    <>
      <div className="bg-white shadow-xl rounded-[10px] mb-8">
        {liveLectureData.map((item, i) => (
          <Ratings
            text={item}
            key={"rating-liveLecture--" + i}
            rating={value[item] ?? 0}
            setValue={(val: any) => setValue({ ...value, ...val })}
          />
        ))}
      </div>
    </>
  );
};

export default LiveLectures;
