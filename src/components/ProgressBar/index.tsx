import React from "react";

type percentage = {
  name: string;
  percentage: string;
  width: string;
};
const ProgressBar: React.FC<percentage> = ({ name, percentage, width }) => {
  return (
    <div className={`w-[${width}]`}>
      <div className="flex justify-between mb-2 text-mainParaColor text-sm font-semibold">
        <h1>{name}</h1>
        <p>{percentage}</p>
      </div>
      <div className="bg-grayBg h-3 rounded-[8px]">
        <div
          style={{ width: percentage }}
          className={`bg-mainColor h-full rounded-[8px]`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
