import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const currentPracticeSessionSlice = createSlice({
  name: "currentPracticeSession",
  initialState,
  reducers: {
    currentPracticeSessionAdded(state, action) {
      state.currentPracticeSessionReducer = action.payload;
    },
    currentPracticeSessionDeleted(state, action) {
      state.currentPracticeSessionReducer = {};
    },
  },
});

export const { currentPracticeSessionAdded, currentPracticeSessionDeleted } =
  currentPracticeSessionSlice.actions;

export default currentPracticeSessionSlice.reducer;
