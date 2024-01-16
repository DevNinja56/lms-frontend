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
    <div className="flex gap-x-12 items-center">
      <div className="flex items-center gap-x-2">
        <div className="h-8 w-8 bg-mainColor opacity-[0.8] rounded-full flex items-center justify-center text-white">
          <IconComp className={`${className}`} />
        </div>
        <p className="font-medium text-lg text-mainParaColor">{text}</p>
      </div>
      <p className="text-lightBlackColor font-bold text-sm">{number}</p>
    </div>
  );
};

export default SubjectWeekQuiz;
