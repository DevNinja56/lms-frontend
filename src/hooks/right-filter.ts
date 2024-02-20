import {
  subjectStateType,
  updateBookmarkAttempted,
  updateNotesAttempted,
  updateQuizAttempted,
  updateSubject,
  updateVideoDuration,
} from "@slices/filter.slice";
import { useAppDispatch, useAppSelector } from "./redux-hook";

export const useRightFilter = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.rightFilter);

  const setSubject = ({ id, name }: subjectStateType) =>
    dispatch(updateSubject({ id, name }));

  const setQuizAttempted = (val: "all" | "attempted" | "unAttempted") =>
    dispatch(updateQuizAttempted(val));

  const setVideoDuration = (duration: number) =>
    dispatch(updateVideoDuration(duration));

  const setBookmarkAttempted = (val: "All" | "Reading" | "Video") =>
    dispatch(updateBookmarkAttempted(val));

  const setNotesAttempted = (val: "All" | "Reading" | "Video") =>
    dispatch(updateNotesAttempted(val));

  return {
    ...state,
    setSubject,
    setQuizAttempted,
    setVideoDuration,
    setBookmarkAttempted,
    setNotesAttempted,
  };
};
