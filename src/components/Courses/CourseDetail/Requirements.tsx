import React from "react";
import SubHeading from "@components/Common/SubHeading";

const Requirements = () => {
  return (
    <div className="ml-14">
      <SubHeading heading="Requirements" />
      <ul className="list-disc pl-4">
        <li className="py-1.5 font-normal text-base text-mainParaColor">
          You will need a copy of Adobe XD 2019 or
          above. A free trial can be downloaded
          from Adobe.
        </li>
        <li className="py-1.5 font-normal text-base text-mainParaColor">
          {" "}
          No previous design experience is needed.
        </li>
        <li className="py-1.5 font-normal text-base text-mainParaColor">
          {" "}
          No previous Adobe XD skills are needed.
        </li>
      </ul>
    </div>
  );
};

export default Requirements;
