import { useUi } from "@hooks/user-interface";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import Notification from "./Notification";
import SubjectWeeksDay from "./SubjectWeeksDay";
import Subscription from "./Subscription";
import QuizzesFilter from "./Quizzes";
import LeaderboardFilter from "./LeaderboardFilters";
import BookmarksAndNotes from "./BookmarksAndNotes";

export enum filterContentType {
  "notification",
  "subjectWeeksDay",
  "quizzes",
  "leaderboard",
  "subscription",
  "bookmarksAndNotes",
}

const SideFilter = () => {
  const [isShownFilter, setIsShownFilter] = useState(false);
  const { rightFilter } = useUi();

  const AllFilters = {
    [filterContentType.notification]: <Notification />,
    [filterContentType.subjectWeeksDay]: <SubjectWeeksDay />,
    [filterContentType.subscription]: <Subscription />,
    [filterContentType.quizzes]: <QuizzesFilter />,
    [filterContentType.leaderboard]: <LeaderboardFilter />,
    [filterContentType.bookmarksAndNotes]: <BookmarksAndNotes />,
  };

  return (
    <>
      <button
        className="bg-mainColor rounded-full text-white fixed top-[70px] z-50 right-5 p-2.5 border-2 border-white shadow-sm shadow-gray-200 my-[14px]"
        onClick={() => setIsShownFilter((prev) => !prev)}
      >
        {filterContentType.subjectWeeksDay === rightFilter ? (
          <GrEdit />
        ) : (
          <FaFilter />
        )}
      </button>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isShownFilter ? 250 : 0 }}
        exit={{ width: 0 }}
        className="bg-white h-full overflow-x-hidden sticky top-0 overflow-y-auto "
      >
        {rightFilter !== false && (
          <div className="p-2">{AllFilters[rightFilter]}</div>
        )}
      </motion.div>
    </>
  );
};

export default SideFilter;
