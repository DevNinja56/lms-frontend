import { API_ENDPOINTS } from "@constant/api-endpoints";
import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@utils/axios";
import axios from "axios";

export type fetchQuizzesQuestionArgs = {
  path: string;
  id?: string;
};

let cancelTokenSource = axios.CancelToken.source();

export const fetchQuizzesQuestion = createAsyncThunk(
  API_ENDPOINTS.QUIZE.QUESTION,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ path }: fetchQuizzesQuestionArgs) => {
    cancelTokenSource.cancel("New request is being sent.");
    const newCancelTokenSource = axios.CancelToken.source();
    cancelTokenSource = newCancelTokenSource;
    try {
      return http
        .get(path, {
          cancelToken: newCancelTokenSource.token,
        })
        .then((res) => res?.data ?? res);
    } catch (error) {
      return error;
    }
  }
);
