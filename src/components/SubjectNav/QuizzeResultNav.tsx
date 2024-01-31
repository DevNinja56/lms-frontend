import Button from "@components/button";
import {API_ENDPOINTS} from "@constant/api-endpoints";
import {useSubjectNavigation} from "@hooks/subject-nav";
import {useGetQuizeResultQuery} from "@slices/fetch-all-queries.slice";
import React from "react";
import {useParams} from "react-router-dom";

const QuizzeResultNav = () => {
  const {id} = useParams();
  const {quizIndex, setQuizIndex} =
    useSubjectNavigation();
  const {data: quizData} = useGetQuizeResultQuery(
    API_ENDPOINTS.QUIZE.RESULT.replace(
      ":id",
      id ?? ""
    )
  );
  const currentIndex =
    quizData?.result?.[quizIndex].questionId;

  console.log(currentIndex);
  console.log(
    quizData?.result?.[quizIndex].userAnswer
  );

  return (
    <div className="p-5">
      {currentIndex && (
        <div className="flex flex-col flex-wrap justify-around gap-5">
          {Array.isArray(quizData.result) &&
            quizData?.result?.map(
              (item, i: number) => (
                <Button
                  className="rounded-full h-10 w-10 pl-0 pr-0 ml-0 flex items-center justify-center mr-0"
                  key={
                    "nav-question-selected---" + i
                  }
                  background={
                    quizIndex === i
                      ? "bg-mainColor"
                      : item?.userAnswer
                      ? item?.questionId
                          ?.correctAnswer ===
                        item?.userAnswer
                        ? "bg-green-400 text-white"
                        : "bg-red-400 text-white"
                      : "border-mainColor border-2"
                  }
                  color={
                    quizIndex === i
                      ? "text-white"
                      : " text-mainColor "
                  }
                  onClick={() => {
                    setQuizIndex(i);
                  }}
                  text={i + 1 + ""}
                />
              )
            )}
        </div>
      )}
    </div>
  );
};

export default QuizzeResultNav;
