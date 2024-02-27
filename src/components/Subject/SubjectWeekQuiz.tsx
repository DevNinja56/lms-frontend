import React from "react";

interface propsType {
  text: string;
  icon?: any;
  number: number | string;
  className?: string;
}

const SubjectWeekQuiz = ({
  text,
  icon: IconComp,
  number,
  className,
}: propsType) => {
  return (
    <div className="flex gap-x-2 items-center">
      <div className="h-8 w-8 lg:h-7 lg:w-7 xl:h-8 xl:w-8 bg-mainColor rounded-full flex items-center justify-center text-white">
        <IconComp className={`${className}`} />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lightBlackColor font-bold text-xs xl:text-[13px]">
          {number}
        </p>
        <p className="font-medium text-xs xl:text-[13px] text-mainParaColor">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SubjectWeekQuiz;
