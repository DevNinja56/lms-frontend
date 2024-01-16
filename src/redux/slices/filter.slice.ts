import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface subjectStateType {
  id: string;
  name: string;
}

interface stateType {
  subject: subjectStateType;
  quiz_attempted: "all" | "attempted" | "unAttempted";
}

export const initialState: stateType = {
  subject: {
    id: "null",
    name: "null",
  },
  quiz_attempted: "all",
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
  },
});

export const { updateSubject, updateQuizAttempted } = rightFilter.actions;
export default rightFilter.reducer;
