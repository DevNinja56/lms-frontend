import {courseType} from "@utils/Types";
import {
  useAppDispatch,
  useAppSelector,
} from "./redux-hook";
import {updateCourse} from "@slices/course.slice";

export const useCourse = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(
    (state) => state.course
  );

  const setCourse = (val: courseType) =>
    dispatch(updateCourse(val));

  return {...state, setCourse};
};
