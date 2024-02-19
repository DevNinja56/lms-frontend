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

const SubjectNav: React.FC = () => {
  const { subjectNav } = useUi();
  const { showInnerNav, setNavInner } = useSubjectNavigation();
  const isMediumScreen = useMediaQuery("(max-width: 1023px)");

  useEffect(() => {
    return () => {
      setNavInner({
        type: subjectNavTypes.subject,
        state: {},
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className={`bg-white overflow-x-hidden sticky top-0 overflow-y-auto hidden md:block`}
        initial={{ width: subjectNav ? (isMediumScreen ? 140 : 240) : 0 }}
        animate={{ width: subjectNav ? (isMediumScreen ? 140 : 240) : 0 }}
      >
        {showInnerNav === subjectNavTypes.subject && <SubjectAndWeeks />}
        {showInnerNav === subjectNavTypes.quiz && <QuizzeNav />}
        {showInnerNav === subjectNavTypes.quiz_result && <QuizzeResultNav />}
      </motion.div>
      <div className="flex items-center md:hidden w-full">
        {showInnerNav === subjectNavTypes.subject && (
          <SubjectAndWeeksDropDown />
        )}
        {showInnerNav === subjectNavTypes.quiz && <QuizzeNav />}
        {showInnerNav === subjectNavTypes.quiz_result && <QuizzeResultNav />}
      </div>
    </>
  );
};

export default memo(SubjectNav);
