import React, { useEffect, useState } from "react";
import SubHeading from "@components/Common/SubHeading";
import { CiCircleCheck } from "react-icons/ci";

const WhatLearn = (data: any) => {

  const [whatLearn, setWhatLearn] = useState<any>([]);
  useEffect(() => {
    setWhatLearn(data?.data?.whatYouLearn);
  });

  return (
    <div className="pb-6 ml-24">
      <SubHeading heading="What you 'll learn" />
      <div className="flex flex-wrap gap-7 text-mainParaColor">
        {whatLearn?.map((item: any) => {
          <div className="flex gap-4 items-center w-[48%]">
            <div className="text-3xl">
              <CiCircleCheck />
            </div>
            <span className="text-sm font-normal">{item}</span>
          </div>;
        })}
      </div>
    </div>
  );
};

export default WhatLearn;
