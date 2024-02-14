import React from "react";

const readingBox = ({ data }: any) => {
  return (
    <div className="bg-mainBackgroundColor p-6 rounded-[5px] ">
      <p className="text-[13px] text-mainParaColor max-w-[50vw]">
        {data.description}
      </p>
    </div>
  );
};

export default readingBox;
