import React, {memo, useEffect} from "react";
import {useUi} from "@hooks/user-interface";
import {motion} from "framer-motion";
import SubjectAndWeeks from "./SubjectAndWeeks";
import {useSubjectNavigation} from "@hooks/subject-nav";
import {subjectNavTypes} from "@utils/Types";
import QuizzeNav from "./QuizzeNav";
import QuizzeResultNav from "./QuizzeResultNav";

const SubjectNav: React.FC = () => {
  const {subjectNav} = useUi();
  const {showInnerNav, setNavInner} =
    useSubjectNavigation();

  useEffect(() => {
    return () => {
      setNavInner({
        type: subjectNavTypes.subject,
        state: {},
      });
    };
  }, []);

  return (
    <motion.div
      className={`bg-white overflow-x-hidden sticky top-0 overflow-y-auto`}
      initial={{width: subjectNav ? 240 : 0}}
      animate={{width: subjectNav ? 240 : 0}}>
      {showInnerNav ===
        subjectNavTypes.subject && (
        <SubjectAndWeeks />
      )}
      {showInnerNav === subjectNavTypes.quiz && (
        <QuizzeNav />
      )}
      {showInnerNav ===
        subjectNavTypes.quiz_result && (
        <QuizzeResultNav />
      )}
    </motion.div>
  );
};

export default memo(SubjectNav);
