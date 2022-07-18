import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveNote } from "../../features/notes/notesSlice";
import { startDeleteNote } from "../../features/notes/thunks";
import { useForm } from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(active);
  const { title, body, id } = formValues;

  const activeId = useRef(active.id);

  const handleDelete = () => {
    dispatch(startDeleteNote(id));
  };

  useEffect(() => {
    if (active.id !== activeId.current) {
      reset(active);
      activeId.current = active.id;
    }
  }, [active, reset]);

  useEffect(() => {
    dispatch(setActiveNote(formValues));
  }, [formValues, dispatch]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What happened today"
          className="notes__text-area"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {active.url && (
          <div className="notes__image">
            <img src={active.url} alt={active.title} />
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
