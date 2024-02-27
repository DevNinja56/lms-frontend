import { fetchQuizzesQuestion } from "@actions/fetch-quizzes";
import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { ROUTES } from "@route/constants.route";
import { quiZeQuestionType } from "@utils/Types";

export type updateQuizeType = {
  id: string | null;
  quizePath: string;
  data: quiZeQuestionType[];
  title: string;
};

interface stateType extends updateQuizeType {
  start_time: number;
  isStarted: boolean;
  isLoading: boolean;
  error: SerializedError | null;
}

export const initialState: stateType = {
  id: null,
  quizePath: "null",
  data: [],
  title: "",
  start_time: 0,
  isStarted: false,
  isLoading: false,
  error: null,
};

export const quizzes = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    updateQuize: (state, action: PayloadAction<updateQuizeType>) => {
      state.isStarted = true;
      state.quizePath = action.payload.quizePath;
      state.data = action.payload.data;
    },
    updateData: (state, action: PayloadAction<quiZeQuestionType[]>) => {
      state.data = action.payload;
    },
    completeQuize: (state) => {
      state.id = null;
      state.isStarted = false;
      state.quizePath = "null";
      state.data = [];
      state.start_time = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzesQuestion.pending, (state) => {
        state.isLoading = true;
        state.isStarted = false;
        state.quizePath = "";
      })
      .addCase(fetchQuizzesQuestion.fulfilled, (state, action) => {
        state.data = action.payload.questions;
        state.isLoading = false;
        state.isStarted = true;
        state.error = null;
        state.title = action.payload.name;
        state.quizePath = ROUTES.QUIZZES_TEST.replace(
          ":id",
          action.meta.arg.path.replace("/quize/", "") ?? ""
        );
        state.id = action.payload?.id ? action.payload?.id : "";
        const startTime =
          Math.floor(Date.now() / 1000) + +action.payload.time * 60;
        state.start_time = startTime ? startTime : 0;
      })
      .addCase(fetchQuizzesQuestion.rejected, (state, action) => {
        state.error = action.error! ?? "An Error occurred";
      });
  },
});

export const { updateQuize, updateData, completeQuize } = quizzes.actions;

export default quizzes.reducer;
