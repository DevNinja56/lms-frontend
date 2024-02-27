import React from "react";

type QuizScoreProps = {
  text: string;
  icon?: any;
  backgroundColor: string;
};

const QuizScore: React.FC<QuizScoreProps> = ({
  text,
  icon: IconComponent,
  backgroundColor,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className={`h-5 w-5 md:h-8 md:w-8 rounded-full bg-${backgroundColor} flex items-center justify-center`}
      >
        <IconComponent className="text-mainColor" />
      </div>
      <h1 className="text-[10px] md:text-base font-medium">{text}</h1>
    </div>
  );
};

export default QuizScore;
