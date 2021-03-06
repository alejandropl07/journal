import Swal from "sweetalert2";
import { db } from "../../firebase/firebase-config";
import { loadNotes } from "../../helpers/loadNotes";
import { uploadPicture } from "../../helpers/uploadPicture";
import {
  deleteNote,
  notesLoaded,
  updateNote,
  newNote,
} from "./notesSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNoteFirestore = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/journal/notes`).add(newNoteFirestore);
    dispatch(
      newNote({
        id: doc.id,
        title: newNoteFirestore.title,
        body: newNoteFirestore.body,
        date: newNoteFirestore.date,
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

export const startUpdateNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const noteToFirestore = { ...note };

    delete noteToFirestore.id;
    if (!noteToFirestore.url) {
      delete noteToFirestore.url;
    }

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
    dispatch(updateNote({ id: note.id, ...noteToFirestore }));
    Swal.fire("Saved", noteToFirestore.title, "success");
  };
};

export const startUploadingPicture = (file) => {
  return async (dispatch, getState) => {
    const { active } = getState().notes;
    Swal.fire({
      title: "Uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      showConfirmButton: false,
    });

    const url = await uploadPicture(file);

    dispatch(startUpdateNote({ ...active, url }));

    Swal.close();
  };
};

export const startDeleteNote = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    await db.doc(`${uid}/journal/notes/${id}`).delete();

    dispatch(deleteNote(id));
  };
};
