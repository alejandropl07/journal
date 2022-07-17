import { db } from "../../firebase/firebase-config";
import { setActiveNote } from "./notesSlice";

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
