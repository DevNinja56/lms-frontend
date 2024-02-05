import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import SubjectTextIcon from "./SubjectTextIcon";
import { Link } from "react-router-dom";
import { ROUTES } from "@route/constants.route";
import { SubjectType } from "@utils/Types";
import { useSubjectNavigation } from "@hooks/subject-nav";
import Quiz from "@components/SideNav/icons/Quiz";
import ClipBoardList from "@components/SideNav/icons/ClipBoardList";

const Subject = ({ data }: { data: SubjectType }) => {
  const { setSubject, setWeek } = useSubjectNavigation();
  return (
    <div className="shadow-xl shadow-gray-300 hover:shadow-none group rounded-[10px] hover:bg-mainColor pb-2 bg-white transition-all duration-300 hover:translate-y-[-8px] w-[100%] mb-5">
      <Link
        to={ROUTES.SUBJECTS_WEEK.replace(":subject", data.name).replace(
          ":week",
          data.weeksId[0]?.id ?? "1"
        )}
        onClick={() => {
          setSubject(data);
          setWeek(data.weeksId[0]);
        }}
        className="cursor-pointer bg-white w-full flex flex-wrap flex-col items-center p-5 pb-3 gap-y-7 rounded-[10px]"
      >
        <div className="flex justify-between items-center w-full">
          <h1 className="text-lg capitalize font-bold text-lightBlackColor">
            {data.name}
          </h1>
          <div className="h-[32px] w-[32px] rounded-full bg-grayBg group-hover:bg-mainColor flex items-center justify-center transition-all duration-300">
            <AiOutlineArrowRight className="text-white text-[1rem] xl:text-[1.3rem] font-medium" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between flex-wrap text-mainTextColor font-semibold w-[100%] gap-x-5">
          <SubjectTextIcon
            numberText={data.reading}
            text={`Reading`}
            icon={BsBook}
          />
          <SubjectTextIcon
            numberText={data.video}
            text={`Videos`}
            icon={AiOutlinePlayCircle}
          />
          <SubjectTextIcon
            numberText={data.quiz}
            text={`Quizzes`}
            icon={() => (
              <Quiz height="18" width="18" customClassName="stroke-white" />
            )}
          />
          <SubjectTextIcon
            numberText={data.assignment}
            text={`Assignments`}
            icon={() => (
              <ClipBoardList
                customClassName="stroke-white"
                height="18"
                width="18"
              />
            )}
          />
        </div>
      </Link>
    </div>
  );
};

export default Subject;
