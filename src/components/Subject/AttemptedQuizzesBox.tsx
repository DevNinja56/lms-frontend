import React from "react";
import { daysContent } from "@utils/Types";
import QuestionMark from "./subjectWeekQuizIcons/QuestionMark";
import Star from "./subjectWeekQuizIcons/Star";
import Time from "./subjectWeekQuizIcons/Time";
import AttemptedSubjectWeekQuiz from "./AttemptedSubjectWeekQuiz";
import Percent from "./subjectWeekQuizIcons/Percent";
import HourGlass from "./subjectWeekQuizIcons/HourGlass";

const AttemptedQuizzesBox: React.FC<{ data: daysContent }> = ({ data }) => {
  return (
    <div className="py-5 w-auto flex flex-wrap lg:flex-nowrap gap-6 mb-1 bg-mainBackgroundColor border-2 border-[#435FB54D] rounded-[5px] justify-between lg:justify-start gap-x-8 lg:gap-x-14 xl:gap-x-16 px-3 md:px-6 xl:px-8">
      <AttemptedSubjectWeekQuiz
        text={"Questions"}
        icon={() => <QuestionMark strokeColor="white" />}
        number={data.questions.length}
      />
      <AttemptedSubjectWeekQuiz
        text={"Minutes"}
        icon={() => <Time />}
        number={data?.time ?? data?.questions?.length ?? 0}
      />
      <AttemptedSubjectWeekQuiz
        text={"Score"}
        icon={() => <Star className="h-5 w-5" />}
        number={data.questions.length}
      />
      <AttemptedSubjectWeekQuiz
        text={"Percent"}
        icon={() => (
          <Percent className="h-5 w-5" strokeColor={"white"} />
        )}
        number={data.questions.length}
      />
      <AttemptedSubjectWeekQuiz
        text={"Avg. Attempt Time"}
        icon={() => <HourGlass />}
        number={data.questions.length}
      />
    </div>
  );
};

export default AttemptedQuizzesBox;
