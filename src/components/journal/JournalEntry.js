import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../features/notes/notesSlice";

const JournalEntry = ({ id, date, title, body, url }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleEntry = () => {
    dispatch(setActiveNote({ id, date, title, body, url }));
  };

  return (
    <div className="journal__entry  pointer" onClick={handleEntry}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
