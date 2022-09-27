import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import { useState } from "react";
import uuid from "react-uuid";
import { useEffect } from "react";
function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  //JSON.parse(localStorage.notes) is false or undefined return [] empty array
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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

  //oneditfield in main.js receive that updates here
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        //if currentnote id === current active note then return updated note (replace the iteration to updated note) else return original note doesnt apply any iteration
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
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
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
