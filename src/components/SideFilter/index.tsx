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
import { RxCross2 } from "react-icons/rx";
import { ROUTES } from "@route/constants.route";
import { getPathname } from "@utils/function";
import { useLocation } from "react-router-dom";

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
  const { pathname } = useLocation();

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
        className={`bg-mainColor rounded-full text-white absolute ${
          isShownFilter
            ? "top-[65px]"
            : "/" + getPathname(pathname, [2, 3]) ===
              ROUTES.SUBJECTS_WEEK.replace("/:subject", "").replace(
                "/:week",
                ""
              )
            ? "top-32"
            : "/" + getPathname(pathname, [2, 3, 4]) ===
              ROUTES.SUBJECTS_WEEKS_DAY.replace("/:subject", "")
                .replace("/:week", "")
                .replace("/:content", "")
            ? "top-32"
            : "top-[60px]"
        } md:fixed md:top-[70px] z-50 right-5 p-2.5 border-2 border-white shadow-sm shadow-gray-200 my-[14px]`}
        onClick={() => setIsShownFilter((prev) => !prev)}
      >
        {filterContentType.subjectWeeksDay === rightFilter ? (
          isShownFilter ? (
            <RxCross2 />
          ) : (
            <GrEdit />
          )
        ) : isShownFilter ? (
          <RxCross2 />
        ) : (
          <FaFilter />
        )}
      </button>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isShownFilter ? 250 : 0 }}
        exit={{ width: 0 }}
        className="bg-white h-full overflow-x-hidden fixed right-0 top-auto lg:right-auto lg:sticky lg:top-0 overflow-y-auto"
      >
        {rightFilter !== false && (
          <div className="p-2">{AllFilters[rightFilter]}</div>
        )}
      </motion.div>
    </>
  );
};

export default SideFilter;
