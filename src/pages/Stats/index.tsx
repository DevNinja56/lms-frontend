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
    <div className="p-8 px-0 mx-auto w-[95%] flex justify-between">
      <div className="flex flex-col gap-y-7 w-[47%]">
      <div className="bg-white shadow-xl rounded-[10px] p-6 pb-7 flex flex-col gap-y-6">
        <p className="text-mainColor font-semibold text-[13px]">
          PROGRAM COMPLETION
        </p>
        <ProgressBar name={"MDCAT 2023"} percentage={"0%"} width={"100%"} />
      </div>
      <div className="bg-white shadow-xl rounded-[10px] p-6 pb-7 flex flex-col gap-y-8">
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
      <div className="bg-white shadow-xl rounded-[10px] p-6 pb-7 flex flex-col gap-y-6">
        <p className="text-mainColor font-semibold text-[13px]">
          PROGRAM COMPLETION
        </p>
        <div className="flex items-center justify-between">
          <AttemptedSubjectWeekQuiz
            text={"Quizzes"}
            icon={() => <Subject />}
            number={"0"}
            className={"text-[1.1rem]"}
          />
          <AttemptedSubjectWeekQuiz
            text={"Questions"}
            icon={() => <PlayCircle />}
            number={"0"}
            className={"text-[1.1rem]"}
          />
          <AttemptedSubjectWeekQuiz
            text={"Videos"}
            icon={() => <Quiz height="18" width="18" customClassName="stroke-white"/>}
            number={"0"}
            className={"text-[1.1rem]"}
          />
          <AttemptedSubjectWeekQuiz
            text={"Assignments"}
            icon={() => <ClipBoardList customClassName="stroke-white" height="18" width="18"/>}
            number={"0"}
            className={"text-[1.1rem]"}
          />
        </div>
      </div>
      </div>
      <div className="flex flex-col w-[51%]">
      <div className="bg-white shadow-xl rounded-[10px] p-6 pb-4 flex flex-col gap-y-6 mb-6">
        <p className="text-mainColor font-semibold text-[13px]">
          QUIZ PROGRESS
        </p>
        <div>
          <StatsChart />
          <div className="flex flex-col items-center">
            <div className="flex mb-3 gap-x-3">
              <Button
                text={"CHEMISTRY"}
                padding={"py-[6px] px-3"}
                className={
                  "rounded-[2px] bg-white border-gray-300 border font-normal text-xs"
                }
                color={"text-gray-400"}
              />
              <Button
                text={"PHYSICS"}
                padding={"py-[6px] px-3"}
                className={
                  "rounded-[2px] bg-white border-gray-300 border font-normal text-xs"
                }
                color={"text-gray-400"}
              />
              <Button
                text={"BIOLOGY"}
                padding={"py-[6px] px-3"}
                className={
                  "rounded-[2px] bg-white border-gray-300 border font-normal text-xs"
                }
                color={"text-gray-400"}
              />
              <Button
                text={"ENGLISH"}
                padding={"py-[6px] px-3"}
                className={
                  "rounded-[2px] bg-white border-gray-300 border font-normal text-xs"
                }
                color={"text-gray-400"}
              />
              <Button
                text={"LOGICAL REASONING"}
                padding={"py-[6px] px-3"}
                className={
                  "rounded-[2px] bg-white border-gray-300 border font-normal text-xs"
                }
                color={"text-gray-400"}
              />
            </div>
            <p className="text-gray-400 text-[10px] mb-2">
            Click on any subject to see your progress in Quizzes.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-xl rounded-[10px] p-6 pb-4 flex flex-col gap-y-6">
        <p className="text-mainColor font-semibold text-[13px]">
          ASSIGNMENT PROGRESS
        </p>
        <div>
          <StatsChart />
          <div className="flex flex-col items-center">
            <div className="flex mb-3 gap-x-3">
              <Button
                text={"CHEMISTRY"}
                padding={"py-[6px] px-3"}
                className={
                  "rounded-[2px] bg-white border-gray-300 border font-normal text-xs"
                }
                color={"text-gray-400"}
              />
              <Button
                text={"PHYSICS"}
                padding={"py-[6px] px-3"}
               className={
                  "rounded-[2px] bg-white border-gray-300 border font-normal text-xs"
                }
                color={"text-gray-400"}
              />
              <Button
                text={"SCIENCE REASONING"}
                padding={"py-[6px] px-3"}
               className={
                  "rounded-[2px] bg-white border-gray-300 border font-normal text-xs"
                }
                color={"text-gray-400"}
              />
              <Button
                text={"MATH REASONING"}
                padding={"py-[6px] px-3"}
               className={
                  "rounded-[2px] bg-white border-gray-300 border font-normal text-xs"
                }
                color={"text-gray-400"}
              />
              <Button
                text={"BIOLOGY"}
                padding={"py-[6px] px-3"}
               className={
                  "rounded-[2px] bg-white border-gray-300 border font-normal text-xs"
                }
                color={"text-gray-400"}
              />
            </div>
            <p className="text-gray-400 text-[10px] mb-2">
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
