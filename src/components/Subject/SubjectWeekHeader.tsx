import React from "react";
import { BsBook } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useSubjectNavigation } from "@hooks/subject-nav";
import ClipBoardList from "@components/SideNav/icons/ClipBoardList";
import Quiz from "@components/SideNav/icons/Quiz";

const SubjectWeekHeader = () => {
  const { week } = useSubjectNavigation();

  const weeksHeader = [
    { name: "reading", length: week?.reading ?? 0, icon: <BsBook /> },
    { name: "videos", length: week?.video ?? 0, icon: <AiOutlinePlayCircle /> },
    {
      name: "quizzes",
      length: week?.quiz ?? 0,
      icon: <Quiz className="h-4 w-4" customClassName={"stroke-white"} />,
    },
    {
      name: "assignments",
      length: week?.assignment ?? 0,
      icon: (
        <ClipBoardList customClassName={"stroke-white"} className="h-5 w-5" />
      ),
    },
  ];
  return (
    <>
      <span className="font-bold text-2xl text-mainParaColor block lg:hidden mb-7 md:mb-3">
        {week?.name}
      </span>
      <div className="bg-white rounded-[5px] shadow-md shadow-gray-200 py-7 md:py-4 px-5 md:px-3 lg:px-5 xl:px-7 w-full flex justify-between static md:sticky top-0 z-10 mb-5 md:mb-9">
        <div className="lg:grid capitalize hidden">
          <span className="font-bold text-2xl text-mainParaColor">
            {week?.name}
          </span>
        </div>
        <div className="grid grid-cols-2 md:flex gap-6 md:gap-5 w-full lg:w-auto justify-between lg:justify-start">
          {weeksHeader.map(
            (item: { name: string; length: number; icon: any }, i) => (
              <div
                className="flex gap-2 xl:gap-2 items-center "
                key={"header-icons-table--" + i}
              >
                <div className="rounded-full bg-mainColor text-white p-2 text-xl h-8 w-8 lg:h-[35px] lg:w-[35px] flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-xs md:text-[13px] capitalize font-normal text-mainParaColor">
                  <span className="block font-bold text-lightBlackColor">
                    {item.length}
                  </span>
                  {item.name}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default SubjectWeekHeader;
