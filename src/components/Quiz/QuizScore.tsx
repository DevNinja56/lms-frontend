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
        className={`h-8 w-8 rounded-full bg-${backgroundColor} flex items-center justify-center`}>
        <IconComponent className="text-blue-600" />
      </div>
      <h1 className="text-base font-medium">
        {text}
      </h1>
    </div>
  );
};

export default QuizScore;
