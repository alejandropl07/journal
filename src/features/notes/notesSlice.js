import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: { notes: [], active: null },
  reducers: {},
});

export const {} = notesSlice.actions;
export default notesSlice.reducer;
