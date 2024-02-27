import Button from "@components/button";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useSubjectNavigation } from "@hooks/subject-nav";
import { useGetQuizeResultQuery } from "@slices/fetch-all-queries.slice";
import React from "react";
import { useParams } from "react-router-dom";

const QuizzeResultNav = () => {
  const { id } = useParams();
  const { quizIndex, setQuizIndex } = useSubjectNavigation();
  const { data: quizData } = useGetQuizeResultQuery(
    API_ENDPOINTS.QUIZE.RESULT.replace(":id", id ?? "")
  );
  const currentIndex = quizData?.result?.[quizIndex]?.questionId;

  console.log(quizData?.result?.[quizIndex]?.userAnswer);

  return (
    <div className="w-11/12 mx-auto md:mx-0 md:w-auto">
      <div className="py-2 px-7 md:p-5 w-full md:w-auto mt-10 md:mt-0 bg-white md:bg-none rounded-md md:rounded-none">
        {currentIndex && (
          <div className="flex flex-row md:flex-col flex-wrap justify-start gap-3 md:justify-around md:gap-5 w-full">
            {Array.isArray(quizData.result) &&
              quizData?.result?.map((item, i: number) => (
                <>
                  <Button
                    className="rounded-full h-9 w-9 md:h-10 md:w-10 pl-0 pr-0 ml-0 flex items-center justify-center mr-0"
                    key={"nav-question-selected---" + i}
                    background={
                      quizIndex === i
                        ? "bg-mainColor"
                        : item?.userAnswer
                        ? item?.questionId?.correctAnswer === item?.userAnswer
                          ? "bg-green-400 text-white"
                          : "bg-red-400 text-white"
                        : "border-mainColor border-2"
                    }
                    color={quizIndex === i ? "text-white" : " text-mainColor "}
                    onClick={() => {
                      setQuizIndex(i);
                    }}
                    text={i + 1 + ""}
                  />
                </>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizzeResultNav;
