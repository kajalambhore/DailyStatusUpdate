import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import { useState } from "react";
import uuid from "react-uuid";
function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
    //if note.id is presenet and not equal to idToDelete then it will return true and stay otherwise return false and remove from the array
  };

  const getActiveNote = () => {
    //get current store id and return object of active note

    return notes.find((note) => note.id === activeNote);
  };
  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />{" "}
      <Main activeNote={getActiveNote()} />
    </div>
  );
}

export default App;
