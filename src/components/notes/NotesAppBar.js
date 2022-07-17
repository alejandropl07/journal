import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startUpdateNote } from "../../features/notes/thunks";

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const handleUpdateNote = () => {
    dispatch(startUpdateNote(active));
  };

  return (
    <div className="notes__app-bar">
      <span>25 de mayo 2022</span>
      <div>
        <button className="btn">Picture</button>
        <button className="btn" onClick={handleUpdateNote}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
