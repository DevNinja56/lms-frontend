import Button from "@components/button";
import { useQuize } from "@hooks/quize-hook";
import { useSubjectNavigation } from "@hooks/subject-nav";
import { quiZeQuestionType } from "@utils/Types";
import React from "react";

const QuizzeNav = () => {
  const { quizIndex, setQuizIndex } = useSubjectNavigation();
  const { data: state } = useQuize();

  return (
    <div className="p-5">
      <div className="flex flex-col flex-wrap justify-around gap-5">
        {Array.isArray(state) &&
          state?.map((item: quiZeQuestionType, i: number) => (
            <Button
              className="rounded-full h-10 w-10 pl-0 pr-0 ml-0 flex items-center justify-center mr-0"
              key={"nav-question-selected---" + i}
              background={
                quizIndex === i
                  ? "bg-mainColor"
                  : typeof item?.answer === "number"
                  ? "bg-mainTextColor text-white"
                  : "border-mainColor border-2"
              }
              color={quizIndex === i ? "text-white" : " text-mainColor "}
              onClick={() => {
                setQuizIndex(i);
              }}
              text={i + 1 + ""}
            />
          ))}
      </div>
    </div>
  );
};

export default QuizzeNav;
