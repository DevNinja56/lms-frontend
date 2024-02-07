import {
  subjectStateType,
  updateBookmarkAttempted,
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

  return {
    ...state,
    setSubject,
    setQuizAttempted,
    setVideoDuration,
    setBookmarkAttempted,
  };
};
