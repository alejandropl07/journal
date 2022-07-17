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
    updateNote: (state, action) => {
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    },
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
