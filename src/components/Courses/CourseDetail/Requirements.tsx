import React, { useEffect, useState } from "react";
import SubHeading from "@components/Common/SubHeading";

const Requirements = (data: any) => {
  const [requirement, setRequirement] = useState<any>([]);

  useEffect(() => {
    setRequirement(data?.data?.requirements);
  });

  return (
    <div className="ml-24">
      <SubHeading heading="Requirements" />
      <ul className="list-disc pl-4">
        {requirement?.map((item: string) => {
          <li className="py-1.5 font-normal text-base text-mainParaColor">
            {item}
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Requirements;
