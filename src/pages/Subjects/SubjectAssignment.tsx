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
      <div className="w-full mt-6 flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between">
        <div className="w-full lg:w-[49%] bg-white shadow-lg rounded-[10px] py-5 px-3 md:p-5 md:min-h-[316px] lg:h-auto">
          <h1 className="text-mainColor pb-10 font-semibold text-xl">
            SUBJECT-WISE-SCORE
          </h1>
          <div className="flex justify-between items-center mb-5">
            <h1 className="font-normal text-base md:text-lg">Chemistry</h1>
            <div className="flex items-center gap-4 md:gap-6">
              <QuizScore
                backgroundColor={"mainColor"}
                text={"0/10"}
                icon={() => <Star className="h-4 w-4" />}
              />
              <QuizScore
                backgroundColor={"mainColor"}
                text={"0"}
                icon={() => (
                  <Percent className="h-4 w-4" strokeColor={"white"} />
                )}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-5">
            <h1 className="font-normal text-base md:text-lg">Physics</h1>
            <div className="flex items-center gap-4 md:gap-6">
              <QuizScore
                backgroundColor={"mainColor"}
                text={"0/10"}
                icon={() => <Star className="h-4 w-4 md:h-4 md:w-4" />}
              />
              <QuizScore
                backgroundColor={"mainColor"}
                text={"0"}
                icon={() => (
                  <Percent
                    className="h-3 w-3 md:h-4 md:w-4"
                    strokeColor={"white"}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-normal text-base md:text-lg">Math</h1>
            <div className="flex items-center gap-4 md:gap-6">
              <QuizScore
                backgroundColor={"mainColor"}
                text={"0/10"}
                icon={() => <Star className="h-4 w-4 md:h-4 md:w-4" />}
              />
              <QuizScore
                backgroundColor={"mainColor"}
                text={"0"}
                icon={() => (
                  <Percent
                    className="h-3 w-3 md:h-4 md:w-4"
                    strokeColor={"white"}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[49%] bg-white shadow-lg rounded-[10px] flex justify-center py-5 px-3 md:p-5">
          <QuizChart />
        </div>
      </div>
      <div className="w-full my-6 bg-white shadow-lg rounded-xl py-5 px-3 md:p-5">
        <h1 className="text-blue-800 pb-6 font-semibold text-xl">
          TOPIC-WISE-SCORE
        </h1>
        <div className="flex flex-col gap-y-4 md:gap-0 md:flex-row justify-between items-start md:items-center mb-6 w-full md:w-auto">
          <h1 className="text-lg">Base Units</h1>
          <div className="flex items-center gap-2 md:gap-6 justify-between w-full md:w-auto">
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => <Check />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => <X />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"5"}
              icon={() => <Ellipse />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0/5"}
              icon={() => <Star className="h-4 w-4 md:h-4 md:w-4" />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => (
                <Percent
                  className="h-3 w-3 md:h-4 md:w-4"
                  strokeColor={"white"}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:gap-0 md:flex-row justify-between items-start md:items-center mb-6 w-full md:w-auto">
          <h1 className="text-lg">Supplementary Units</h1>
          <div className="flex items-center gap-2 md:gap-6 justify-between w-full md:w-auto">
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => <Check />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => <X />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"5"}
              icon={() => <Ellipse />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0/5"}
              icon={() => <Star className="h-4 w-4 md:h-4 md:w-4" />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => (
                <Percent
                  className="h-3 w-3 md:h-4 md:w-4"
                  strokeColor={"white"}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:gap-0 md:flex-row justify-between items-start md:items-center mb-6 w-full md:w-auto">
          <h1 className="text-lg">Derived Units</h1>
          <div className="flex items-center gap-2 md:gap-6 justify-between w-full md:w-auto">
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => <Check />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => <X />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"5"}
              icon={() => <Ellipse />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0/5"}
              icon={() => <Star className="h-4 w-4 md:h-4 md:w-4" />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => (
                <Percent
                  className="h-3 w-3 md:h-4 md:w-4"
                  strokeColor={"white"}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:gap-0 md:flex-row justify-between items-start md:items-center mb-6 w-full md:w-auto">
          <h1 className="text-lg">Base Units</h1>
          <div className="flex items-center gap-2 md:gap-6 justify-between w-full md:w-auto">
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => <Check />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => <X />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"5"}
              icon={() => <Ellipse />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0/5"}
              icon={() => <Star className="h-4 w-4 md:h-4 md:w-4" />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => (
                <Percent
                  className="h-3 w-3 md:h-4 md:w-4"
                  strokeColor={"white"}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:gap-0 md:flex-row justify-between items-start md:items-center mb-6 w-full md:w-auto">
          <h1 className="text-lg">Base Units</h1>
          <div className="flex items-center gap-2 md:gap-6 justify-between w-full md:w-auto">
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => <Check />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => <X />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"5"}
              icon={() => <Ellipse />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0/5"}
              icon={() => <Star className="h-4 w-4 md:h-4 md:w-4" />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => (
                <Percent
                  className="h-3 w-3 md:h-4 md:w-4"
                  strokeColor={"white"}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:gap-0 md:flex-row justify-between items-start md:items-center mb-6 w-full md:w-auto">
          <h1 className="text-lg">Base Units</h1>
          <div className="flex items-center gap-2 md:gap-6 justify-between w-full md:w-auto">
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => <Check />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => <X />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"5"}
              icon={() => <Ellipse />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0/5"}
              icon={() => <Star className="h-4 w-4 md:h-4 md:w-4" />}
            />
            <QuizScore
              backgroundColor={"mainColor"}
              text={"0"}
              icon={() => (
                <Percent
                  className="h-3 w-3 md:h-4 md:w-4"
                  strokeColor={"white"}
                />
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectAssignment;
