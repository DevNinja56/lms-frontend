import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface subjectStateType {
  id: string;
  name: string;
}

interface stateType {
  subject: subjectStateType;
  quiz_attempted: "all" | "attempted" | "unAttempted";
  duration: number;
  bookmark_attempted: "All" | "Reading" | "Video";
}

export const initialState: stateType = {
  subject: {
    id: "null",
    name: "null",
  },
  quiz_attempted: "all",
  duration: 0,
  bookmark_attempted: "All",
};

export const rightFilter = createSlice({
  name: "right_filter",
  initialState,
  reducers: {
    updateSubject: (state, action: PayloadAction<subjectStateType>) => {
      state.subject = action.payload;
    },
    updateQuizAttempted: (
      state,
      action: PayloadAction<"all" | "attempted" | "unAttempted">
    ) => {
      state.quiz_attempted = action.payload;
    },
    updateVideoDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    updateBookmarkAttempted: (
      state,
      action: PayloadAction<"All" | "Reading" | "Video">
    ) => {
      state.bookmark_attempted = action.payload;
    },
  },
});

export const {
  updateSubject,
  updateQuizAttempted,
  updateVideoDuration,
  updateBookmarkAttempted,
} = rightFilter.actions;
export default rightFilter.reducer;
