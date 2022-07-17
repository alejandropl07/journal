import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: { notes: [], active: null },
  reducers: {
    newNote: (state) => {},
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    notesLoaded: (state, action) => {
      state.notes = action.payload;
    },
    updateNote: (state) => {},
    updateImageUrl: (state) => {},
    deleteNote: (state) => {},
    logoutCleaning: (state) => {},
  },
});

export const {
  newNote,
  setActiveNote,
  notesLoaded,
  updateNote,
  updateImageUrl,
  deleteNote,
  logoutCleaning,
} = notesSlice.actions;
export default notesSlice.reducer;
