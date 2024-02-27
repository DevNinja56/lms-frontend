import React from "react";
import ProgressBar from "@components/ProgressBar";
import StatsChart from "@components/StatsChart/StatsChart";
import Button from "@components/button";
import AttemptedSubjectWeekQuiz from "@components/Subject/AttemptedSubjectWeekQuiz";
import PlayCircle from "@components/SubjectNav/subjectNavIcons/PlayCircle";
import Subject from "@components/SubjectNav/subjectNavIcons/Subject";
import Quiz from "@components/SideNav/icons/Quiz";
import ClipBoardList from "@components/SideNav/icons/ClipBoardList";

const Stats = () => {
  return (
    <div className="px-4 md:px-6 lg:px-0 pb-8 pt-12 md:py-8 mx-auto w-full lg:w-[95%] flex flex-col gap-5 lg:gap-0 lg:flex-row justify-start lg:justify-between">
      <div className="flex flex-col gap-y-7 w-full lg:w-[47%]">
        <div className="bg-white shadow-xl rounded-[10px] px-4 py-6 pb-7 flex flex-col gap-y-6">
          <p className="text-mainColor font-semibold text-[13px]">
            PROGRAM COMPLETION
          </p>
          <ProgressBar name={"MDCAT 2023"} percentage={"0%"} width={"100%"} />
        </div>
        <div className="bg-white shadow-xl rounded-[10px] px-4 py-6 pb-7 flex flex-col gap-y-8">
          <p className="text-mainColor font-semibold text-[13px]">
            SUBJECT SCORE
          </p>
          <ProgressBar
            name={"Logical Reasoning"}
            percentage={"0%"}
            width={"100%"}
          />
          <ProgressBar name={"Biology"} percentage={"0%"} width={"100%"} />
          <ProgressBar name={"Chemistry"} percentage={"0%"} width={"100%"} />
          <ProgressBar name={"Physics"} percentage={"0%"} width={"100%"} />
          <ProgressBar name={"English"} percentage={"0%"} width={"100%"} />
          <ProgressBar name={"FLP Medical"} percentage={"0%"} width={"100%"} />
        </div>
        <div className="bg-white shadow-xl rounded-[10px] px-4 py-6 pb-7 flex flex-col gap-y-6">
          <p className="text-mainColor font-semibold text-[13px]">
            PROGRAM COMPLETION
          </p>
          <div className="flex flex-wrap gap-5 md:gap-0 items-center justify-between">
            <AttemptedSubjectWeekQuiz
              text={"Quizzes"}
              icon={() => <Subject className="h-4 w-4" />}
              number={"0"}
              className={"text-xs"}
            />
            <AttemptedSubjectWeekQuiz
              text={"Questions"}
              icon={() => <PlayCircle className="h-4 w-4" />}
              number={"0"}
              className={"text-xs"}
            />
            <AttemptedSubjectWeekQuiz
              text={"Videos"}
              icon={() => (
                <Quiz className="h-4 w-4" customClassName="stroke-white" />
              )}
              number={"0"}
              className={"text-xs"}
            />
            <AttemptedSubjectWeekQuiz
              text={"Assignments"}
              icon={() => (
                <ClipBoardList
                  customClassName="stroke-white"
                  className="h-4 w-4"
                />
              )}
              number={"0"}
              className={"text-xs"}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-[51%]">
        <div className="bg-white shadow-xl rounded-[10px] px-4 py-6 flex flex-col gap-y-6 mb-6">
          <p className="text-mainColor font-semibold text-[13px]">
            QUIZ PROGRESS
          </p>
          <div>
            <StatsChart />
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap gap-y-4 gap-x-2 md:justify-start md:gap-3 mb-3">
                <Button
                  text={"CHEMISTRY"}
                  padding={"py-2 px-4 md:p-2"}
                  className={
                    "rounded-[2px] bg-white border-gray-500 border font-normal text-[10px]"
                  }
                  color={"text-gray-400"}
                />
                <Button
                  text={"PHYSICS"}
                  padding={"py-2 px-4 md:p-2"}
                  className={
                    "rounded-[2px] bg-white border-gray-500 border font-normal text-[10px]"
                  }
                  color={"text-gray-400"}
                />
                <Button
                  text={"BIOLOGY"}
                  padding={"py-2 px-4 md:p-2"}
                  className={
                    "rounded-[2px] bg-white border-gray-500 border font-normal text-[10px]"
                  }
                  color={"text-gray-400"}
                />
                <Button
                  text={"ENGLISH"}
                  padding={"py-2 px-4 md:p-2"}
                  className={
                    "rounded-[2px] bg-white border-gray-500 border font-normal text-[10px]"
                  }
                  color={"text-gray-400"}
                />
                <Button
                  text={"LOGICAL REASONING"}
                  padding={"py-2 px-4 md:p-2"}
                  className={
                    "rounded-[2px] bg-white border-gray-500 border font-normal text-[10px]"
                  }
                  color={"text-gray-400"}
                />
              </div>
              <p className="text-gray-400 text-[10px] text-center mb-2">
                Click on any subject to see your progress in Quizzes.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-[10px] px-4 py-6 flex flex-col gap-y-6">
          <p className="text-mainColor font-semibold text-[13px]">
            ASSIGNMENT PROGRESS
          </p>
          <div>
            <StatsChart />
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap gap-y-4 gap-x-2 md:justify-start md:gap-3 mb-3">
                <Button
                  text={"CHEMISTRY"}
                  padding={"py-2 px-4 md:p-2"}
                  className={
                    "rounded-[2px] bg-white border-gray-500 border font-normal text-[10px]"
                  }
                  color={"text-gray-400"}
                />
                <Button
                  text={"PHYSICS"}
                  padding={"py-2 px-4 md:p-2"}
                  className={
                    "rounded-[2px] bg-white border-gray-500 border font-normal text-[10px]"
                  }
                  color={"text-gray-400"}
                />
                <Button
                  text={"BIOLOGY"}
                  padding={"py-2 px-4 md:p-2"}
                  className={
                    "rounded-[2px] bg-white border-gray-500 border font-normal text-[10px]"
                  }
                  color={"text-gray-400"}
                />
                <Button
                  text={"ENGLISH"}
                  padding={"py-2 px-4 md:p-2"}
                  className={
                    "rounded-[2px] bg-white border-gray-500 border font-normal text-[10px]"
                  }
                  color={"text-gray-400"}
                />
                <Button
                  text={"LOGICAL REASONING"}
                  padding={"py-2 px-4 md:p-2"}
                  className={
                    "rounded-[2px] bg-white border-gray-500 border font-normal text-[10px]"
                  }
                  color={"text-gray-400"}
                />
              </div>
              <p className="text-gray-400 text-[10px] text-center mb-2">
                Click on any subject to see your progress in Assignments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
