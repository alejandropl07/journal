import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startUpdateNote,
  startUploadingPicture,
} from "../../features/notes/thunks";

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleUpdateNote = () => {
    dispatch(startUpdateNote(active));
  };

  const handlePictureUpload = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploadingPicture(file));
    }
  };

  return (
    <div className="notes__app-bar">
      <span>25 de mayo 2022</span>
      <input
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        id="fileSelector"
      />
      <div>
        <button className="btn" onClick={handlePictureUpload}>
          Picture
        </button>
        <button className="btn" onClick={handleUpdateNote}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
