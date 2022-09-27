import React from "react";

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  //create decending order means most recently edited at top

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote} className="btn btn-dark w-25">
          Add
        </button>
      </div>

      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => {
          return (
            <div
              className={`app-sidebar-note ${
                note.id === activeNote && "active"
              }`}
              onClick={() => setActiveNote(note.id)}
              key={note.id}
            >
              <div className="sidebar-note-title text-dark">
                <strong>{note.title}</strong>
                <button
                  onClick={() => onDeleteNote(note.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </div>

              <p>{note.body && note.body.substr(0, 100) + "....."}</p>
              {/* if there is note.body then do note.body.substr(0,100) otherwise do nothing*/}
              <small className="note-meta text-light">
                Last modified{" "}
                {new Date(note.lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
