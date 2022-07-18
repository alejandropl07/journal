import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: { notes: [], active: null },
  reducers: {
    newNote: (state, action) => {
      return {
        ...state,
        active: action.payload,
        notes: [...state.notes, action.payload],
      };
    },
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
    deleteNote: (state, action) => {
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    },
    logoutCleaning: (state) => {
      return {
        ...state,
        active: null,
        notes: [],
      };
    },
  },
});

export const {
  newNote,
  setActiveNote,
  notesLoaded,
  updateNote,
  deleteNote,
  logoutCleaning,
} = notesSlice.actions;
export default notesSlice.reducer;
