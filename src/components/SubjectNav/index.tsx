import React, { memo, useEffect } from "react";
import { useUi } from "@hooks/user-interface";
import { motion } from "framer-motion";
import SubjectAndWeeks from "./SubjectAndWeeks";
import { useSubjectNavigation } from "@hooks/subject-nav";
import { subjectNavTypes } from "@utils/Types";
import QuizzeNav from "./QuizzeNav";
import QuizzeResultNav from "./QuizzeResultNav";
import { useMediaQuery } from "@mui/material";
import SubjectAndWeeksDropDown from "./SubjectAndWeeksDropDown";
import { useLocation } from "react-router-dom";
import { ROUTES } from "@route/constants.route";
import { getPathname } from "@utils/function";

const SubjectNav: React.FC = () => {
  const { subjectNav } = useUi();
  const { showInnerNav, setNavInner } = useSubjectNavigation();
  const isMediumScreen = useMediaQuery("(max-width: 1023px)");
  const { pathname } = useLocation();

  useEffect(() => {
    return () => {
      setNavInner({
        type: subjectNavTypes.subject,
        state: {},
      });
    };
  }, []);

  console.log(getPathname(pathname, [3]), "pathname");

  return (
    <>
      <motion.div
        className={`bg-white overflow-x-hidden sticky top-0 overflow-y-auto hidden md:block`}
        initial={{ width: subjectNav ? (isMediumScreen ? 170 : 240) : 0 }}
        animate={{ width: subjectNav ? (isMediumScreen ? 170 : 240) : 0 }}
      >
        {showInnerNav === subjectNavTypes.subject && <SubjectAndWeeks />}
        {showInnerNav === subjectNavTypes.quiz && <QuizzeNav />}
        {showInnerNav === subjectNavTypes.quiz_result && <QuizzeResultNav />}
      </motion.div>
      {"/" + getPathname(pathname, [2, 3]) ===
      ROUTES.SUBJECTS_WEEK.replace("/:subject", "").replace("/:week", "") ? (
        <div className="flex items-center md:hidden w-full">
          {showInnerNav === subjectNavTypes.subject && (
            <SubjectAndWeeksDropDown />
          )}
          {showInnerNav === subjectNavTypes.quiz && <QuizzeNav />}
          {showInnerNav === subjectNavTypes.quiz_result && <QuizzeResultNav />}
        </div>
      ) : "/" + getPathname(pathname, [2, 3, 4]) ===
        ROUTES.SUBJECTS_WEEKS_DAY.replace("/:subject", "")
          .replace("/:week", "")
          .replace("/:content", "") ? (
        <div className="flex items-center md:hidden w-full">
          {showInnerNav === subjectNavTypes.subject && (
            <SubjectAndWeeksDropDown />
          )}
          {showInnerNav === subjectNavTypes.quiz && <QuizzeNav />}
          {showInnerNav === subjectNavTypes.quiz_result && <QuizzeResultNav />}
        </div>
      ) : "/" + getPathname(pathname, [3]) ===
        ROUTES.QUIZZES_DETAILS.replace("quizzes-test", "") ? (
        <div className="flex items-center md:hidden w-full">
          {showInnerNav === subjectNavTypes.subject && (
            <SubjectAndWeeksDropDown />
          )}
          {showInnerNav === subjectNavTypes.quiz && <QuizzeNav />}
          {showInnerNav === subjectNavTypes.quiz_result && <QuizzeResultNav />}
        </div>
      ) : "/" + getPathname(pathname, [3]) ===
        ROUTES.QUIZZES_TEST.replace("/:id", "") ? (
        <div className="flex items-center md:hidden w-full">
          {showInnerNav === subjectNavTypes.subject && (
            <SubjectAndWeeksDropDown />
          )}
          {showInnerNav === subjectNavTypes.quiz && <QuizzeNav />}
          {showInnerNav === subjectNavTypes.quiz_result && <QuizzeResultNav />}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default memo(SubjectNav);
