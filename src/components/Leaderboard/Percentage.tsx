import React from "react";
import QuizScore from "@components/Quiz/QuizScore";
import ProgressBar from "@components/ProgressBar";
import QuestionMark from "@components/Subject/subjectWeekQuizIcons/QuestionMark";
import Percent from "@components/Subject/subjectWeekQuizIcons/Percent";

interface PercentageProps {
  name: string;
  percentage: string;
  number: string;
  leaderBoardText: string;
  leaderBoardPercentage: string;
}

const Percentage: React.FC<PercentageProps> = ({
  name,
  percentage,
  number,
  leaderBoardText,
  leaderBoardPercentage,
}) => {
  return (
    <div className="flex gap-x-3 md:gap-x-5 mx-1 mt-8">
      <div className="flex gap-x-2 md:gap-x-4 w-full">
        <div className="h-9 min-w-9 md:h-[56px] md:min-w-[56px] rounded-full relative flex items-center justify-center border-2 border-mainColor">
          <img
            className="h-full w-full rounded-full"
            src={"https://picsum.photos/200/200"}
          />
          <div className="rounded-full h-4 w-4 md:h-6 md:w-6 bg-mainColor flex items-center justify-center absolute top-[-8px] left-[-6px] border-2 border-white">
            <p className="font-semibold text-white text-[10px] md:text-[0.8rem]">
              {number}
            </p>
          </div>
        </div>
        <ProgressBar name={name} percentage={percentage} width={"90%"} />
      </div>
      <div className="flex gap-3 md:gap-6">
        <QuizScore
          backgroundColor={"gray-200"}
          text={leaderBoardText}
          icon={() => (
            <QuestionMark className="h-3 w-3" strokeColor="mainColor" />
          )}
        />
        <QuizScore
          backgroundColor={"gray-200"}
          text={leaderBoardPercentage}
          icon={() => <Percent className="h-3 w-3" strokeColor="mainColor" />}
        />
      </div>
    </div>
  );
};

export default Percentage;
