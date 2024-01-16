import {
  updateDay,
  updateDayState,
  updateInnerNav,
  updateNav,
  updateQuizIndex,
  updateSubject,
  updateWeek,
} from "@slices/subject-nav.slice";
import { useAppDispatch, useAppSelector } from "./redux-hook";
import {
  SubjectType,
  WeekType,
  dayType,
  navTypes,
  subjectNavTypes,
} from "@utils/Types";
import { fetchDays } from "@actions/fetch-days";
import { useParams } from "react-router-dom";

export const useSubjectNavigation = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.subjectNav);
  const { week: weekId = "" } = useParams();

  const updateSubjectNav = (type: navTypes) => dispatch(updateNav(type));
  const setSubject = (val: SubjectType) => dispatch(updateSubject(val));
  const setWeek = (val: WeekType) => dispatch(updateWeek(val));
  const setDay = (val: dayType) => dispatch(updateDay(val));

  const getDays = () => {
    dispatch(fetchDays({ weekId }));
  };
  const setDayState = (val: dayType) => {
    dispatch(updateDayState(val));
  };

  const setNavInner = (val: { type: subjectNavTypes; state: any }) => {
    dispatch(updateInnerNav(val));
  };

  const setQuizIndex = (val: number) => {
    dispatch(updateQuizIndex(val));
  };

  return {
    ...state,
    updateSubjectNav,
    setSubject,
    setWeek,
    setDay,
    getDays,
    setDayState,
    setNavInner,
    setQuizIndex,
  };
};
