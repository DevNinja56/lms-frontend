import Ratings from "@components/Feedback/Ratings";
import React from "react";

const dataList = [
  "Availability of Username & Password",
  "Technical Support",
  "Availability of Content",
  "Stats",
  "Leaderboard",
  "Notifications",
  "Search",
  "Overall Level of Satisfaction",
];

const General = ({ value, setValue }: any) => {
  return (
    <>
      <div className="bg-white shadow-xl rounded-[10px] mb-8 pt-2">
        {dataList.map((item, i) => {
          return (
            <Ratings
              key={"ratting-general--" + i}
              rating={value[item] ?? 0}
              text={item}
              setValue={(val: any) => setValue({ ...value, ...val })}
            />
          );
        })}
      </div>
    </>
  );
};

export default General;
