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
      icon: <Quiz height="18" width="18" customClassName={"stroke-white"} />,
    },
    {
      name: "assignments",
      length: week?.assignment ?? 0,
      icon: <ClipBoardList customClassName={"stroke-white"} height="22" width="22"/>,
    },
  ];
  return (
    <div className="bg-white rounded-[5px] shadow-md shadow-gray-200 py-4 px-7 w-full flex justify-between sticky top-0 z-10 mb-9">
      <div className="grid capitalize">
        <span className="font-bold text-2xl text-mainParaColor">
          {week?.name}
        </span>
      </div>
      <div className="flex gap-5">
        {weeksHeader.map(
          (item: { name: string; length: number; icon: any }, i) => (
            <div
              className="flex gap-2 items-center "
              key={"header-icons-table--" + i}
            >
              <div className="rounded-full bg-mainColor text-white p-2 text-xl h-[35px] w-[35px] flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-[13px] capitalize px-2 font-normal text-mainParaColor">
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
  );
};

export default SubjectWeekHeader;
