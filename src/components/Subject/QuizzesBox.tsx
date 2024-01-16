import React from "react";
import SubjectWeekQuiz from "./SubjectWeekQuiz";
import { daysContent } from "@utils/Types";
import QuestionMark from "./subjectWeekQuizIcons/QuestionMark";
import Star from "./subjectWeekQuizIcons/Star";
import Time from "./subjectWeekQuizIcons/Time";

const QuizzesBox: React.FC<{ data: daysContent }> = ({ data }) => {
  return (
    <div className="py-5 w-auto flex gap-6 mb-1 bg-mainBackgroundColor justify-around border-2 border-[#435FB54D] rounded-[5px]">
      <SubjectWeekQuiz
        text={"Questions"}
        icon={() => <QuestionMark strokeColor="white"/>}
        number={data.totalQuestions}
      />
      <SubjectWeekQuiz
        text={"Minutes"}
        icon={() => <Time />}
        number={data?.time ?? data?.totalQuestions ?? 0}
      />
      <SubjectWeekQuiz
        text={"Score"}
        icon={() => <Star height={"22"} width={"22"} />}
        number={data.totalQuestions}
      />
    </div>
  );
};

export default QuizzesBox;
