import React from "react";
import SubjectWeekQuiz from "./SubjectWeekQuiz";
import { daysContent } from "@utils/Types";
import QuestionMark from "./subjectWeekQuizIcons/QuestionMark";
import Star from "./subjectWeekQuizIcons/Star";
import Time from "./subjectWeekQuizIcons/Time";

const QuizzesBox: React.FC<{ data: daysContent }> = ({ data }) => {
  return (
    <div className="py-5 w-auto flex flex-wrap lg:flex-nowrap gap-6 mb-1 bg-mainBackgroundColor border-2 border-[#435FB54D] rounded-[5px] justify-between lg:justify-start gap-x-8 lg:gap-x-14 xl:gap-x-16 px-3 md:px-6 xl:px-8">
      <SubjectWeekQuiz
        text={"Questions"}
        icon={() => <QuestionMark strokeColor="white" />}
        number={data.totalQuestions}
      />
      <SubjectWeekQuiz
        text={"Minutes"}
        icon={() => <Time />}
        number={data?.time ?? data?.totalQuestions ?? 0}
      />
      <SubjectWeekQuiz
        text={"Score"}
        icon={() => <Star className="h-5 w-5" />}
        number={data.totalQuestions}
      />
    </div>
  );
};

export default QuizzesBox;
