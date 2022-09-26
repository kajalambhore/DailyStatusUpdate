import React from "react";
const Main = ({ activeNote }) => {
  if (!activeNote) return <div className="no-active-note">No Active Note</div>;
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" autoFocus />
        <textarea id="body" placeholder="Write Your Note Here....." />
      </div>

      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.body}</div>
      </div>
    </div>
  );
};

export default Main;
