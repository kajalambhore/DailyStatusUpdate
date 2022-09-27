import React from "react";
import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (key, value) => {
    //update array
    onUpdateNote({
      ...activeNote,
      //so we can modify what we want and remaining will stay as it is
      [key]: value,
      //key=title and body
      lastModified: Date.now(),
    });
  };

  if (!activeNote)
    return <div className="app-main no-active-note">No Note Selected</div>;
  //if there is no active note then return no active note

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          autoFocus
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          //oneditfoeld two parameter -1-which one editing,and 2- current onchange value
        />
        <textarea
          id="body"
          placeholder="Write Your Notes Here....."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>

      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
