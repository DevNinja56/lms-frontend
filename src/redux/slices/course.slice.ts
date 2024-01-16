import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { courseType } from "@utils/Types";

interface stateType {
  course: courseType;
  available: boolean;
}

export const initialState: stateType = {
  course: {
    id: "",
    avgRating: 0,
    endDate: "",
    from: "",
    image: "",
    name: "",
    totalRating: 0,
    usersActions: [],
  },
  available: false,
};

export const courseSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {
    updateCourse: (state, action: PayloadAction<courseType>) => {
      state.course = action.payload;
      state.available = true;
    },
  },
});

export const { updateCourse } = courseSlice.actions;
export default courseSlice.reducer;
