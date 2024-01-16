import { API_ENDPOINTS } from "@constant/api-endpoints";
import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "@utils/axios";
import axios from "axios";
import { RootState } from "redux/store";

let cancelTokenSource = axios.CancelToken.source();

export const fetchDays = createAsyncThunk(
  API_ENDPOINTS.DAY,
  async ({ weekId }: { weekId?: string }, { getState }) => {
    const state = getState() as RootState;
    cancelTokenSource.cancel("New request is being sent.");
    const newCancelTokenSource = axios.CancelToken.source();
    cancelTokenSource = newCancelTokenSource;
    try {
      return http
        .get(
          API_ENDPOINTS.DAY.replace(
            ":id",
            state.subjectNav?.week?.id ?? weekId
          ),
          {
            cancelToken: newCancelTokenSource.token,
          }
        )
        .then((res) => res?.data ?? res);
    } catch (error) {
      return error;
    }
  }
);
