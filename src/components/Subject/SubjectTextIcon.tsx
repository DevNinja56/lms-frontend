import React from "react";

const SubjectTextIcon = ({ text, numberText, icon: IconComponent }: any) => {
  return (
    <div
      className={`flex gap-x-3 items-center mb-3 rounded-[5px] bg-[#eceff8] p-2`}
    >
      <div className="h-[32px] w-[32px] min-w-[32px] rounded-full bg-mainColor flex items-center justify-center">
        <IconComponent className="text-lg font-bold text-white" />
      </div>
      <h1
        className={`text-sm flex flex-col justify-center font-bold text-lightBlackColor truncate`}
      >
        {numberText}
        <span className="font-normal text-xs xl:text-sm text-mainParaColor">
          {text}
        </span>
      </h1>
    </div>
  );
};

export default SubjectTextIcon;
