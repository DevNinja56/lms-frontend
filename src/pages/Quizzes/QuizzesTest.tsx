import { useUi } from "@hooks/user-interface";
import { modalType } from "@slices/ui.slice";
import React, { useEffect } from "react";
import QuizRadioButton from "@components/Quiz/QuizRadioButton";
import { useSubjectNavigation } from "@hooks/subject-nav";
import { subjectNavTypes } from "@utils/Types";
import Button from "@components/button";
import QuizzesTimer from "@components/Quiz/QuizzesTimer";
import ScreenLoader from "@components/ScreenLoader";
import { useQuize } from "@hooks/quize-hook";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@route/constants.route";
import SkipBack from "@components/Quiz/QuizButtonIcons/SkipBack";
import CheveronLeft from "@components/Quiz/QuizButtonIcons/CheveronLeft";
import CheveronRight from "@components/Quiz/QuizButtonIcons/CheveronRight";
import SkipForward from "@components/Quiz/QuizButtonIcons/SkipForward";
import CheckCircle from "@components/Quiz/QuizButtonIcons/CheckCircle";
// import RouteBlocker from "@components/RouteBlocker/index.jsx";

const QuizzesTest = () => {
  const {
    data: quizData,
    isLoading,
    setQuizeData,
    isStarted,
    title,
  } = useQuize();
  const { updateModal, setNav, setRouteBlock } = useUi();
  const { setNavInner, quizIndex, setQuizIndex } = useSubjectNavigation();
  const navigate = useNavigate();

  useEffect(() => {
    !isStarted && !isLoading && navigate(ROUTES.HOMEPAGE);
    setRouteBlock(true);
    setNav(true);
    setNavInner({
      type: subjectNavTypes.quiz,
      state: {},
    });
  }, []);

  const handleOptionSelect = (id: string, answer: number, c_answer: number) => {
    setQuizeData(
      quizData.map((q) =>
        q.id === id ? { ...q, answer, isCorrect: answer === c_answer } : q
      )
    );
  };

  if (isLoading) {
    return <ScreenLoader />;
  }

  return (
    <div className="px-8 py-4 flex flex-col gap-10 ">
      <div className="bg-white shadow-lg rounded-[10px] w-11/12">
        <div className="flex justify-between items-center pr-5">
          <h1 className="text-lightBlackColor p-5 font-bold">{title}</h1>
          <QuizzesTimer />
        </div>
        <hr className="w-full border border-[#eef5fa]" />
        <div className="p-5">
          <h1 className="font-medium text-lg text-lightBlackColor mb-6">
            {quizData?.[quizIndex]?.question}
          </h1>
          <ul className="flex flex-col gap-y-4 justify-between font-light text-[0.9rem]">
            {quizData?.[quizIndex]?.options.map((option, index) => (
              <label
                className={`flex gap-2 items-center cursor-pointer capitalize `}
                key={"options" + index}
              >
                <QuizRadioButton
                  option={String.fromCharCode(65 + index)}
                  checked={quizData?.[quizIndex]?.answer === index + 1}
                  onChange={() =>
                    handleOptionSelect(
                      quizData?.[quizIndex].id,
                      index + 1,
                      quizData?.[quizIndex].correctAnswer
                    )
                  }
                  background={""}
                  disable={false}
                />
                <p className="font-medium text-mainParaColor">{option}</p>
              </label>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-[10px] w-10/12 py-1">
        <div className=" flex justify-center p-5 gap-4 w-8/12 mx-auto">
          <Button
            disabled={!quizIndex}
            onClick={() => setQuizIndex(0)}
            className={` border border-mainColor group disabled:border-opacity-60 `}
            background={`bg-white hover:bg-mainColor`}
            color={`text-mainColor hover:text-white `}
            isLoader={false}
            padding="pt-[10px] py-[9px] px-[31px]"
            text={
              <span className="flex justify-center items-center gap-2">
                First
                <SkipBack />
              </span>
            }
          />
          <Button
            disabled={!quizIndex}
            onClick={() => quizIndex > 0 && setQuizIndex(quizIndex - 1)}
            className={` border border-mainColor group disabled:border-opacity-60 group`}
            background={`bg-white hover:bg-mainColor`}
            color={`text-mainColor hover:text-white `}
            isLoader={false}
            padding="pt-[10px] py-[9px] px-[31px]"
            text={
              <span className="flex justify-center items-center gap-2">
                Prev
                <CheveronLeft />
              </span>
            }
          />
          <Button
            disabled={quizIndex === quizData.length - 1}
            onClick={() =>
              quizIndex < quizData.length - 1 && setQuizIndex(quizIndex + 1)
            }
            className={` border border-mainColor group disabled:border-opacity-60 `}
            background={`bg-white hover:bg-mainColor`}
            color={`text-mainColor hover:text-white `}
            isLoader={false}
            padding="pt-[10px] py-[9px] px-[31px]"
            text={
              <span className="flex justify-center items-center gap-2">
                Next <CheveronRight />
              </span>
            }
          />
          <Button
            disabled={quizIndex === quizData.length - 1}
            onClick={() => setQuizIndex(quizData.length - 1)}
            className={` border border-mainColor group disabled:border-opacity-60 `}
            background={`bg-white hover:bg-mainColor`}
            color={`text-mainColor hover:text-white `}
            isLoader={false}
            padding="pt-[10px] py-[9px] px-[31px]"
            text={
              <span className="flex justify-center items-center gap-2">
                Last
                <SkipForward />
              </span>
            }
          />
          <Button
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
            padding="pt-[10px] py-[9px] px-[31px]"
            text={
              <span className="flex justify-center items-center gap-2">
                Finish
                <CheckCircle />
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default QuizzesTest;
