import { db } from "../../firebase/firebase-config";
import { loadNotes } from "../../helpers/loadNotes";
import { notesLoaded, setActiveNote } from "./notesSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
    console.log(doc);
    dispatch(
      setActiveNote({
        id: doc.id,
        title: newNote.title,
        body: newNote.body,
        date: newNote.date,
      })
    );
  };
};

export const startLoadNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(notesLoaded(notes));
  };
};
