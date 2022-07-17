import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: { notes: [], active: null },
  reducers: {
    newNote: (state) => {},
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    loadNotes: (state) => {},
    updateNote: (state) => {},
    updateImageUrl: (state) => {},
    deleteNote: (state) => {},
    logoutCleaning: (state) => {},
  },
});

export const {
  newNote,
  setActiveNote,
  loadNotes,
  updateNote,
  updateImageUrl,
  deleteNote,
  logoutCleaning,
} = notesSlice.actions;
export default notesSlice.reducer;
