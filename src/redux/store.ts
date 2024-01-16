import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import courseSlice from "@slices/course.slice";
import { stateQueryApi } from "@slices/fetch-all-queries.slice";
import subjectNav from "@slices/subject-nav.slice";
import uiSlice from "@slices/ui.slice";
import authUserInfo from "@slices/auth.slice";
import quizzes from "@slices/quize.slice";
import rightFilter from "@slices/filter.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "quizzes", "course", "subjectNav"], // Whitelist the slices you want to persist
};

const rootReducer = combineReducers({
  [stateQueryApi.reducerPath]: stateQueryApi.reducer,
  auth: authUserInfo,
  userInterface: uiSlice,
  course: courseSlice,
  subjectNav,
  quizzes,
  rightFilter,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(stateQueryApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
