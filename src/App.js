import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      header: "This is my first Header",
      text: "This is my first Note",
      date: "12/06/2023"
    },
    {
      id: nanoid(),
      header: "This is my 2 Header",
      text: "This is my 2 Note",
      date: "13/06/2023"
    },
    {
      id: nanoid(),
      header: "This is my 3 Header",
      text: "This is my 3 Note",
      date: "14/06/2023"
    },
  ]);

  const addNote = (header, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      header: header,
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }

  return <div className="container"> 
    <NotesList notes={notes} handleAddNote={addNote}/>
  </div>
}

export default App;
