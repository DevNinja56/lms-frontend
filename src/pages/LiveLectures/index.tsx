import Classes from "@components/LiveLectures/Classes";
import Doubts from "@components/LiveLectures/Doubts";
import Lectures from "@components/LiveLectures/Lectures";
import React, { useState } from "react";

const data = ["My Classes", "Live Lectures", "Live Doubts"];

const LiveLectures = () => {
  const [selected, setSelected] = useState<string>("My Classes");

  const selectedBoxes = {
    [data[0]]: <Classes />,
    [data[1]]: <Lectures />,
    [data[2]]: <Doubts />,
  };

  return (
    <div className="px-5 pt-10 md:p-5 w-full mx-auto">
      <div className="bg-white w-full md:px-6 xl:w-11/12 flex gap-2 md:gap-10 shadow-sm shadow-gray-200 px-0 rounded-[5px] mx-auto">
        {data.map((item, i) => (
          <button
            key={"selected-button--" + i}
            onClick={() => setSelected(item)}
            className={`py-4 px-2 text-xs md:text-base border-b-2 ${
              item === selected
                ? "border-b-mainColor text-mainColor font-medium"
                : "border-b-white text-gray-700"
            } `}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="w-full my-5 xl:w-11/12 mx-auto">
        {selectedBoxes[selected]}
      </div>
    </div>
  );
};

export default LiveLectures;
