import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SubjectType,
  bookmarkType,
  courseType,
  daysContent,
  notesType,
  quizeResult,
  quizeType,
} from "@utils/Types";
import { getToken } from "@utils/axios/token";
import { API_ENDPOINTS } from "@constant/api-endpoints";

export interface PaginatedResponse<data> {
  data: data;
  count: number;
  page: number;
  limit: number;
  totalPage: number;
  nextPage: number | null;
}

export const stateQueryApi = createApi({
  reducerPath: "stateQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PUBLIC_REST_API_ENDPOINT,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCourses: builder.query<courseType[], void>({
      query: () => ({ url: API_ENDPOINTS.COURSES }),
      transformResponse: (res: any) => res.data! ?? res,
    }),
    //paginated course API
    getPaginatedCourses: builder.query<PaginatedResponse<courseType[]>, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 10 }) => ({
        url: `${API_ENDPOINTS.GET_PAGINATED_COURSES}?page=${page}&limit=${limit}`,
      }),
      transformResponse: (res: {data:PaginatedResponse<courseType[]>}) => res.data! ?? res,
    }),
    getSubjects: builder.query<SubjectType[], string | void>({
      query: (courseId: string) => ({
        url: API_ENDPOINTS.SUBJECT.replace(":id", courseId),
      }),
      transformResponse: (res: any) => res.data! ?? res,
    }),
    getQuizeResult: builder.query<quizeResult, string>({
      query: (url) => ({ url }),
      transformResponse: (res: any) => res.data! ?? res,
    }),
    getDayContent: builder.query<daysContent, string>({
      query: (url) => ({ url }),
      transformResponse: (res: any) => res.data! ?? res,
    }),
    getSubjectQuiz: builder.query<quizeType[], string>({
      query: (url) => ({ url }),
      transformResponse: (res: any) => res.data! ?? res,
    }),
    getBookmark: builder.query<bookmarkType[], void>({
      query: () => ({ url: API_ENDPOINTS.BOOKMARK }),
      transformResponse: (res: any) => res.data! ?? res,
    }),
    getNotes: builder.query<
      notesType[],
      { id: string; type: "video" | "reading" }
    >({
      query: ({ id, type }) => ({
        url: `${API_ENDPOINTS.NOTE_CONTENT.replace(":id", id)}?type=${type}`,
      }),
      transformResponse: (res: any) => res.data! ?? res,
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetSubjectsQuery,
  useGetQuizeResultQuery,
  useGetDayContentQuery,
  useGetSubjectQuizQuery,
  useGetBookmarkQuery,
  useGetNotesQuery,
  useGetPaginatedCoursesQuery,
} = stateQueryApi;
