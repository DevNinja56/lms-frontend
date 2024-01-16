import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import {
  SubjectType,
  WeekType,
  dayType,
  navTypes,
  subjectNavTypes,
} from "@utils/Types";
import { fetchDays } from "@actions/fetch-days";

interface stateType {
  navType: navTypes;
  daysState: dayType[];
  subject: SubjectType;
  week: WeekType | any;
  day: dayType | any;
  isLoading: boolean;
  error: SerializedError | null;
  showInnerNav: subjectNavTypes;
  innerNavState: unknown;
  quizIndex: number;
}

export const initialState: stateType = {
  navType: navTypes.subjects_list,
  daysState: [],
  subject: {
    id: "",
    name: "",
    reading: 0,
    video: 0,
    quiz: 0,
    assignment: 0,
    weeksId: [],
  },
  week: null,
  day: null,
  isLoading: false,
  error: null,
  showInnerNav: subjectNavTypes.subject,
  innerNavState: {},
  quizIndex: 0,
};

export const subjectNav = createSlice({
  name: "subject_navigation",
  initialState,
  reducers: {
    updateNav: (state, action: PayloadAction<navTypes>) => {
      state.navType = action.payload;
    },
    updateSubject: (state, action: PayloadAction<SubjectType>) => {
      state.subject = action.payload;
    },
    updateWeek: (state, action: PayloadAction<WeekType>) => {
      state.week = action.payload;
    },
    updateDay: (state, action: PayloadAction<dayType>) => {
      state.day = action.payload;
    },
    updateDayState: (state, action: PayloadAction<dayType>) => {
      state.daysState = [action.payload];
    },
    updateInnerNav: (
      state,
      action: PayloadAction<{ type: subjectNavTypes; state: any }>
    ) => {
      state.showInnerNav = action.payload.type;
      state.innerNavState = action.payload.state;
    },
    updateQuizIndex: (state, action: PayloadAction<number>) => {
      state.quizIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDays.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDays.fulfilled, (state, action) => {
        state.daysState = action.payload;
        state.day = action.payload[0];
        state.isLoading = false;
      })
      .addCase(fetchDays.rejected, (state, action) => {
        state.error = action.error! ?? "An Error occurred";
      });
  },
});

export const {
  updateNav,
  updateSubject,
  updateWeek,
  updateDay,
  updateDayState,
  updateInnerNav,
  updateQuizIndex,
} = subjectNav.actions;
export default subjectNav.reducer;
