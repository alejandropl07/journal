import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry  pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://pbs.twimg.com/profile_images/464182833364234240/Wc3ljeQU_400x400.jpeg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">New day</p>
        <p className="journal__entry-content">
          Loasfdsonfdsh hsdhafjh fdsjfjdhf hfdsjfh ask jdskjfksjaf
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
