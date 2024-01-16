import { filterContentType } from "@components/SideFilter";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum layoutType {
  "basic",
  "paid",
}

export enum modalType {
  "none",
  "change_password",
  "rating",
  "otp",
  "forgot",
  "profile_picture",
  "submit_quize",
  "teachers_support",
  "note_delete",
  "bookmarked_delete",
  "profile_document_upload",
  "report",
}

interface UiState {
  modal: modalType | false;
  modalState: any;
  subjectNav: boolean;
  rightFilter: filterContentType | false;
  filterState: any;
  routeBlock: boolean;
}

const initialState: UiState = {
  modal: false,
  modalState: null,
  subjectNav: false,
  rightFilter: false,
  filterState: {},
  routeBlock: false,
};

export const uiSlice = createSlice({
  name: "userInterface",
  initialState,
  reducers: {
    toggleNavigation: (state) => {
      state.subjectNav = !state.subjectNav;
    },
    updateNavigation: (state, action: PayloadAction<boolean>) => {
      state.subjectNav = action.payload;
    },
    closeModal: (state) => {
      state.modal = false;
      state.modalState = null;
    },
    updateModalAndState: (
      state,
      action: PayloadAction<{ type: modalType; state: any }>
    ) => {
      state.modal = action.payload.type;
      state.modalState = action.payload.state;
    },
    updateFilterAndState: (
      state,
      action: PayloadAction<{ type: filterContentType | false; state: any }>
    ) => {
      state.rightFilter = action.payload.type;
      state.filterState = action.payload.state;
    },
    updateRouteBlock: (state, action: PayloadAction<boolean>) => {
      state.routeBlock = action.payload;
    },
  },
});

export const {
  toggleNavigation,
  updateNavigation,
  closeModal,
  updateModalAndState,
  updateFilterAndState,
  updateRouteBlock,
} = uiSlice.actions;
export default uiSlice.reducer;
