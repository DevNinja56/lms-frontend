import { useUi } from "@hooks/user-interface";
import React, { useEffect } from "react";
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import QuizRadioButton from "@components/Quiz/QuizRadioButton";
import { useSubjectNavigation } from "@hooks/subject-nav";
import { subjectNavTypes } from "@utils/Types";
import Button from "@components/button";
import ScreenLoader from "@components/ScreenLoader";
import { useGetQuizeResultQuery } from "@slices/fetch-all-queries.slice";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useParams } from "react-router-dom";

const QuizzesDetails = () => {
  const { id } = useParams();
  const { data: quizData, isLoading } = useGetQuizeResultQuery(
    API_ENDPOINTS.QUIZE.RESULT.replace(":id", id ?? "")
  );

  const { setNav } = useUi();
  const { setNavInner, quizIndex, setQuizIndex } = useSubjectNavigation();
  const currentIndex = quizData?.result?.[quizIndex]?.questionId;

  useEffect(() => {
    setNav(true);
    setNavInner({
      type: subjectNavTypes.quiz_result,
      state: {},
    });
  }, []);

  if (isLoading) {
    return <ScreenLoader />;
  }

  return (
    <>
      {quizData && (
        <div className="px-8 py-4 flex flex-col gap-10">
          <div className="bg-white shadow-lg rounded-[10px] w-11/12">
            <div className="flex justify-between items-center pr-5">
              <h1 className="text-lightBlackColor p-5 font-bold">{""}</h1>
              {/* <QuizzesTimer /> */}
            </div>
            <hr className="w-full border border-[#eef5fa]  " />
            <div className="p-5 relative ">
              <h1 className="font-bold mb-5">{currentIndex?.question}</h1>
              <ul className="flex flex-col gap-y-4 justify-between font-light text-[0.9rem]">
                {!quizData?.result?.[quizIndex]?.userAnswer && (
                  <h4 className="text-red-600 text-md font-bold absolute top-2 right-2 ">
                    You did't Attempt any option
                  </h4>
                )}
                {currentIndex?.options.map((option, index) => (
                  <label
                    className={`flex gap-2 items-center  capitalize `}
                    key={index}
                  >
                    <QuizRadioButton
                      option={String.fromCharCode(65 + index)}
                      disable={true}
                      background={
                        currentIndex?.isCorrect &&
                        (currentIndex?.answer ?? 0 - 1) === index
                          ? "bg-green-400 text-white border-green-400"
                          : (currentIndex?.answer ?? 0 - 1) === index
                          ? "bg-red-400 text-white border-red-400 "
                          : currentIndex?.correctAnswer - 1 === index
                          ? "bg-green-400 text-white border-green-400"
                          : ""
                      }
                    />
                    <p>
                      {option}{" "}
                      <span className="ml-2 font-bold text-md ">
                        {currentIndex?.isCorrect &&
                        (currentIndex?.answer ?? 0 - 1) === index
                          ? "Correct answer"
                          : (currentIndex?.answer ?? 0 - 1) === index
                          ? "You select a wrong answer"
                          : currentIndex?.correctAnswer - 1 === index
                          ? "This is correct answer"
                          : ""}
                      </span>
                    </p>
                  </label>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-[10px] w-10/12 py-2 ">
            <div className=" flex justify-center p-5 gap-4 w-8/12 mx-auto ">
              <Button
                disabled={!quizIndex}
                onClick={() => setQuizIndex(0)}
                className={` border border-mainColor group disabled:border-opacity-60 `}
                background={`bg-white hover:bg-mainColor`}
                color={`text-mainColor hover:text-white `}
                isLoader={false}
                padding="py-1.5 px-10"
                text={
                  <span className="flex justify-center items-center gap-1">
                    First
                    <MdOutlineSkipPrevious className="text-mainColor group-hover:text-white text-xl " />
                  </span>
                }
              />
              <Button
                disabled={!quizIndex}
                onClick={() => quizIndex > 0 && setQuizIndex(quizIndex - 1)}
                className={` border border-mainColor group disabled:border-opacity-60 `}
                background={`bg-white hover:bg-mainColor`}
                color={`text-mainColor hover:text-white `}
                isLoader={false}
                padding="py-1.5 px-10"
                text={
                  <span className="flex justify-center items-center gap-1">
                    Prev
                    <BiChevronLeft className="text-mainColor group-hover:text-white text-xl" />
                  </span>
                }
              />
              <Button
                disabled={quizIndex === quizData.result.length - 1}
                onClick={() =>
                  quizIndex < quizData.result.length - 1 &&
                  setQuizIndex(quizIndex + 1)
                }
                className={` border border-mainColor group disabled:border-opacity-60 `}
                background={`bg-white hover:bg-mainColor`}
                color={`text-mainColor hover:text-white `}
                isLoader={false}
                padding="py-1.5 px-10"
                text={
                  <span className="flex justify-center items-center gap-1">
                    Next{" "}
                    <BiChevronRight className="text-mainColor group-hover:text-white text-xl" />
                  </span>
                }
              />
              <Button
                disabled={quizIndex === quizData.result.length - 1}
                onClick={() => setQuizIndex(quizData.result.length - 1)}
                className={` border border-mainColor group disabled:border-opacity-60 `}
                background={`bg-white hover:bg-mainColor`}
                color={`text-mainColor hover:text-white `}
                isLoader={false}
                padding="py-1.5 px-10"
                text={
                  <span className="flex justify-center items-center gap-1">
                    Last
                    <MdOutlineSkipNext className="text-mainColor group-hover:text-white text-xl" />
                  </span>
                }
              />
              {/* <Button
                onClick={() => {
                  updateModal({
                    type: modalType.submit_quize,
                    state: { data: quizData },
                  });
                }}
                className={` border border-mainColor group disabled:border-opacity-60 `}
                background={`bg-white hover:bg-mainColor`}
                color={`text-mainColor hover:text-white `}
                isLoader={false}
                padding="py-1.5 px-10"
                text={
                  <span className="flex justify-center items-center gap-1">
                    Finish
                    <AiOutlineCheckCircle className="text-mainColor group-hover:text-white text-xl" />
                  </span>
                }
              /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizzesDetails;
