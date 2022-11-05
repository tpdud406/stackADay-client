import { createSlice } from "@reduxjs/toolkit";
import date from "date-and-time";

const today = new Date();
const initialState = {
  currentDate: date.format(today, "YYYY-MM-DD"),
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    showNextDay(state) {
      const dateObj = new Date(state.currentDate);
      const dateNum = dateObj.getDate();
      const newDate = new Date(dateObj.setDate(dateNum + 1));

      state.currentDate = date.format(newDate, "YYYY-MM-DD");
    },
    showPrevDay(state) {
      const dateObj = new Date(state.currentDate);
      const dateNum = dateObj.getDate();
      const newDate = new Date(dateObj.setDate(dateNum - 1));

      state.currentDate = date.format(newDate, "YYYY-MM-DD");
    },
  },
});

export const { showNextDay, showPrevDay } = calendarSlice.actions;
export default calendarSlice.reducer;
