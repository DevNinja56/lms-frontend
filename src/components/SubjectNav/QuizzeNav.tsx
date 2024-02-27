import Button from "@components/button";
import { useQuize } from "@hooks/quize-hook";
import { useSubjectNavigation } from "@hooks/subject-nav";
import { quiZeQuestionType } from "@utils/Types";
import React from "react";

const QuizzeNav = () => {
  const { quizIndex, setQuizIndex } = useSubjectNavigation();
  const { data: state } = useQuize();

  return (
    <div className="w-11/12 mx-auto md:mx-0 md:w-auto">
      <div className="py-2 px-5 md:p-5 w-full md:w-auto mt-10 md:mt-0 bg-white md:bg-none rounded-md md:rounded-none">
        <div className="flex flex-row md:flex-col flex-wrap justify-start gap-3 md:justify-around md:gap-5 w-full">
          {Array.isArray(state) &&
            state?.map((item: quiZeQuestionType, i: number) => (
              <Button
                className="rounded-full h-9 w-9 md:h-10 md:w-10 pl-0 pr-0 ml-0 flex items-center justify-center mr-0"
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
    </div>
  );
};

export default QuizzeNav;
