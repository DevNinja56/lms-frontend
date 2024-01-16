import React from "react";
import QuizScore from "@components/Quiz/QuizScore";
import QuizChart from "@components/Quiz/QuizChart";
import Percent from "@components/Subject/subjectWeekQuizIcons/Percent";
import Star from "@components/Subject/subjectWeekQuizIcons/Star";
import Ellipse from "@components/Subject/subjectWeekQuizIcons/Ellipse";
import X from "@components/Subject/subjectWeekQuizIcons/X";
import Check from "@components/Subject/subjectWeekQuizIcons/Check";

const SubjectAssignment = () => {
  return (
    <>
      <div className="w-full mt-6 flex justify-between">
        <div className="w-[49%] bg-white shadow-lg rounded-[10px] p-5">
          <h1 className="text-mainColor pb-10 font-semibold text-xl">
            SUBJECT-WISE-SCORE
          </h1>
          <div className="flex justify-between items-center mb-5">
            <h1 className="font-normal text-lg">Chemistry</h1>
            <div className="flex items-center gap-6">
              <QuizScore backgroundColor={"mainColor"} text={"0/10"} icon={() => <Star height={"18"} width={"18"} />} />
              <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Percent height={"18"} width={"18"} strokeColor={"white"}/>} />
            </div>
          </div>
          <div className="flex justify-between items-center mb-5">
            <h1 className="font-normal text-lg">Physics</h1>
            <div className="flex items-center gap-6">
              <QuizScore backgroundColor={"mainColor"} text={"0/10"} icon={() => <Star height={"18"} width={"18"} />} />
              <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Percent height={"18"} width={"18"} strokeColor={"white"}/>} />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-normal text-lg">Math</h1>
            <div className="flex items-center gap-6">
              <QuizScore backgroundColor={"mainColor"} text={"0/10"} icon={() => <Star height={"18"} width={"18"} />} />
              <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Percent height={"18"} width={"18"} strokeColor={"white"}/>} />
            </div>
          </div>
        </div>
        <div className="w-[49%] bg-white shadow-lg rounded-[10px] flex justify-center py-8">
          <QuizChart />
        </div>
      </div>
      <div className="w-full my-6 bg-white shadow-lg rounded-xl p-5">
        <h1 className="text-blue-800 pb-6 font-semibold text-xl">
          TOPIC-WISE-SCORE
        </h1>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg">Base Units</h1>
          <div className="flex items-center gap-6">
          <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Check />} />
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <X />} />
            <QuizScore backgroundColor={"mainColor"} text={"5"} icon={() => <Ellipse />} />
            <QuizScore backgroundColor={"mainColor"} text={"0/5"} icon={() => <Star height={"18"} width={"18"} />} />
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Percent height={"18"} width={"18"} strokeColor={"white"}/>} />
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg">Supplementary Units</h1>
          <div className="flex items-center gap-6">
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Check />} />
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <X />} />
            <QuizScore backgroundColor={"mainColor"} text={"5"} icon={() => <Ellipse />} />
            <QuizScore backgroundColor={"mainColor"} text={"0/5"} icon={() => <Star height={"18"} width={"18"} />} />
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Percent height={"18"} width={"18"} strokeColor={"white"}/>} />
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg">Derived Units</h1>
          <div className="flex items-center gap-6">
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Check />} />
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <X />} />
            <QuizScore backgroundColor={"mainColor"} text={"5"} icon={() => <Ellipse />} />
            <QuizScore backgroundColor={"mainColor"} text={"0/5"} icon={() => <Star height={"18"} width={"18"} />} />
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Percent height={"18"} width={"18"} strokeColor={"white"}/>} />
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg">Base Units</h1>
          <div className="flex items-center gap-6">
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Check />} />
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <X />} />
            <QuizScore backgroundColor={"mainColor"} text={"5"} icon={() => <Ellipse />} />
            <QuizScore backgroundColor={"mainColor"} text={"0/5"} icon={() => <Star height={"18"} width={"18"} />} />
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Percent height={"18"} width={"18"} strokeColor={"white"}/>} />
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg">Base Units</h1>
          <div className="flex items-center gap-6">
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Check />} />
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <X />} />
            <QuizScore backgroundColor={"mainColor"} text={"5"} icon={() => <Ellipse />} />
            <QuizScore backgroundColor={"mainColor"} text={"0/5"} icon={() => <Star height={"18"} width={"18"} />} />
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Percent height={"18"} width={"18"} strokeColor={"white"}/>} />
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg">Base Units</h1>
          <div className="flex items-center gap-6">
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Check />} />
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <X />} />
            <QuizScore backgroundColor={"mainColor"} text={"5"} icon={() => <Ellipse />} />
            <QuizScore backgroundColor={"mainColor"} text={"0/5"} icon={() => <Star height={"18"} width={"18"} />} />
            <QuizScore backgroundColor={"mainColor"} text={"0"} icon={() => <Percent height={"18"} width={"18"} strokeColor={"white"}/>} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectAssignment;
